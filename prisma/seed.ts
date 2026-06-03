import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
import bcrypt from "bcryptjs";

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

const dbPath = path.join(process.cwd(), "prisma", "dev.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
  const passwordHash = await hashPassword("password123");

  const admin = await prisma.user.create({
    data: {
      name: "Admin CuciGo",
      email: "admin@cucigo.id",
      passwordHash,
      role: "ADMIN",
    },
  });

  const student = await prisma.user.create({
    data: {
      name: "Rizki Ananda",
      phone: "+6281234567890",
      email: "rizki@student.ugm.ac.id",
      passwordHash,
      role: "STUDENT",
    },
  });

  const student2 = await prisma.user.create({
    data: {
      name: "Dewi Sari",
      phone: "+6281234567891",
      email: "dewi@student.ugm.ac.id",
      passwordHash,
      role: "STUDENT",
    },
  });

  const student3 = await prisma.user.create({
    data: {
      name: "Ayu Pratiwi",
      phone: "+6281234567892",
      email: "ayu@student.ugm.ac.id",
      passwordHash,
      role: "STUDENT",
    },
  });

  const partnerUser = await prisma.user.create({
    data: {
      name: "Bunda Laundry",
      email: "bunda@laundry.id",
      phone: "+6281234500001",
      passwordHash,
      role: "PARTNER",
    },
  });

  const partner = await prisma.laundryPartner.create({
    data: {
      userId: partnerUser.id,
      name: "Bunda Laundry Kemang",
      description: "Laundry terpercaya sejak 2015",
      address: "Jl. Kemang Raya No. 45, Yogyakarta",
      latitude: -7.8019,
      longitude: 110.3636,
      rating: 4.9,
      reviewCount: 234,
      openUntil: "22:00",
    },
  });

  await prisma.partnerPrice.createMany({
    data: [
      { partnerId: partner.id, serviceType: "WASH_ONLY", pricePerKg: 5000, durationDays: 2 },
      { partnerId: partner.id, serviceType: "WASH_IRON", pricePerKg: 8000, durationDays: 3 },
      { partnerId: partner.id, serviceType: "EXPRESS", pricePerKg: 12000, durationDays: 0 },
    ],
  });

  const partnerUser2 = await prisma.user.create({
    data: {
      name: "Kliniku Laundry",
      email: "kliniku@laundry.id",
      phone: "+6281234500002",
      passwordHash,
      role: "PARTNER",
    },
  });

  const partner2 = await prisma.laundryPartner.create({
    data: {
      userId: partnerUser2.id,
      name: "Kliniku Laundry",
      description: "Modern laundry service",
      address: "Jl. Patehan No. 12, Yogyakarta",
      latitude: -7.8035,
      longitude: 110.3653,
      rating: 4.7,
      reviewCount: 189,
      openUntil: "21:00",
    },
  });

  await prisma.partnerPrice.createMany({
    data: [
      { partnerId: partner2.id, serviceType: "WASH_ONLY", pricePerKg: 5500, durationDays: 2 },
      { partnerId: partner2.id, serviceType: "WASH_IRON", pricePerKg: 8500, durationDays: 3 },
      { partnerId: partner2.id, serviceType: "EXPRESS", pricePerKg: 13000, durationDays: 0 },
    ],
  });

  const driver = await prisma.user.create({
    data: {
      name: "Budi Santoso",
      phone: "+6281234600001",
      email: "budi@cucigo.id",
      passwordHash,
      role: "DRIVER",
    },
  });

  await prisma.address.create({
    data: {
      userId: student.id,
      label: "Kost Putri Melati",
      address: "Jl. Cendana No. 14, Kemang, Yogyakarta",
      latitude: -7.8025,
      longitude: 110.3640,
      isDefault: true,
    },
  });

  const order1 = await prisma.order.create({
    data: {
      orderCode: "CGO-240815",
      studentId: student.id,
      partnerId: partner.id,
      driverId: driver.id,
      serviceType: "WASH_ONLY",
      weightKg: 3,
      pickupAddress: "Jl. Cendana No. 14, Kemang, Yogyakarta",
      pickupLatitude: -7.8025,
      pickupLongitude: 110.3640,
      pickupDate: "2026-06-09",
      pickupTime: "12:00",
      deliveryDate: "2026-06-11",
      status: "WASHING",
      subtotal: 15000,
      deliveryFee: 8000,
      discountAmount: 0,
      totalAmount: 23000,
    },
  });

  await prisma.orderStatusHistory.createMany({
    data: [
      { orderId: order1.id, status: "ORDERED", note: "Order created" },
      { orderId: order1.id, status: "DRIVER_ASSIGNED", note: "Driver Budi assigned" },
      { orderId: order1.id, status: "PICKED_UP", note: "Picked up from Kost Putri Melati" },
      { orderId: order1.id, status: "WASHING", note: "In progress at partner location" },
    ],
  });

  await prisma.promoCode.create({
    data: {
      code: "FIRST30",
      discountPercent: 30,
      maxUses: 100,
      usedCount: 42,
      isActive: true,
    },
  });

  console.log("Seed data created successfully!");
  console.log(`Users: 7`);
  console.log(`Partners: 2`);
  console.log(`Orders: 1`);
  console.log(`\nLogin credentials (email:password):`);
  console.log(`  Student: rizki@student.ugm.ac.id:password123`);
  console.log(`  Partner: bunda@laundry.id:password123`);
  console.log(`  Driver: budi@cucigo.id:password123`);
  console.log(`  Admin: admin@cucigo.id:password123`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });