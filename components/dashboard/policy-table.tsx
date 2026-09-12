"use client"

import { Languages, Sparkles } from "lucide-react"
import { useState } from "react"

type Category = "Central Act" | "State Policy" | "Land Dispute"

type Policy = {
  name: string
  state: string
  year: string
  category: Category
}

const policies: Policy[] = [
  {
    name: "DILRMP Implementation Guidelines",
    state: "Central",
    year: "2024",
    category: "Central Act",
  },
  {
    name: "Maharashtra Tenancy Act",
    state: "Maharashtra",
    year: "1948",
    category: "State Policy",
  },
  {
    name: "Right to Fair Compensation Act",
    state: "Central",
    year: "2013",
    category: "Central Act",
  },
  {
    name: "Karnataka Land Reforms Act",
    state: "Karnataka",
    year: "1961",
    category: "State Policy",
  },
  {
    name: "Digital India Land Records Modernisation",
    state: "Central",
    year: "2023",
    category: "Central Act",
  },
  {
    name: "Tamil Nadu Patta Passbook Act",
    state: "Tamil Nadu",
    year: "1983",
    category: "State Policy",
  },
  {
    name: "Vedanta v. State of Odisha (Mining Rights)",
    state: "Odisha",
    year: "2021",
    category: "Land Dispute",
  },
  {
    name: "Gram Sabha Boundary Adjudication Order",
    state: "Rajasthan",
    year: "2022",
    category: "Land Dispute",
  },
]

const filters = [
  { label: "All Policies", value: "all" as const },
  { label: "Central Acts", value: "Central Act" as const },
  { label: "State Policies", value: "State Policy" as const },
  { label: "Land Disputes", value: "Land Dispute" as const },
]

type Filter = (typeof filters)[number]["value"]

export function PolicyTable() {
  const [active, setActive] = useState<Filter>("all")

  const visible =
    active === "all"
      ? policies
      : policies.filter((policy) => policy.category === active)

  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Policy Repository
          </h2>
          <p className="text-xs text-muted-foreground">
            Recent land acts & governance documents
          </p>
        </div>
        <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {visible.length} records
        </span>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-border px-5 py-3">
        {filters.map((filter) => {
          const isActive = active === filter.value
          return (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Document Name
              </th>
              <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                State
              </th>
              <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Year
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.map((policy) => (
              <tr
                key={policy.name}
                className="border-b border-border/70 transition-colors last:border-0 hover:bg-muted/60"
              >
                <td className="px-5 py-3.5 font-medium text-foreground">
                  {policy.name}
                </td>
                <td className="px-3 py-3.5 text-muted-foreground">
                  {policy.state}
                </td>
                <td className="px-3 py-3.5 text-muted-foreground">
                  {policy.year}
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-2">
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-colors hover:bg-primary/20">
                      <Sparkles className="size-3.5" />
                      AI Summary
                    </button>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-accent/18 px-3 py-1 text-xs font-medium text-accent-foreground ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/30">
                      <Languages className="size-3.5" />
                      Translate
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
