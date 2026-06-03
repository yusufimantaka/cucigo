interface ScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function Screen({ children, className = "" }: ScreenProps) {
  return (
    <div className={`mobile-frame ${className}`}>
      {children}
    </div>
  );
}
