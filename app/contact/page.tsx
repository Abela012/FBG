"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background dark:via-background dark:to-muted/10 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-foreground mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-8">{t('contact.contactInfo')}</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{t('contact.email')}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground">fantahun.gereme@email.com</p>
                  <p className="text-gray-600 dark:text-muted-foreground">f.gereme@university.edu</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{t('contact.phone')}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-gray-600 dark:text-muted-foreground">Office: +1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{t('contact.officeAddress')}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground">Research Building, Room 301</p>
                  <p className="text-gray-600 dark:text-muted-foreground">Academic Institution</p>
                  <p className="text-gray-600 dark:text-muted-foreground">123 University Ave, City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{t('contact.officeHours')}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 dark:text-muted-foreground">By appointment: Weekends</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.sendEmail')}
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <FileText className="w-5 h-5 mr-2" />
                {t('contact.downloadCV')}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 dark:border-border shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">{t('contact.sendMessage')}</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                        {t('contact.firstName')}
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                        {t('contact.lastName')}
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                      {t('contact.emailAddress')}
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                      {t('contact.institution')}
                    </label>
                    <Input id="institution" placeholder="Your institution or organization" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                      {t('contact.subject')}
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
                      {t('contact.message')}
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry, research interests, or collaboration ideas..."
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20">
          <div className="bg-white dark:bg-card rounded-2xl p-12 shadow-lg text-center max-w-4xl mx-auto border-0 dark:border-border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">{t('contact.letsCollaborate')}</h2>
            <p className="text-gray-600 dark:text-muted-foreground mb-6 leading-relaxed">
              {t('contact.collaborateDesc')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">{t('contact.researchCollaboration')}</h3>
                <p className="text-gray-600 dark:text-muted-foreground">{t('contact.researchCollaborationDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">{t('contact.speakingEngagements')}</h3>
                <p className="text-gray-600 dark:text-muted-foreground">{t('contact.speakingEngagementsDesc')}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">{t('contact.consulting')}</h3>
                <p className="text-gray-600 dark:text-muted-foreground">{t('contact.consultingDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
