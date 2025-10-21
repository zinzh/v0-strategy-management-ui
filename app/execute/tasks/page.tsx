import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, CheckSquare, Circle, CheckCircle2 } from "lucide-react"

export default function TasksPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>
          <p className="text-muted-foreground">Individual action items and deliverables</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tasks..." className="pl-9" />
        </div>
        <Button variant="outline" className="bg-transparent">
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* To Do Column */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Circle className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold">To Do</h3>
            <span className="ml-auto text-sm text-muted-foreground">5</span>
          </div>
          <div className="space-y-2">
            {[
              { title: "Design homepage mockup", project: "Website Redesign", priority: "High" },
              { title: "Setup development environment", project: "CRM Implementation", priority: "Medium" },
              { title: "Research competitor features", project: "Mobile App Launch", priority: "Low" },
            ].map((task, i) => (
              <Card key={i} className="p-3 bg-muted/30 hover:bg-muted/50 cursor-pointer">
                <p className="font-medium text-sm mb-1">{task.title}</p>
                <p className="text-xs text-muted-foreground mb-2">{task.project}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "Medium"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {task.priority}
                </span>
              </Card>
            ))}
          </div>
        </Card>

        {/* In Progress Column */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckSquare className="h-4 w-4 text-blue-600" />
            <h3 className="font-semibold">In Progress</h3>
            <span className="ml-auto text-sm text-muted-foreground">3</span>
          </div>
          <div className="space-y-2">
            {[
              { title: "Implement user authentication", project: "Website Redesign", priority: "High" },
              { title: "Create database schema", project: "CRM Implementation", priority: "High" },
            ].map((task, i) => (
              <Card key={i} className="p-3 bg-blue-50 hover:bg-blue-100 cursor-pointer border-blue-200">
                <p className="font-medium text-sm mb-1">{task.title}</p>
                <p className="text-xs text-muted-foreground mb-2">{task.project}</p>
                <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">{task.priority}</span>
              </Card>
            ))}
          </div>
        </Card>

        {/* Done Column */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <h3 className="font-semibold">Done</h3>
            <span className="ml-auto text-sm text-muted-foreground">8</span>
          </div>
          <div className="space-y-2">
            {[
              { title: "Setup project repository", project: "Website Redesign", completedDate: "2 days ago" },
              { title: "Define project requirements", project: "Mobile App Launch", completedDate: "3 days ago" },
            ].map((task, i) => (
              <Card key={i} className="p-3 bg-green-50 hover:bg-green-100 cursor-pointer border-green-200">
                <p className="font-medium text-sm mb-1 line-through text-muted-foreground">{task.title}</p>
                <p className="text-xs text-muted-foreground mb-2">{task.project}</p>
                <span className="text-xs text-green-700">✓ {task.completedDate}</span>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
