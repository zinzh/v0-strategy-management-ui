"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Target,
  Rocket,
  Activity,
  TrendingUp,
  Users,
  Newspaper,
  ChevronDown,
  ChevronRight,
  FolderKanban,
  Lightbulb,
  Layers,
  CheckSquare,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const [executeExpanded, setExecuteExpanded] = useState(pathname.startsWith("/execute"))

  const sections = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { id: "strategize", label: "Strategize", icon: Target, href: "/strategize" },
    {
      id: "execute",
      label: "Execute",
      icon: Rocket,
      href: "/execute",
      subItems: [
        { id: "projects", label: "Projects", icon: FolderKanban, href: "/execute/projects" },
        { id: "initiatives", label: "Initiatives", icon: Lightbulb, href: "/execute/initiatives" },
        { id: "programs", label: "Programs", icon: Layers, href: "/execute/programs" },
        { id: "tasks", label: "Tasks", icon: CheckSquare, href: "/execute/tasks" },
      ],
    },
    { id: "monitor", label: "Monitor", icon: Activity, href: "/monitor" },
    { id: "evaluate", label: "Evaluate & Learn", icon: TrendingUp, href: "/evaluate" },
  ]

  const tools = [
    { id: "community", label: "Community", icon: Users, href: "/community" },
    { id: "feeds", label: "Industry Feeds", icon: Newspaper, href: "/feeds" },
  ]

  return (
    <aside className="w-64 border-r border-border bg-muted/30 flex flex-col">
      <div className="p-4 border-b border-border">
        <h1 className="text-lg font-semibold">Strategy Platform</h1>
        <p className="text-xs text-muted-foreground mt-1">Vision-Driven Execution</p>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-auto">
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground px-3 mb-2">MAIN SECTIONS</p>
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = pathname === section.href
            const hasSubItems = section.subItems && section.subItems.length > 0

            return (
              <div key={section.id}>
                {hasSubItems ? (
                  <>
                    <Button
                      variant={pathname.startsWith(section.href) ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setExecuteExpanded(!executeExpanded)}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {section.label}
                      {executeExpanded ? (
                        <ChevronDown className="ml-auto h-4 w-4" />
                      ) : (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </Button>

                    {executeExpanded && (
                      <div className="ml-4 mt-1 space-y-1">
                        {section.subItems.map((subItem) => {
                          const SubIcon = subItem.icon
                          const isSubActive = pathname === subItem.href
                          return (
                            <Button
                              key={subItem.id}
                              variant={isSubActive ? "secondary" : "ghost"}
                              size="sm"
                              className="w-full justify-start"
                              asChild
                            >
                              <Link href={subItem.href}>
                                <SubIcon className="mr-2 h-3 w-3" />
                                {subItem.label}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start" asChild>
                    <Link href={section.href}>
                      <Icon className="mr-2 h-4 w-4" />
                      {section.label}
                    </Link>
                  </Button>
                )}
              </div>
            )
          })}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground px-3 mb-2">TOOLS</p>
          {tools.map((tool) => {
            const Icon = tool.icon
            const isActive = pathname === tool.href
            return (
              <Button key={tool.id} variant={isActive ? "secondary" : "ghost"} className="w-full justify-start" asChild>
                <Link href={tool.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {tool.label}
                </Link>
              </Button>
            )
          })}
        </div>
      </nav>

      <div className="p-3 border-t border-border">
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          Settings
        </Button>
      </div>
    </aside>
  )
}
