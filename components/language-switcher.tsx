"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="w-10 h-10"
      title={language === 'en' ? 'Switch to Amharic' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">
        {language === 'en' ? 'Switch to Amharic' : 'Switch to English'}
      </span>
    </Button>
  )
} 