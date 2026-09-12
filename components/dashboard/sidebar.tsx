"use client"

import {
  BarChart3,
  Database,
  Globe,
  Home,
  MapPinned,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Policy Archives", icon: Database, active: false },
  { label: "State Analytics", icon: BarChart3, active: false },
  { label: "Local Administration", icon: Globe, active: false },
  { label: "Settings", icon: Settings, active: false },
]

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPinned className="size-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-tight text-sidebar-foreground">
              Bhoomi-Gyan
            </p>
            <p className="truncate text-xs text-muted-foreground">
              National Land Portal
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto rounded-md p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:hidden"
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5" aria-label="Main navigation">
          <p className="px-3 pb-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
            Governance
          </p>
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href="#"
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                )}
              >
                <Icon
                  className={cn(
                    "size-[18px] shrink-0",
                    item.active
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary",
                  )}
                />
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-3">
            <ShieldCheck className="size-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-primary">
                GovTech Compliance
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Status: Secure
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
