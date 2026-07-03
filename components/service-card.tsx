import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'group h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
        className,
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-7" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold text-card-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
