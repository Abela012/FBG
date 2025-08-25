"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, Calendar, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import FBG_book from "/public/FBG_book.jpg"


export default function PublicationsPage() {
  const { t } = useLanguage()

  const publications = [
    {
      title: t('publications.paper1.title'),
      authors: [t('common.name'), "Chala Bekabil"],
      journal: t('publications.journal1'),
      year: "2024",
      type: t('publications.journalArticle'),
      status: t('publications.statusPublished'),
      abstract: t('publications.paper1.abstract'),
      citations: 15,
      doi: "10.1000/journal.2024.001",
    },
    {
      title: t('publications.paper2.title'),
      authors: [t('common.name'), "W. Zhu"],
      journal: t('publications.journal2'),
      year: "2024",
      type: t('publications.conferencePaper'),
      status: t('publications.statusPresented'),
      abstract: t('publications.paper2.abstract'),
      citations: 8,
      doi: "10.1000/conference.2024.002",
    },
    {
      title: t('publications.paper3.title'),
      authors: [t('common.name'), 'W. Zhu'],
      journal: t('publications.journal3'),
      year: "2023",
      type: t('publications.reviewArticle'),
      status: t('publications.statusPublished'),
      abstract: t('publications.paper3.abstract'),
      citations: 22,
      doi: "10.1000/review.2023.003",
    },
    {
      title: t('publications.paper4.title'),
      authors: [t('common.name'), 'W. Zhu', 'Tewodros A. Ayall', 'Dagmawi M. Alemu'],
      journal: t('publications.journal4'),
      year: "2023",
      type: t('publications.researchArticle'),
      status: t('publications.statusPublished'),
      abstract: t('publications.paper4.abstract'),
      citations: 18,
      doi: "10.1000/global.2023.004",
    },
    {
      title: t('publications.paper5.title'),
      authors: [t('common.name'), 'T. Ayall', 'H. Duan', 'C. Liu', 'M. Deleli'],
      journal: t('publications.journal5'),
      year: "2023",
      type: t('publications.perspective'),
      status: t('publications.statusPublished'),
      abstract: t('publications.paper5.abstract'),
      citations: 12,
      doi: "10.1000/future.2023.005",
    },
    {
      title: t('publications.paper6.title'),
      authors: [t('common.name'), 'T. Ayall', 'H. Duan', 'C. Liu', 'M. Deleli'],
      journal: t('publications.journal6'),
      year: "2022",
      type: t('publications.researchArticle'),
      status: t('publications.statusPublished'),
      abstract: t('publications.paper6.abstract'),
      citations: 25,
      doi: "10.1000/data.2022.006",
    },
    {
      title: t('publications.paper7.title'),
      authors: [t('common.name'), 'T. Ayall', 'H. Duan', 'C. Liu', 'M. Deleli'],
      // journal: t('publications.journal6'),
      year: "2022",
      // type: t('publications.researchArticle'),
      // status: t('publications.statusPublished'),
      abstract: t('publications.paper7.abstract'),
      // citations: 25,
      // doi: "10.1000/data.2022.006",
    },
  ]

  const publicationStats = [
    { label: t('publications.totalPublications'), value: "18", icon: ExternalLink },
    { label: t('publications.citations'), value: "150+", icon: Users },
    { label: t('publications.hIndex'), value: "8", icon: Calendar },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:via-background dark:to-muted/10 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-foreground mb-4">{t('publications.title')}</h1>
          {/* <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            {t('publications.description')}
          </p> */}
        </div>

        {/* Publication Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-20">
          {publicationStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>  */}

        {/* Publications List */}
        <div className="space-y-4 max-w-241 mx-auto">
          {publications.map((publication, index) => (
            <Card key={index} className="border-0 dark:border-border shadow-lg hover:shadow-xl transition-shadow justify-between  gap-10">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">{publication.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {/* <Badge variant="default">{publication.type}</Badge> */}
                      {/* <Badge variant="secondary">{publication.year}</Badge>
                      <Badge variant="outline">{publication.status}</Badge> */}
                    </div>
                    <p className="text-gray-600 dark:text-muted-foreground mb-3">
                      <span className="font-medium">{t('publications.authors')}:</span> {publication.authors.join(", ")}
                    </p>
                    {/* <p className="text-gray-600 dark:text-muted-foreground mb-4">
                      <span className="font-medium">{t('publications.publishedIn')}:</span> {publication.journal}
                    </p> */}
                    <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">{publication.abstract}</p>
                    {/* <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-muted-foreground/70">
                      <span>{t('publications.citations')}: {publication.citations}</span>
                      <span>DOI: {publication.doi}</span>
                    </div> */}
                  </div>
                  <div className="lg:ml-6 flex flex-col gap-2 mt-4 lg:mt-0">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('publications.view')}
                    </Button>
                    {/* <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      {t('publications.download')}
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="my-12 ml-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4 text-left">{t('publications.books')}</h2>
          <a 
            href="https://www.amazon.com/Fundamentals-Programming-I-Handbook-Novice/dp/3330068949" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block cursor-pointer hover:scale-105 transition-transform duration-200 text-center block"
          >
            <img src={FBG_book.src} alt="FBG Book Cover" className="max-w-md mx-auto rounded-lg shadow-lg" />
          </a>
        </div>
        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="bg-white dark:bg-card rounded-2xl p-12 shadow-lg max-w-2xl mx-auto border-0 dark:border-border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">{t('publications.stayUpdated')}</h2>
            <p className="text-gray-600 dark:text-muted-foreground mb-6">{t('publications.stayUpdatedDesc')}</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {t('publications.subscribe')}
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
