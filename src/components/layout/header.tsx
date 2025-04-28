'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User, Bell, Home, Building, DollarSign, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/components/i18n-provider';
import { LanguageSelector } from '@/components/language-selector';
import { CurrencySelector } from '@/components/currency-selector';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = useI18n();
  const pathname = usePathname();
  
  // Extract the path without the locale prefix for active link detection
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?:\/|$)/, '/');

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Properties', href: '/properties', icon: Building },
    { name: 'Buy', href: '/buy', icon: DollarSign },
    { name: 'Rent', href: '/rent', icon: DollarSign },
    { name: 'Search', href: '/search', icon: Search },
  ];

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <Building className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl">RealEstate</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className={`flex items-center px-1 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathWithoutLocale === item.href ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector currentLocale={locale} />
            <CurrencySelector />
            <ThemeToggle />
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Link href={`/${locale}/login`}>
              <Button variant="outline" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathWithoutLocale === item.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-2 border-t border-border">
              <div className="flex items-center px-3">
                <div className="space-y-2">
                  <LanguageSelector currentLocale={locale} />
                  <CurrencySelector />
                  <ThemeToggle />
                </div>
              </div>
              
              <div className="mt-3 space-y-1">
                <Link
                  href={`/${locale}/login`}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-3" />
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}