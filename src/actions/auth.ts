"use server";

import prisma from "@/lib/db";
import { createSession, destroySession, hashPassword, verifyPassword } from "@/lib/auth";
import { generateOrderCode, SERVICE_TYPES } from "@/lib/constants";

export async function registerWithEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string || "STUDENT";

  const existing = await prisma.user.findFirst({
    where: { email },
  });
  if (existing) return { error: "Email already registered" };

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { name, email, passwordHash, role },
  });

  await createSession({
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
    phone: user.phone,
  });

  return { success: true };
}

export async function loginWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.passwordHash) return { error: "Invalid credentials" };

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) return { error: "Invalid credentials" };

  await createSession({
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
    phone: user.phone,
  });

  return { success: true, role: user.role };
}

export async function logout() {
  await destroySession();
}

export async function createOrder(formData: FormData) {
  const studentId = formData.get("studentId") as string;
  const partnerId = formData.get("partnerId") as string;
  const serviceType = formData.get("serviceType") as string;
  const weightKg = parseInt(formData.get("weightKg") as string);
  const pickupDate = formData.get("pickupDate") as string;
  const pickupTime = formData.get("pickupTime") as string;
  const pickupAddress = formData.get("pickupAddress") as string;
  const promoCode = formData.get("promoCode") as string | null;

  const serviceKey = serviceType === "WASH_ONLY" ? "WASH_ONLY" : serviceType === "WASH_IRON" ? "WASH_IRON" : "EXPRESS";
  const pricePerKg = SERVICE_TYPES[serviceKey as keyof typeof SERVICE_TYPES].pricePerKg;
  const subtotal = weightKg * pricePerKg;
  const deliveryFee = 8000;
  let discountAmount = 0;

  if (promoCode) {
    const promo = await prisma.promoCode.findUnique({ where: { code: promoCode } });
    if (promo && promo.isActive && promo.usedCount < promo.maxUses) {
      discountAmount = Math.round((subtotal + deliveryFee) * promo.discountPercent / 100);
    }
  }

  const totalAmount = subtotal + deliveryFee - discountAmount;
  const orderCode = generateOrderCode();

  const order = await prisma.order.create({
    data: {
      orderCode,
      studentId,
      partnerId,
      serviceType,
      weightKg,
      pickupAddress,
      pickupDate,
      pickupTime,
      status: "ORDERED",
      subtotal,
      deliveryFee,
      discountAmount,
      promoCode,
      totalAmount,
    },
  });

  await prisma.orderStatusHistory.create({
    data: {
      orderId: order.id,
      status: "ORDERED",
      note: "Order created",
    },
  });

  return { success: true, orderId: order.id, orderCode: order.orderCode };
}

export async function updateOrderStatus(orderId: string, status: string, note?: string) {
  await prisma.order.update({
    where: { id: orderId },
    data: { status },
  });

  await prisma.orderStatusHistory.create({
    data: {
      orderId,
      status,
      note: note || `Status updated to ${status}`,
    },
  });

  return { success: true };
}