import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, Rocket, Activity, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your strategy execution</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Strategies</p>
              <p className="text-2xl font-bold mt-1">12</p>
            </div>
            <Target className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-xs text-green-600 mt-2">↑ 3 from last month</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-bold mt-1">28</p>
            </div>
            <Rocket className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Projects & Tasks</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
              <p className="text-2xl font-bold mt-1">78%</p>
            </div>
            <Activity className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-xs text-green-600 mt-2">↑ 5% from last week</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">KPI Achievement</p>
              <p className="text-2xl font-bold mt-1">85%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-xs text-green-600 mt-2">On track</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Recent Strategies</h2>
          <div className="space-y-3">
            {[
              { name: "Digital Transformation", status: "Active", progress: 65 },
              { name: "Market Expansion", status: "Active", progress: 42 },
              { name: "Customer Retention", status: "Review", progress: 88 },
            ].map((strategy, i) => (
              <div key={i} className="border border-border rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">{strategy.name}</p>
                  <span className="text-xs px-2 py-1 bg-muted rounded">{strategy.status}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${strategy.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Alerts & Notifications</h2>
          <div className="space-y-3">
            {[
              { type: "warning", message: "3 tasks overdue in Project Alpha" },
              { type: "info", message: "New KPI data available for Q1" },
              { type: "warning", message: "Strategy review pending approval" },
            ].map((alert, i) => (
              <div key={i} className="flex items-start gap-3 border border-border rounded p-3">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                <p className="text-sm flex-1">{alert.message}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            View All Notifications
          </Button>
        </Card>
      </div>
    </div>
  )
}
