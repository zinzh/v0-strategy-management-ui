import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, AlertCircle, Users, Calendar, Bot } from "lucide-react"

export function ExecuteView() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Execute</h1>
          <p className="text-muted-foreground mt-1">Manage programs, projects, initiatives, and tasks</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Program
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Initiative
          </Button>
        </div>
      </div>

      {/* Execution Board Types */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <p className="text-xs text-muted-foreground mt-1">Active projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-muted-foreground mt-1">Ongoing programs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-xs text-muted-foreground mt-1">Active initiatives</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">47</p>
            <p className="text-xs text-muted-foreground mt-1">Open tasks</p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card className="border-orange-500/50 bg-orange-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <AlertCircle className="h-5 w-5" />
            Pending Approvals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-background rounded border border-border">
              <div>
                <p className="font-medium">Customer Portal Redesign</p>
                <p className="text-sm text-muted-foreground">No linked strategy - requires approval</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Review
                </Button>
                <Button size="sm">Approve</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Execution Boards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Active Execution Boards</h2>

        {/* Project Card */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Project
                  </Badge>
                  <CardTitle>Marketing Campaign Q2</CardTitle>
                  <Badge>In Progress</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Linked to: <span className="font-medium">Expand Market Presence</span>
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Team & Timeline */}
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Team:</span>
                <span className="font-medium">5 members</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Timeline:</span>
                <span className="font-medium">Apr 1 - Jun 30</span>
              </div>
            </div>

            {/* Required Skills */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Required Skills</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Digital Marketing</Badge>
                <Badge variant="secondary">Content Creation</Badge>
                <Badge variant="secondary">Analytics</Badge>
                <Badge variant="secondary">SEO</Badge>
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Milestones (3/5 completed)</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded border border-border">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm flex-1">Campaign Strategy Approved</span>
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-muted/50 rounded border border-border">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm flex-1">Content Calendar Created</span>
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-blue-500/10 rounded border border-blue-500/50">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm flex-1">Launch Phase 1</span>
                  <span className="text-xs text-muted-foreground">In Progress</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button variant="outline" size="sm">
                Manage Tasks
              </Button>
              <Button variant="ghost" size="sm">
                <Bot className="mr-2 h-4 w-4" />
                AI Suggestions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Program Card */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Program
                  </Badge>
                  <CardTitle>Digital Transformation Program</CardTitle>
                  <Badge>Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Linked to: <span className="font-medium">Digital Transformation Initiative</span>
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Projects:</span>
                <span className="font-medium">4 projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Total Team:</span>
                <span className="font-medium">18 members</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Included Projects</p>
              <div className="space-y-1">
                <div className="text-sm p-2 bg-muted/50 rounded border border-border">• CRM System Migration</div>
                <div className="text-sm p-2 bg-muted/50 rounded border border-border">
                  • Process Automation Implementation
                </div>
                <div className="text-sm p-2 bg-muted/50 rounded border border-border">• Employee Training Program</div>
              </div>
            </div>

            <Button variant="outline" size="sm">
              View Program Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
