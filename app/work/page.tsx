"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Award, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function WorkPage() {
  const { t } = useLanguage()

  const workExperience = [
    {
      position: t('work.seniorResearcher'),
      institution: t('work.institution1'),
      location: t('work.location1'),
      period: "2022 - Present",
      type: t('work.fullTime'),
      description: t('work.description1'),
      achievements: [
        t('work.achievement1'),
        t('work.achievement2'),
        t('work.achievement3'),
        t('work.achievement4'),
      ],
    },
    {
      position: t('work.researchAssociate'),
      institution: t('work.institution2'),
      location: t('work.location2'),
      period: "2020 - 2022",
      type: t('work.fullTime'),
      description: t('work.description2'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
    {
      position: t('work.graduateAssistant'),
      institution: t('work.institution3'),
      location: t('work.location3'),
      period: "2018 - 2020",
      type: t('work.partTime'),
      description: t('work.description3'),
      achievements: [
        t('work.achievement9'),
        t('work.achievement10'),
        t('work.achievement11'),
        t('work.achievement12'),
      ],
    },
    {
      position: t('work.juniorResearcher'),
      institution: t('work.institution4'),
      location: t('work.location4'),
      period: "2016 - 2018",
      type: t('work.fullTime'),
      description: t('work.description4'),
      achievements: [
        t('work.achievement13'),
        t('work.achievement14'),
        t('work.achievement15'),
        t('work.achievement16'),
      ],
    },
  ]

  const skills = [
    t('work.skill1'),
    t('work.skill2'),
    t('work.skill3'),
    t('work.skill4'),
    t('work.skill5'),
    t('work.skill6'),
    t('work.skill7'),
    t('work.skill8'),
    t('work.skill9'),
    t('work.skill10'),
  ]

  const awards = [
    {
      title: t('work.award1'),
      organization: t('work.organization1'),
      year: "2023",
      description: t('work.awardDesc1'),
    },
    {
      title: t('work.award2'),
      organization: t('work.organization2'),
      year: "2022",
      description: t('work.awardDesc2'),
    },
    {
      title: t('work.award3'),
      organization: t('work.organization3'),
      year: "2021",
      description: t('work.awardDesc3'),
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:via-background dark:to-muted/10 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-foreground mb-4">{t('work.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            {t('work.description')}
          </p>
        </div>

        {/* Career Overview */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">8+</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('work.yearsExperience')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">4</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('work.institutions')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">25+</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('work.mentees')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">3</h3>
            <p className="text-gray-600 dark:text-muted-foreground">{t('work.majorAwards')}</p>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8">{t('work.workExperience')}</h2>
          <div className="space-y-8">
            {workExperience.map((work, index) => (
              <Card key={index} className="border-0 dark:border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-2">{work.position}</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <p className="text-lg text-gray-600 dark:text-muted-foreground">{work.institution}</p>
                        <Badge variant="outline">{work.location}</Badge>
                        <Badge variant="secondary">{work.type}</Badge>
                      </div>
                      <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">{work.description}</p>
                    </div>
                    <div className="lg:ml-6">
                      <Badge variant="default" className="text-sm">
                        {work.period}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-foreground mb-3">{t('work.keyAchievements')}:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {work.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Awards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg border-0 dark:border-border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">{t('work.coreSkills')}</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg border-0 dark:border-border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">{t('work.awardsRecognition')}</h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{award.title}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm mb-1">
                    {award.organization} • {award.year}
                  </p>
                  <p className="text-gray-600 dark:text-muted-foreground text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
