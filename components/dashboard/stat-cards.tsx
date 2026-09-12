import {
  FileStack,
  Landmark,
  ScanLine,
  ScrollText,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

type Stat = {
  label: string
  value: string
  icon: LucideIcon
  trend?: string
  sub?: string
}

const stats: Stat[] = [
  {
    label: "Total Digitized Records",
    value: "45.2M",
    icon: FileStack,
    trend: "+12% this month",
  },
  {
    label: "Active State Policies",
    value: "1,204",
    icon: ScrollText,
    sub: "Across 28 states & 8 UTs",
  },
  {
    label: "Resolved Land Disputes",
    value: "89,400",
    icon: Landmark,
    sub: "FY 2024–25 to date",
  },
  {
    label: "ULPIN Generated",
    value: "8.5M",
    icon: ScanLine,
    sub: "Unique Land Parcel IDs",
  },
]

export function StatCards() {
  return (
    <section aria-label="Executive overview">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-[18px]" />
                </span>
              </div>
              <p className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
              {stat.trend ? (
                <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  <TrendingUp className="size-3.5" />
                  {stat.trend}
                </p>
              ) : (
                <p className="mt-2 text-xs text-muted-foreground">{stat.sub}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
