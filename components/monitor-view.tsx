import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Upload, MessageSquare, CheckCircle, Clock, AlertTriangle, Bot } from "lucide-react"

export function MonitorView() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Monitor</h1>
          <p className="text-muted-foreground mt-1">Track progress and provide updates</p>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              On Track
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
            <p className="text-xs text-muted-foreground mt-1">Tasks on schedule</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15</p>
            <p className="text-xs text-muted-foreground mt-1">Active tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              At Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-muted-foreground mt-1">Need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-purple-500" />
              Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-xs text-muted-foreground mt-1">New updates today</p>
          </CardContent>
        </Card>
      </div>

      {/* Task Updates */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Task Updates</h2>

        {/* Task Update Card 1 */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Content Calendar Creation</CardTitle>
                  <Badge className="bg-green-500">Completed</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Project: Marketing Campaign Q2 • Milestone: Campaign Strategy
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Status Update */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Latest Update</p>
              <div className="p-3 bg-muted/50 rounded border border-border">
                <div className="flex items-start gap-2 mb-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                    SJ
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <p className="text-sm">
                  Completed the content calendar for Q2. All key dates and themes have been mapped out. The calendar
                  includes 45 pieces of content across blog posts, social media, and email campaigns.
                </p>
              </div>
            </div>

            {/* Proof of Execution */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Proof of Execution</p>
              <div className="flex gap-2">
                <div className="p-3 bg-muted/50 rounded border border-border flex items-center gap-2 text-sm">
                  <Upload className="h-4 w-4" />
                  Q2_Content_Calendar.xlsx
                </div>
                <div className="p-3 bg-muted/50 rounded border border-border flex items-center gap-2 text-sm">
                  <Upload className="h-4 w-4" />
                  Campaign_Strategy.pdf
                </div>
              </div>
            </div>

            {/* Feedback Loop */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Team Feedback (3 comments)</p>
              <div className="space-y-2">
                <div className="p-2 bg-muted/30 rounded text-sm">
                  <span className="font-medium">Mike:</span> Great work! The themes align perfectly with our strategy.
                </div>
                <div className="p-2 bg-muted/30 rounded text-sm">
                  <span className="font-medium">Lisa:</span> Can we add more video content in May?
                </div>
              </div>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Add Comment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Task Update Card 2 - In Progress */}
        <Card className="border-blue-500/50">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Launch Phase 1</CardTitle>
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    In Progress
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Project: Marketing Campaign Q2 • Milestone: Campaign Execution
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Update Form */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Provide Update</p>
              <Textarea placeholder="Share your progress, challenges, or achievements..." className="min-h-[100px]" />
              <div className="flex gap-2">
                <Button size="sm">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark Complete
                </Button>
                <Button variant="outline" size="sm">
                  Update Progress
                </Button>
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Proof
                </Button>
              </div>
            </div>

            {/* AI Feedback */}
            <div className="p-3 bg-blue-500/10 rounded border border-blue-500/50">
              <p className="text-sm font-medium mb-1 flex items-center gap-2">
                <Bot className="h-4 w-4" />
                AI Insight
              </p>
              <p className="text-sm text-muted-foreground">
                Based on current progress, this task is on track to complete by the deadline. Consider scheduling a
                review meeting to ensure alignment with stakeholders.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Task Update Card 3 - At Risk */}
        <Card className="border-orange-500/50 bg-orange-500/5">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>CRM Data Migration</CardTitle>
                  <Badge variant="outline" className="border-orange-500 text-orange-600">
                    At Risk
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Project: CRM System Migration • Milestone: Data Transfer
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Latest Update</p>
              <div className="p-3 bg-background rounded border border-border">
                <div className="flex items-start gap-2 mb-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                    MC
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <p className="text-sm">
                  Encountered data integrity issues during migration. Working with IT team to resolve. May need to
                  extend timeline by 1 week.
                </p>
              </div>
            </div>

            {/* AI Prediction */}
            <div className="p-3 bg-orange-500/10 rounded border border-orange-500/50">
              <p className="text-sm font-medium mb-1 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                AI Prediction
              </p>
              <p className="text-sm text-muted-foreground">
                This task is at risk of delay. Recommend escalating to project lead and allocating additional resources
                to resolve data integrity issues.
              </p>
            </div>

            <Button variant="outline" size="sm">
              Request Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
