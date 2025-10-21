import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Lightbulb } from "lucide-react"

export default function InitiativesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Initiatives</h1>
          <p className="text-muted-foreground">Strategic initiatives driving change</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Initiative
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search initiatives..." className="pl-9" />
        </div>
        <Button variant="outline" className="bg-transparent">
          Filter
        </Button>
      </div>

      <div className="space-y-4">
        {[
          {
            name: "Customer Experience Improvement",
            strategy: "Customer Retention",
            status: "Active",
            owner: "Sarah Johnson",
            impact: "High",
            description: "Enhance customer touchpoints across all channels",
          },
          {
            name: "AI Integration",
            strategy: "Digital Transformation",
            status: "Planning",
            owner: "Mike Chen",
            impact: "High",
            description: "Integrate AI capabilities into core products",
          },
          {
            name: "Sustainability Program",
            strategy: "Market Expansion",
            status: "Active",
            owner: "Emma Davis",
            impact: "Medium",
            description: "Implement eco-friendly practices across operations",
          },
        ].map((initiative, i) => (
          <Card key={i} className="p-5 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded bg-muted flex items-center justify-center shrink-0">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{initiative.name}</h3>
                    <p className="text-sm text-muted-foreground">→ {initiative.strategy}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded">{initiative.status}</span>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                      {initiative.impact} Impact
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-3">{initiative.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Owner: {initiative.owner}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
