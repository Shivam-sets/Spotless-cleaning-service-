import { business } from "@/lib/site";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-grad-brand shadow-glow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3l1.7 5.1L19 9.8l-4.6 1.6L12 17l-2.4-5.6L5 9.8l5.3-1.7L12 3z"
            fill="#fff"
          />
          <path
            d="M18.4 14.2l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1z"
            fill="#fff"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className={`font-display text-[1.35rem] font-semibold leading-none tracking-tightish ${text}`}>
        {business.name}
      </span>
    </span>
  );
}
