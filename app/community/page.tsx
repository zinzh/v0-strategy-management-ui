import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, UserPlus, Search } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Users className="h-6 w-6" />
            Community Management
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Manage teams, invitations, and skill-based groups</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Members
        </Button>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search members..." className="max-w-sm" />
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Teams</h3>
          <div className="space-y-2">
            {["Product Team", "Marketing Team", "Engineering Team"].map((team) => (
              <div key={team} className="flex items-center justify-between p-2 border border-border rounded">
                <span className="text-sm">{team}</span>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-3">Skill Groups</h3>
          <div className="space-y-2">
            {["Data Analytics", "UX Design", "Project Management"].map((skill) => (
              <div key={skill} className="flex items-center justify-between p-2 border border-border rounded">
                <span className="text-sm">{skill}</span>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
