'use client'
import { useState } from 'react'
import { BarlowText } from '@/components/atoms/barlow_text'
import { Link } from '@/i18n/routing'
import LocaleSwitcher from '../locale_switcher/locale_switcher'
import SearchBar from '../search_bar/search_bar'
import { useCart } from '@/components/molecules/cart_context/cart_context'
import { MobileMenu } from './mobile_navbar'
import Delete from '@/components/atoms/svg/delete'
import Image from 'next/image'
import { ShoppingCart, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

interface NavBarProps {
  translations: {
    home: string
    about_us: string
    products: string
    select_language: string
    search_bar: {
      search_placeholder: string
      no_results: string
    }
    cart: {
      title: string
      empty: string
      remove: string
      quantity: string
      subtotal: string
    }
  }
}

export default function NavBar({ translations }: NavBarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems, removeFromCart } = useCart()

  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0
    const quantity = Number(item.quantity) || 1
    return total + price * quantity
  }, 0)

  const formattedTotalPrice = totalPrice.toFixed(2)

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.avif" alt="Logo" width={60} height={60} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/">
              <BarlowText
                fontSize="19px"
                className="text-gray-700 transition hover:text-food-primary"
              >
                {translations.home}
              </BarlowText>
            </Link>
            <Link href="/about_us">
              <BarlowText
                fontSize="19px"
                className="text-gray-700 transition hover:text-food-primary"
              >
                {translations.about_us}
              </BarlowText>
            </Link>
            <Link href="/products">
              <BarlowText
                fontSize="19px"
                className="text-gray-700 transition hover:text-food-primary"
              >
                {translations.products}
              </BarlowText>
            </Link>
          </div>

          {/* Desktop Search & Icons */}
          <div className="hidden items-center gap-4 md:flex">
            <SearchBar
              searchPlaceholder={translations.search_bar.search_placeholder}
              noResults={translations.search_bar.no_results}
            />

            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-700 hover:text-food-primary"
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-food-primary p-0 text-xs text-white">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
            <LocaleSwitcher />
          </div>

          {/* Mobile menu + cart */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-700"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-food-primary p-0 text-xs text-white">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-4 pt-2 md:hidden">
          <SearchBar
            searchPlaceholder={translations.search_bar.search_placeholder}
            noResults={translations.search_bar.no_results}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu
          translations={{
            home: translations.home,
            about_us: translations.about_us,
            products: translations.products,
            select_language: translations.select_language,
            search_placeholder: translations.search_bar.search_placeholder,
            no_results: translations.search_bar.no_results,
            title: translations.cart.title,
            empty: translations.cart.empty,
            remove: translations.cart.remove,
            quantity: translations.cart.quantity,
            subtotal: translations.cart.subtotal,
          }}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30"
            onClick={() => setIsCartOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-0 z-50 h-full w-full max-w-[400px] bg-white shadow-xl"
          >
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute right-4 top-4 text-2xl"
              aria-label="Close Cart"
            >
              ✖
            </button>
            <div className="flex h-full flex-col p-4">
              <BarlowText tag="h1" fontSize="20px" className="text-center">
                {translations.cart.title}
              </BarlowText>
              <hr className="my-4" />
              {cartItems.length === 0 ? (
                <BarlowText tag="p" fontSize="16px">
                  {translations.cart.empty}
                </BarlowText>
              ) : (
                <ul className="flex-1 space-y-4 overflow-y-auto">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md object-contain"
                      />
                      <div className="flex flex-col text-center">
                        <BarlowText tag="p" fontSize="16px">
                          {item.name}
                        </BarlowText>
                        <BarlowText tag="p" fontSize="14px">
                          {translations.cart.quantity}: {item.quantity}
                        </BarlowText>
                      </div>
                      <div className="flex flex-col items-end">
                        <BarlowText tag="p" fontSize="16px">
                          {item.price} €
                        </BarlowText>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="mt-1 flex items-center gap-1 text-red-500"
                        >
                          <Delete />
                          <span className="text-sm">
                            {translations.cart.remove}
                          </span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Subtotal + Link */}
              <div className="mt-4 border-t pt-4">
                <div className="mb-3 flex justify-between">
                  <span className="font-semibold">
                    {translations.cart.subtotal}
                  </span>
                  <span className="font-semibold">{formattedTotalPrice} €</span>
                </div>
                <Link href="/cart">
                  <Button
                    className="w-full"
                    onClick={() => setIsCartOpen(false)}
                    aria-label="Go to Cart"
                  >
                    {translations.cart.title}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
