"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Target, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ResearchPage() {
  const { t } = useLanguage()

  const researchAreas = [
    {
      title: t('research.primaryResearch'),
      description: t('research.primaryDesc'),
      tags: ["Methodology", "Analysis", "Innovation"],
      status: t('research.ongoing'),
      publications: 8,
    },
    {
      title: t('research.collaborativeStudies'),
      description: t('research.collaborativeDesc'),
      tags: ["Collaboration", "Interdisciplinary", "Global"],
      status: t('research.active'),
      publications: 5,
    },
    {
      title: t('research.appliedResearch'),
      description: t('research.appliedDesc'),
      tags: ["Applied", "Practical", "Impact"],
      status: t('research.completed'),
      publications: 3,
    },
    {
      title: t('research.emergingTech'),
      description: t('research.emergingDesc'),
      tags: ["Technology", "Innovation", "Future"],
      status: t('research.planning'),
      publications: 2,
    },
  ]

  const currentProjects = [
    {
      title: t('research.project1'),
      duration: "2023 - 2025",
      funding: "Research Grant",
      collaborators: ["University A", "Institute B"],
      description: t('research.project1Desc'),
    },
    {
      title: t('research.project2'),
      duration: "2024 - 2026",
      funding: "International Grant",
      collaborators: ["Global University", "Research Center C"],
      description: t('research.project2Desc'),
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:via-background dark:to-muted/10 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-foreground mb-4">{t('research.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            {t('research.description')}
          </p>
        </div>

        {/* Research Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">4</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('research.activeAreas')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">12</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('research.collaborativePartners')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">18</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('research.publications')}</p>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8">{t('research.researchAreas')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((research, index) => (
              <Card key={index} className="border-0 dark:border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{research.title}</CardTitle>
                    <Badge variant={research.status === t('research.ongoing') ? "default" : "secondary"}>{research.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-muted-foreground mb-4">{research.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {research.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-muted-foreground/70">{research.publications} publications</span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('research.learnMore')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="bg-white dark:bg-card rounded-2xl p-12 shadow-lg border-0 dark:border-border">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8">{t('research.currentProjects')}</h2>
          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="border-0 dark:border-border shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-muted-foreground mb-4">{project.description}</p>
                    </div>
                    <div className="lg:ml-6 lg:text-right">
                      <Badge variant="secondary" className="mb-2">
                        {project.duration}
                      </Badge>
                      <p className="text-sm text-gray-500 dark:text-muted-foreground/70">{project.funding}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-muted-foreground mb-2">{t('research.collaborators')}:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator, collabIndex) => (
                        <Badge key={collabIndex} variant="outline">
                          {collaborator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
