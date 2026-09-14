"use client"

import { useState } from "react"
import { Bot, BookMarked, SendHorizontal, Sparkles } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  text: string
  citation?: string
}

const initialMessages: Message[] = [
  {
    role: "user",
    text: "What is the compensation rate for tribal land under the 2013 Act?",
  },
  {
    role: "assistant",
    text: "Under the Right to Fair Compensation and Transparency in Land Acquisition Act, 2013, tribal (Scheduled Area) land acquisition requires prior consent and compensation of up to four times the market value in rural areas, along with mandatory rehabilitation and resettlement entitlements for affected families.",
    citation: "Ref: Land Act 2013, Sec 4",
  },
]

export function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    setMessages((prev) => [
      ...prev,
      { role: "user", text: value },
      {
        role: "assistant",
        text: "Searching across 10,000+ indexed land policies to compile a verified response with source citations...",
        citation: "Ref: National Policy Index",
      },
    ])
    setInput("")
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Bot className="size-5" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Policy Research Assistant
          </h2>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Chat with the Archives
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.role === "user" ? "flex justify-end" : "flex justify-start"
            }
          >
            <div
              className={
                msg.role === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-sm"
                  : "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-muted/70 px-4 py-3 text-sm text-foreground"
              }
            >
              {msg.role === "assistant" && (
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" />
                  AI Response
                </p>
              )}
              <p className="leading-relaxed">{msg.text}</p>
              {msg.citation && (
                <button className="mt-2.5 inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/15 px-2 py-1 text-xs font-medium text-accent-foreground transition-colors hover:bg-accent/25">
                  <BookMarked className="size-3.5" />
                  {`[${msg.citation}]`}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about any land policy or act..."
          aria-label="Message the policy research assistant"
          className="h-10 flex-1 rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          disabled={!input.trim()}
        >
          <SendHorizontal className="size-[18px]" />
        </button>
      </form>
    </div>
  )
}
