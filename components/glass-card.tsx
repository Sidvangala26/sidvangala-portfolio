import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-surface noise-overlay relative overflow-hidden rounded-[28px] border border-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
