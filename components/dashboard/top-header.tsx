"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe, Landmark, Menu, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const languages = ["English", "Hindi", "Marathi", "Tamil"]

export function TopHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const [lang, setLang] = useState("English")
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="flex items-center justify-center gap-2 border-b border-border bg-primary px-4 py-1.5 text-center text-primary-foreground lg:px-6">
        <Landmark className="size-3.5 shrink-0 opacity-90" />
        <p className="text-[0.72rem] font-medium tracking-wide">
          Government of India <span className="opacity-60">|</span> Ministry of Rural Development
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-3 lg:px-6">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </button>

        <div className="relative flex-1 lg:mx-auto lg:max-w-2xl">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-[18px] -translate-y-1/2 text-primary" />
          <input
            type="search"
            placeholder="Ask the AI: Search across 10,000+ national land policies..."
            aria-label="Search national land policies"
            className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Globe className="size-4 text-muted-foreground" />
              <span className="hidden sm:inline">{lang}</span>
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </button>
            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setLangOpen(false)}
                  aria-hidden="true"
                />
                <ul
                  role="listbox"
                  className="absolute right-0 z-20 mt-1.5 w-40 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-lg"
                >
                  {languages.map((l) => (
                    <li key={l}>
                      <button
                        role="option"
                        aria-selected={l === lang}
                        onClick={() => {
                          setLang(l)
                          setLangOpen(false)
                        }}
                        className={cn(
                          "flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-muted",
                          l === lang
                            ? "font-medium text-primary"
                            : "text-popover-foreground",
                        )}
                      >
                        {l}
                        {l === lang && <Check className="size-4" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-border bg-background py-1 pl-1 pr-3">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
              MO
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold leading-tight text-foreground">
                Ministry Official
              </p>
              <p className="text-[0.7rem] leading-tight text-muted-foreground">
                Admin Access
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
