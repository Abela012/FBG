"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Award, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function WorkPage() {
  const { t } = useLanguage()

  const workExperience = [
    {
      position: t('work.exp1.position'),
      institution: t('work.exp1.institution'),
      location: t('work.exp1.location'),
      period: "10-11-2022 – present",
      type: t('work.fullTime'),
      description: t('work.exp1.description'),
      achievements: [
        t('work.achievement1'),
        t('work.achievement2'),
        t('work.achievement3'),
        t('work.achievement4'),
      ],
    },
    {
      position: t('work.exp2.position'),
      institution: t('work.exp2.institution'),
      location: t('work.exp2.location'),
      period: "23-09-2016 – 01-07-2017",
      type: t('work.fullTime'),
      description: t('work.exp2.description'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
    {
      position: t('work.exp3.position'),
      institution: t('work.exp3.institution'),
      location: t('work.exp3.location'),
      period: "03-11-2015 – 22-09-2016",
      type: t('work.partTime'),
      description: t('work.exp3.description'),
      achievements: [
        t('work.achievement9'),
        t('work.achievement10'),
        t('work.achievement11'),
        t('work.achievement12'),
      ],
    },
    {
      position: t('work.exp4.position'),
      institution: t('work.exp4.institution'),
      location: t('work.exp4.location'),
      period: "14-09-2009 – 03-11-2015",
      type: t('work.fullTime'),
      description: t('work.exp4.description'),
      achievements: [
        t('work.achievement13'),
        t('work.achievement14'),
        t('work.achievement15'),
        t('work.achievement16'),
      ],
    },
    {
      position: t('work.exp5.position'),
      institution: t('work.exp5.institution'),
      location: t('work.exp5.location'),
      period: "04-09-2006 – 14-09-2009",
      type: t('work.fullTime'),
      description: t('work.exp5.description'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
    {
      position: t('work.exp6.position'),
      institution: t('work.exp6.institution'),
      location: t('work.exp6.location'),
      period: "2024 – 2025",
      type: t('work.fullTime'),
      description: t('work.exp6.description'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
    {
      position: t('work.exp7.position'),
      institution: t('work.exp7.institution'),
      location: t('work.exp7.location'),
      period: "2024-2025",
      type: t('work.fullTime'),
      description: t('work.exp7.description'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
    {
      position: t('work.exp8.position'),
      institution: t('work.exp8.institution'),
      location: t('work.exp8.location'),
      period: "2006-2009",
      type: t('work.fullTime'),
      description: t('work.exp8.description'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
    {
      position: t('work.exp9.position'),
      institution: t('work.exp9.institution'),
      location: t('work.exp9.location'),
      period: "2006-2009",
      type: t('work.fullTime'),
      description: t('work.exp9.description'),
      achievements: [
        t('work.achievement5'),
        t('work.achievement6'),
        t('work.achievement7'),
        t('work.achievement8'),
      ],
    },
  ]

  const skills = [
    t('Academic Leadership'),
    t('Industrial Team leadership'),
    t('Critical thinking, meticulous analytical skills'),
    t('Data analytics and visualization, research, analytical skill, planning, communication'),
    t('Programming Languages: Python, Java, C++, SQL, etc.'),
    t('Machine Learning Techniques: Supervised and unsupervised learning, DL, CV, NLP, etc.'),
    t('AI/ML Frameworks: TensorFlow, PyTorch, Keras, Scikit-learn'),
    t('ML Algorithms: Logistic Regression, Decision Tree, Random Forest, CNNs, RNNs, Transformers, etc.'),
    t('Cloud Platforms: AWS, Google Cloud, etc.'),
    t('Communication'),
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
          {/* <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            {t('work.description')}
          </p> */}
        </div>

        {/* Career Overview */}
        {/* <div className="grid md:grid-cols-4 gap-8 mb-20">
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
        </div> */}

        {/* Work Experience */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8">{t('work.workExperience')}</h2>
          <div className="space-y-8">
            {workExperience.map((work, index) => (
              <div key={index} >
                <div className="p-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-1">
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
                    {/* <h4 className="font-semibold text-gray-900 dark:text-foreground mb-3">{t('work.keyAchievements')}:</h4> */}
                    {/* <ul className="grid md:grid-cols-2 gap-2">
                      {work.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Awards */}
        <div >
          {/* Skills */}
          <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg border-0 dark:border-border max-w-250 mx-auto">
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
          {/* <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-lg border-0 dark:border-border">
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
          </div> */}
        </div>
      </div>
    </div>
  )
}
