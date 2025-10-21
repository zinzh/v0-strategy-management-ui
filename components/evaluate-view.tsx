import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Target, Lightbulb, Award } from "lucide-react"
import { Bot } from "lucide-react" // Declare the Bot variable

export function EvaluateView() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Evaluate & Learn</h1>
          <p className="text-muted-foreground mt-1">Analyze performance and capture insights</p>
        </div>
        <Button>
          <Bot className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Strategy Performance Dashboard */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Strategy Performance</h2>

        {/* Strategy Performance Card 1 */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle>Expand Market Presence</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Owner: Sarah Johnson • Status: Active</p>
              </div>
              <Badge className="bg-green-500">On Track</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* KPI Progress */}
            <div className="space-y-3">
              <p className="text-sm font-medium">KPI Progress</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Market Share Growth</span>
                  <span className="font-medium">18% / 25%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "72%" }} />
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+5% this quarter</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>New Partnerships</span>
                  <span className="font-medium">7 / 10</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "70%" }} />
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>3 partnerships in negotiation</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Revenue Growth</span>
                  <span className="font-medium">$3.2M / $5M</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: "64%" }} />
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Target className="h-3 w-3" />
                  <span>Projected to reach target by Q4</span>
                </div>
              </div>
            </div>

            {/* Execution Summary */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-muted/50 rounded border border-border text-center">
                <p className="text-2xl font-bold">4</p>
                <p className="text-xs text-muted-foreground">Active Projects</p>
              </div>
              <div className="p-3 bg-muted/50 rounded border border-border text-center">
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs text-muted-foreground">Tasks Completed</p>
              </div>
              <div className="p-3 bg-muted/50 rounded border border-border text-center">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Team Members</p>
              </div>
            </div>

            <Button variant="outline" size="sm">
              View Detailed Analytics
            </Button>
          </CardContent>
        </Card>

        {/* Strategy Performance Card 2 */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle>Digital Transformation Initiative</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Owner: Michael Chen • Status: Active</p>
              </div>
              <Badge variant="outline" className="border-orange-500 text-orange-600">
                Needs Attention
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm font-medium">KPI Progress</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Process Automation</span>
                  <span className="font-medium">35% / 60%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: "58%" }} />
                </div>
                <div className="flex items-center gap-1 text-xs text-orange-600">
                  <TrendingDown className="h-3 w-3" />
                  <span>Behind schedule - action needed</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Cost Reduction</span>
                  <span className="font-medium">22% / 30%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "73%" }} />
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>On track</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-orange-500/10 rounded border border-orange-500/50">
              <p className="text-sm font-medium mb-1 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                AI Recommendation
              </p>
              <p className="text-sm text-muted-foreground">
                Process automation is falling behind. Consider reallocating resources from cost reduction initiatives or
                extending the timeline. Review the CRM migration blockers as they may be impacting overall progress.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Best Practices & Insights */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Best Practices & Insights</h2>

        <Card className="border-purple-500/50 bg-purple-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              AI-Generated Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-background rounded border border-border">
              <p className="text-sm font-medium mb-1">Successful Project Pattern: Marketing Campaigns</p>
              <p className="text-sm text-muted-foreground">
                Analysis of 5 completed marketing projects shows that campaigns with detailed content calendars created
                in the first 2 weeks have 40% higher success rates. Early stakeholder alignment meetings also correlate
                with better outcomes.
              </p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">
                  Marketing
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Planning
                </Badge>
              </div>
            </div>

            <div className="p-3 bg-background rounded border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Risk Mitigation: Technical Projects</p>
                <Badge variant="outline">12 mentions</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Projects involving data migration should allocate 30% buffer time for data integrity issues. Teams that
                conduct pre-migration audits experience 60% fewer delays.
              </p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">
                  Technical
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Risk Management
                </Badge>
              </div>
            </div>

            <Button variant="outline" size="sm">
              View All Insights
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Qualitative Insights */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Team Feedback Summary</h2>

        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback Themes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-muted/50 rounded border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Resource Allocation</p>
                <Badge variant="outline">12 mentions</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Multiple teams have mentioned needing additional resources for technical projects. Consider reviewing
                resource distribution across active initiatives.
              </p>
            </div>

            <div className="p-3 bg-muted/50 rounded border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Communication Improvements</p>
                <Badge variant="outline">8 mentions</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Teams appreciate the new feedback loop system. Suggestion to add weekly sync meetings for
                cross-functional projects.
              </p>
            </div>

            <div className="p-3 bg-muted/50 rounded border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Tool Effectiveness</p>
                <Badge variant="outline">6 mentions</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Positive feedback on AI suggestions for task breakdown. Request for similar AI assistance in milestone
                planning.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
