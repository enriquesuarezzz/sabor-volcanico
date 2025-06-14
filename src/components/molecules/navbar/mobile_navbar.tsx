'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Link } from '@/i18n/routing'
import Cart from '@/components/atoms/svg/cart'
import Spanish from '@/components/atoms/svg/spanish'
import English from '@/components/atoms/svg/english'
import SearchBar from '../search_bar/search_bar'
import Menu from '@/components/atoms/svg/menu'
import { Close } from '@/components/atoms/svg/close'
import { BarlowText } from '@/components/atoms/barlow_text'

interface MobileMenuProps {
  translations: {
    home: string
    about_us: string
    products: string
    select_language: string
    search_placeholder: string
    no_results: string
    title: string
    empty: string
    remove: string
    quantity: string
    subtotal: string
  }
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  onCloseMenu?: () => void // Optional: If you're using it now
}

export function MobileMenu({ translations, setIsCartOpen }: MobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    setMenuOpen(false)
  }

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`)
  }

  return (
    <div className="flex items-center gap-4 md:hidden">
      <SearchBar
        searchPlaceholder={translations.search_placeholder}
        noResults={translations.no_results}
      />

      {/* Fix: Open the cart summary when clicking the cart icon */}
      <button aria-label="Open Cart" onClick={() => setIsCartOpen(true)}>
        <Cart />
      </button>

      <button
        aria-label="Open menu / close menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <Close color="white" /> : <Menu />}
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-50 m-2 flex flex-col items-center justify-center rounded-3xl bg-gray-800/70 shadow-xl backdrop-blur-lg">
          <button
            aria-label="Close Menu"
            className="absolute right-4 top-4"
            onClick={() => setMenuOpen(false)}
          >
            <Close color="white" />
          </button>
          <nav className="flex flex-col items-center gap-6">
            <Link href="/" onClick={() => handleNavigation('/')}>
              <BarlowText
                tag="h1"
                fontSize="32px"
                style="bold"
                className="text-white hover:scale-110"
              >
                {translations.home}
              </BarlowText>
            </Link>
            <Link
              href="/about_us"
              onClick={() => handleNavigation('/about_us')}
            >
              <BarlowText
                tag="h1"
                fontSize="32px"
                style="bold"
                className="text-white hover:scale-110"
              >
                {translations.about_us}
              </BarlowText>
            </Link>
            <Link
              href="/products"
              onClick={() => handleNavigation('/products')}
            >
              <BarlowText
                tag="h1"
                fontSize="32px"
                style="bold"
                className="text-white hover:scale-110"
              >
                {translations.products}
              </BarlowText>
            </Link>
            <BarlowText
              tag="h1"
              fontSize="32px"
              style="bold"
              className="text-white hover:scale-110"
            >
              {translations.select_language}
            </BarlowText>
            <div className="flex items-center space-x-4">
              <button
                aria-label="Change language to Spanish"
                onClick={() => changeLanguage('es')}
              >
                <Spanish className="h-8 w-8 hover:scale-110" />
              </button>
              <button
                aria-label="Change language to English"
                onClick={() => changeLanguage('en')}
              >
                <English className="h-8 w-8 hover:scale-110" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
