import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Layers } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Programs</h1>
          <p className="text-muted-foreground">Coordinated groups of related projects</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Program
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search programs..." className="pl-9" />
        </div>
        <Button variant="outline" className="bg-transparent">
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[
          {
            name: "Digital Excellence Program",
            strategy: "Digital Transformation",
            projects: 5,
            budget: "$2.5M",
            status: "On Track",
            completion: 68,
          },
          {
            name: "Growth Acceleration Program",
            strategy: "Market Expansion",
            projects: 3,
            budget: "$1.8M",
            status: "At Risk",
            completion: 45,
          },
          {
            name: "Customer Success Program",
            strategy: "Customer Retention",
            projects: 4,
            budget: "$1.2M",
            status: "On Track",
            completion: 72,
          },
        ].map((program, i) => (
          <Card key={i} className="p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded bg-muted flex items-center justify-center shrink-0">
                <Layers className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold">{program.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      program.status === "On Track" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {program.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">→ {program.strategy}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{program.completion}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${program.completion}%` }} />
              </div>
              <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                <span className="text-muted-foreground">{program.projects} Projects</span>
                <span className="font-medium">{program.budget}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
