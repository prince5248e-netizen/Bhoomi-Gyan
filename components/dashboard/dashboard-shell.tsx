"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { TopHeader } from "./top-header"
import { StatCards } from "./stat-cards"
import { PolicyTable } from "./policy-table"
import { ChatAssistant } from "./chat-assistant"

export function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 px-4 py-6 lg:px-6 lg:py-8">
          <div className="mb-6">
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
              National Land Governance Overview
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Real-time analytics across digitized records, state policies, and
              land dispute resolution.
            </p>
          </div>

          <StatCards />

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <PolicyTable />
            </div>
            <div className="lg:col-span-2">
              <ChatAssistant />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
