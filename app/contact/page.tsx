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
          {/* <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p> */}
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
                  <p className="text-gray-600 dark:text-muted-foreground"> fantishb@gmail.com</p>
                  <p className="text-gray-600 dark:text-muted-foreground">fbogale@kifiya.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{t('contact.phone')}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground">+251 912071104</p>
                  <p className="text-gray-600 dark:text-muted-foreground">Office: +1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-foreground">{t('contact.officeAddress')}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground">Kifiya Financial Technology, Bole road, Addis Ababa, Ethiopia</p>
                  <p className="text-gray-600 dark:text-muted-foreground">Academic Institution</p>
                  <p className="text-gray-600 dark:text-muted-foreground">Addis Ababa University, 5Kilo, Addis Ababa, Ethiopia</p>
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
              <Button 
                onClick={() => window.open('mailto:fantishb@gmail.com', '_blank')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.sendEmail')}
              </Button>
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/CV-FantahunBG.pdf';
                  link.download = 'CV-FantahunBG.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="outline" 
                className="w-full bg-transparent cursor-pointer"
              >
                <FileText className="w-5 h-5 mr-2" />
                {t('contact.downloadCV')}
              </Button>
            </div>
          </div>

                    {/* Contact Form */}
          {/* <div>
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
          </div> */}
          <div className="flex flex-col h-full">
           
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
