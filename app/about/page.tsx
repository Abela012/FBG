"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, BookOpen, Award, Target, Heart, Lightbulb } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:via-background dark:to-muted/10 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-foreground mb-4">{t('about.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
        </AnimatedSection>

        {/* Profile Section */}
        <AnimatedSection animation="fade-up" delay={1}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-6">{t('about.academicProfile')}</h2>
              <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6 leading-relaxed">
                {t('about.profileDesc1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6 leading-relaxed">
                {t('about.profileDesc2')}
              </p>
              <p className="text-lg text-gray-600 dark:text-muted-foreground leading-relaxed">
                {t('about.profileDesc3')}
              </p>
            </div>
            <AnimatedSection animation="fade-left" delay={2}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl flex items-center justify-center transition-all duration-500 hover:shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=350&width=350"
                    alt="Fantahun Bogale Gereme in academic setting"
                    width={350}
                    height={350}
                    className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Key Areas */}
        <AnimatedSection animation="fade-up" delay={1}>
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: User,
                title: t('about.background'),
                description: t('about.backgroundDesc'),
                color: "blue",
              },
              {
                icon: BookOpen,
                title: t('about.researchFocus'),
                description: t('about.researchFocusDesc'),
                color: "purple",
              },
              {
                icon: Award,
                title: t('about.achievements'),
                description: t('about.achievementsDesc'),
                color: "green",
              },
            ].map((card, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index + 2}>
                <Card className="border-0 dark:border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-${card.color}-100 dark:bg-${card.color}-50 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}
                    >
                      <card.icon className={`w-6 h-6 text-${card.color}-600 dark:text-${card.color}-700`} />
                    </div>
                    <CardTitle className="transition-colors duration-300 group-hover:text-blue-600">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Values & Philosophy */}
        <AnimatedSection animation="fade-up" delay={2}>
          <div className="bg-white dark:bg-card rounded-2xl p-12 shadow-lg transition-all duration-300 hover:shadow-xl border-0 dark:border-border">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">{t('about.valuesPhilosophy')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: t('about.excellence'),
                  description: t('about.excellenceDesc'),
                  color: "blue",
                },
                {
                  icon: Heart,
                  title: t('about.collaboration'),
                  description: t('about.collaborationDesc'),
                  color: "purple",
                },
                {
                  icon: Lightbulb,
                  title: t('about.innovation'),
                  description: t('about.innovationDesc'),
                  color: "green",
                },
              ].map((value, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index + 3}>
                  <div className="text-center group">
                    <div
                      className={`w-16 h-16 bg-${value.color}-100 dark:bg-${value.color}-50 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <value.icon className={`w-8 h-8 text-${value.color}-600 dark:text-${value.color}-700`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3 transition-colors duration-300 group-hover:text-blue-600">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
