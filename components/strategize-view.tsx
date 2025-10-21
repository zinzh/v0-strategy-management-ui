import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Lock, User, Target, Bot } from "lucide-react"

export function StrategizeView() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Strategize</h1>
          <p className="text-muted-foreground mt-1">Define your vision and strategies</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Strategy
        </Button>
      </div>

      {/* Vision Section */}
      <Card className="border-2 border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Company Vision
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-md border border-border">
            <p className="text-sm text-muted-foreground italic">
              [Vision statement placeholder - Click to edit or use AI to craft your vision]
            </p>
          </div>
          <Button variant="outline" size="sm" className="mt-3 bg-transparent">
            <Bot className="mr-2 h-4 w-4" />
            AI Assist
          </Button>
        </CardContent>
      </Card>

      {/* Strategies List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Active Strategies</h2>

        {/* Strategy Card 1 */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Expand Market Presence</CardTitle>
                  <Badge variant="default">Active</Badge>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Increase market share in key regions by 25% through strategic partnerships
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Owner */}
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Owner:</span>
              <span className="font-medium">Sarah Johnson</span>
            </div>

            {/* Challenge Level */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Challenge:</span>
              <Badge variant="outline">High</Badge>
            </div>

            {/* KPIs */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Key Performance Indicators</p>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded border border-border">
                  <span className="text-sm">Market Share Growth</span>
                  <span className="text-sm font-medium">Target: 25%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded border border-border">
                  <span className="text-sm">New Partnerships</span>
                  <span className="text-sm font-medium">Target: 10</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded border border-border">
                  <span className="text-sm">Revenue Growth</span>
                  <span className="text-sm font-medium">Target: $5M</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm">
                View Execution Boards
              </Button>
              <Button variant="outline" size="sm">
                Edit KPIs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Card 2 - Proposed */}
        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Digital Transformation Initiative</CardTitle>
                  <Badge variant="secondary">Proposed</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Modernize internal systems and processes to improve efficiency
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Owner:</span>
              <span className="font-medium">Michael Chen</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Challenge:</span>
              <Badge variant="outline">Medium</Badge>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Key Performance Indicators</p>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded border border-border">
                  <span className="text-sm">Process Automation</span>
                  <span className="text-sm font-medium">Target: 60%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded border border-border">
                  <span className="text-sm">Cost Reduction</span>
                  <span className="text-sm font-medium">Target: 30%</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm">Lock Strategy</Button>
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                <Bot className="mr-2 h-4 w-4" />
                AI Suggestions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
