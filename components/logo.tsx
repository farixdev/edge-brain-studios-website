import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5 leading-none', className)}>
      <span
        aria-hidden
        className="relative flex h-8 w-8 items-center justify-center rounded-[0.55rem] bg-primary text-primary-foreground shadow-[0_0_20px_rgba(245,168,0,0.45)]"
      >
        <span className="font-heading text-lg font-bold tracking-[-0.06em]">E</span>
      </span>
      <span className="flex flex-col">
        <span className="font-heading text-[1.05rem] font-bold leading-none tracking-[-0.03em] text-foreground">
          Edge<span className="text-primary">Brain</span>
        </span>
        <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground">
          Studios
        </span>
      </span>
    </div>
  )
}
