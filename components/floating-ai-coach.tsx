"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, X, Send, Sparkles } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function FloatingAICoach() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 border-0 animate-pulse hover:animate-none hover:scale-110"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <div className="relative">
            <Bot className="h-6 w-6 text-white" />
            <Sparkles className="h-3 w-3 text-white absolute -top-1 -right-1 animate-pulse" />
          </div>
        )}
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl flex flex-col">
          <div className="p-4 border-b border-border bg-gradient-to-r from-purple-500/10 to-blue-600/10">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">AI Coach</h3>
                <p className="text-xs text-muted-foreground">Contextual strategy guidance</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-auto space-y-4">
            <div className="bg-muted/50 p-3 rounded-lg border border-border">
              <p className="text-sm">Hello! I'm your AI Strategy Coach. I can help you with:</p>
              <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Defining clear strategies and KPIs</li>
                <li>Breaking down strategies into actionable tasks</li>
                <li>Analyzing execution progress</li>
                <li>Providing insights and recommendations</li>
              </ul>
            </div>

            {/* Example suggestions */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Quick actions:</p>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs bg-transparent">
                Help me define a new strategy
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs bg-transparent">
                Analyze my current execution progress
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs bg-transparent">
                Suggest KPIs for my strategy
              </Button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Textarea
                placeholder="Ask me anything about your strategy..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[60px] resize-none"
              />
              <Button
                size="icon"
                className="shrink-0 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
