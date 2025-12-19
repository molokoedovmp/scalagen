import { cn } from "@/lib/utils";

type LogoLoopItem = {
  name: string;
};

type LogoLoopProps = {
  items: LogoLoopItem[];
  className?: string;
};

export function LogoLoop({ items, className }: LogoLoopProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_32px_-26px_rgba(10,24,56,0.45)]",
        className,
      )}
      aria-label="Технологический стек"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex min-w-full gap-3 px-4 py-3 animate-logo-loop hover:[animation-play-state:paused]">
        {doubled.map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-sky-800"
            aria-hidden={index >= items.length}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
