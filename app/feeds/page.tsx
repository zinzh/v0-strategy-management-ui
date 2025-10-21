import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, ExternalLink } from "lucide-react"

export default function FeedsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Newspaper className="h-6 w-6" />
            Industry Feeds
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Real-time news based on your interests</p>
        </div>
        <Button variant="outline">Customize Feeds</Button>
      </div>

      <div className="space-y-4">
        {[
          { title: "AI Breakthrough in Strategy Planning", source: "Tech News", time: "2h ago" },
          { title: "New Project Management Methodologies", source: "Business Insider", time: "5h ago" },
          { title: "Industry Report: Digital Transformation Trends", source: "Forbes", time: "1d ago" },
        ].map((article, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{article.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {article.source} • {article.time}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
