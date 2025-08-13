"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Mail, User, Award } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:via-background dark:to-muted/10">
              {/* Hero Section */}
              <AnimatedSection className="py-20" animation="fade-up">
                <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-5xl font-bold text-gray-900 dark:text-foreground mb-6">
                        {t('home.hero.title')} {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {t('home.hero.subtitle')}
                        </span>
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8 leading-relaxed">
                        {t('home.hero.description')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/research">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            <BookOpen className="w-5 h-5 mr-2" />
                            {t('home.viewResearch')}
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button
                            size="lg"
                            variant="outline"
                            className="transition-all duration-300 hover:scale-105 bg-transparent"
                          >
                            <Mail className="w-5 h-5 mr-2" />
                            {t('home.getInTouch')}
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <AnimatedSection animation="fade-left" delay={2}>
                      <div className="relative">
                        <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl flex items-center justify-center transition-all duration-500 hover:shadow-2xl">
                          <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt={t('common.name')}
                            width={300}
                            height={300}
                            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12">
                          <GraduationCap className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Overview */}
              <AnimatedSection className="py-20 bg-white dark:bg-card" animation="fade-up">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">{t('home.academicExcellence')}</h2>
                    <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
                      {t('home.excellenceDescription')}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { icon: GraduationCap, count: "5+", label: t('home.yearsExperience'), color: "purple" },
                      { icon: Mail, count: "10+", label: t('home.collaborations'), color: "green" },
                    ].map((stat, index) => (
                      <AnimatedSection key={index} animation="scale-in" delay={index + 1}>
                        <div className="text-center group">
                          <div
                            className={`w-16 h-16 bg-${stat.color}-100 dark:bg-${stat.color}-50 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                          >
                            <stat.icon className={`w-8 h-8 text-${stat.color}-600 dark:text-${stat.color}-700`} />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2 transition-all duration-300 group-hover:text-blue-600">
                            {stat.count}
                          </h3>
                          <p className="text-gray-600 dark:text-muted-foreground">{stat.label}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          );
        }