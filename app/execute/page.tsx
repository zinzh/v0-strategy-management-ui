import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FolderKanban, Lightbulb, Layers, CheckSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExecutePage() {
  const executeCategories = [
    {
      title: "Projects",
      description: "Manage execution projects linked to strategies",
      icon: FolderKanban,
      href: "/execute/projects",
      count: 12,
      color: "text-blue-600",
    },
    {
      title: "Initiatives",
      description: "Strategic initiatives driving change",
      icon: Lightbulb,
      href: "/execute/initiatives",
      count: 8,
      color: "text-yellow-600",
    },
    {
      title: "Programs",
      description: "Coordinated groups of related projects",
      icon: Layers,
      href: "/execute/programs",
      count: 5,
      color: "text-purple-600",
    },
    {
      title: "Tasks",
      description: "Individual action items and deliverables",
      icon: CheckSquare,
      href: "/execute/tasks",
      count: 47,
      color: "text-green-600",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Execute</h1>
        <p className="text-muted-foreground">Transform strategies into actionable execution plans</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {executeCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 rounded-lg bg-muted flex items-center justify-center ${category.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{category.count} active</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

              <Button variant="outline" className="w-full bg-transparent group" asChild>
                <Link href={category.href}>
                  View {category.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-muted/30">
        <h3 className="font-semibold mb-2">Execution Workflow</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Create execution boards linked to your strategies. Each item requires approval before moving to active status.
        </p>
        <div className="flex gap-2">
          <Button size="sm">Create New Project</Button>
          <Button size="sm" variant="outline" className="bg-transparent">
            View Approval Queue
          </Button>
        </div>
      </Card>
    </div>
  )
}
