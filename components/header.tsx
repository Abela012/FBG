"use client"

import type React from "react"
import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const stripTrailingSlash = (value: string) => {
    if (value.length > 1 && value.endsWith("/")) return value.slice(0, -1)
    return value
  }

  const stripBasePath = (value: string) => {
    // Adjust if basePath changes
    return value.startsWith("/FBG") ? value.slice(4) : value
  }

  const navItems = [
    { href: "/", label: t('header.home') },
    { href: "/about", label: t('header.about') },
    { href: "/research", label: t('header.research') },
    { href: "/publications", label: t('header.publications') },
    { href: "/work", label: t('header.work') },
    { href: "/contact", label: t('header.contact') },
    {href: "/cv", label: t('cv')},
  ]

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only apply smooth scroll for same-page navigation
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground sticky top-0 z-50 shadow-lg transition-all duration-300 border-b border-border ">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform hover:scale-105"
            onClick={(e) => smoothScroll(e, "/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg">
              <span className="text-white font-bold text-lg">FG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">{t('common.name')}</h1>
              <p className="text-sm text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-all duration-200 px-3 py-2 rounded-md relative group transform-gpu hover:scale-[1.04] hover:z-10",
                  (() => {
                    const currentPath = stripTrailingSlash(stripBasePath(pathname))
                    const itemHref = stripTrailingSlash(item.href)
                    return currentPath === itemHref ? "text-foreground font-semibold" : ""
                  })(),
                )}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    smoothScroll(e, item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-all duration-300 px-3 py-2 rounded-md",
                    pathname === item.href && "bg-accent text-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
