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
                        <span className=" bg-clip-text text-gray-900 dark:text-foreground mb-6">
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
                        <div >
                          <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt={t('common.name')}
                            width={300}
                            height={300}
                            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12">
                          <GraduationCap className="w-12 h-12 text-white" />
                        </div> */}
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Overview */}
              {/* <AnimatedSection className="py-20 bg-white dark:bg-card" animation="fade-up">
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
              </AnimatedSection> */}
            <div className="ml-10 pb-10 flex flex-col h-full">
           
           <div className="flex space-x-6">
             {/* LinkedIn */}
             <a 
               href="http://linkedin.com/in/fantahun-bogale-gereme-dr-ing-17390578" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
             >
               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
               </svg>
             </a>
             
             {/* Twitter/X */}
             <a 
               href="https://twitter.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
             >
               <svg className="w-5 h-5 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
               </svg>
             </a>
           </div>
         </div>
            </div>
          );
        }