import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, FolderKanban } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-muted-foreground">Manage execution projects linked to strategies</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-9" />
        </div>
        <Button variant="outline" className="bg-transparent">
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            name: "Website Redesign",
            strategy: "Digital Transformation",
            status: "In Progress",
            tasks: 12,
            completed: 7,
          },
          { name: "CRM Implementation", strategy: "Customer Retention", status: "Planning", tasks: 8, completed: 2 },
          { name: "Mobile App Launch", strategy: "Market Expansion", status: "In Progress", tasks: 15, completed: 10 },
          {
            name: "Data Analytics Platform",
            strategy: "Digital Transformation",
            status: "Review",
            tasks: 6,
            completed: 6,
          },
        ].map((project, i) => (
          <Card key={i} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                <FolderKanban className="h-5 w-5" />
              </div>
              <span className="text-xs px-2 py-1 bg-muted rounded">{project.status}</span>
            </div>
            <h3 className="font-semibold mb-1">{project.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">→ {project.strategy}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {project.completed}/{project.tasks} tasks
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(project.completed / project.tasks) * 100}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
