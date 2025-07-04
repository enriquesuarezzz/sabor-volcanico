'use client'

import { Link } from '@/i18n/routing'
import LocaleSwitcher from '../locale_switcher/locale_switcher'
import SearchBar from '../search_bar/search_bar'
import { useCart } from '@/components/molecules/cart_context/cart_context'
import { MobileMenu } from './mobile_navbar'
import { useState } from 'react'
import Delete from '@/components/atoms/svg/delete'
import Image from 'next/image'

import Cart from '@/components/atoms/svg/cart'
import { Playfair_DisplayText } from '@/components/atoms/playfair_display_text'

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
  const { cartItems, removeFromCart } = useCart()
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0 // Ensure it's a number
    const quantity = Number(item.quantity) || 1 // Ensure it's a number

    return total + price * quantity
  }, 0)

  const formattedTotalPrice = totalPrice.toFixed(2) // Ensure 2 decimal places

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between rounded-b-3xl bg-[#f8f7f7] px-6 py-4 md:px-20">
      <Link href="/">
        <Image src="/images/logo.avif" alt="Logo" width={50} height={50} />
      </Link>
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
      <div className="hidden items-center gap-10 md:flex">
        <Link href="/">
          <Playfair_DisplayText
            fontSize="19px"
            className="text-gray-700 transition hover:text-food-primary"
          >
            {translations.home}
          </Playfair_DisplayText>
        </Link>
        <Link href="/about_us">
          <Playfair_DisplayText
            fontSize="19px"
            className="text-gray-700 transition hover:text-food-primary"
          >
            {translations.about_us}
          </Playfair_DisplayText>
        </Link>
        <Link href="/products">
          <Playfair_DisplayText
            fontSize="19px"
            className="text-gray-700 transition hover:text-food-primary"
          >
            {translations.products}
          </Playfair_DisplayText>
        </Link>
        <SearchBar
          searchPlaceholder={translations.search_bar.search_placeholder}
          noResults={translations.search_bar.no_results}
        />
        <button aria-label="Add to Cart" onClick={() => setIsCartOpen(true)}>
          <Cart className="transition-all duration-300 hover:scale-110" />
        </button>
        <LocaleSwitcher />
      </div>

      {/* Cart Summary */}
      {isCartOpen && (
        <div className="fixed right-0 top-0 z-50 h-full w-full max-w-[500px] bg-white text-black shadow-lg transition-transform">
          <button
            aria-label="Close Cart"
            onClick={() => setIsCartOpen(false)}
            className="absolute right-4 top-4 mt-2 text-lg"
          >
            ✖
          </button>
          <div className="flex h-full flex-col p-4">
            <Playfair_DisplayText
              tag="h1"
              fontSize="19px"
              className="mx-auto mt-2 w-fit text-black"
            >
              {translations.cart.title}
            </Playfair_DisplayText>

            <hr className="my-3 border-gray-300 lg:my-4" />

            {cartItems.length === 0 ? (
              <Playfair_DisplayText tag="h1" fontSize="16px" style="bold">
                {translations.cart.empty}
              </Playfair_DisplayText>
            ) : (
              <ul className="flex-1 overflow-y-auto">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between border-b p-2"
                  >
                    {/* Product Image */}
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="mr-4 max-h-[80px] max-w-[80px] rounded-md object-contain"
                    />
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Playfair_DisplayText
                        tag="h1"
                        fontSize="16px"
                        className="text-center"
                      >
                        {item.name}
                      </Playfair_DisplayText>
                      <Playfair_DisplayText tag="h1" fontSize="16px">
                        {translations.cart.quantity} {item.quantity}
                      </Playfair_DisplayText>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Playfair_DisplayText tag="h1" fontSize="16px">
                        {item.price} €
                      </Playfair_DisplayText>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove from Cart"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Delete />
                        <Playfair_DisplayText
                          tag="h1"
                          fontSize="16px"
                          className="text-red-500"
                        >
                          {translations.cart.remove}
                        </Playfair_DisplayText>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Total Price and Continue to Cart Button */}
            <div className="mb-6 mt-4 border-t pt-4">
              <div className="flex justify-between">
                <Playfair_DisplayText
                  tag="h1"
                  fontSize="16px"
                  className="font-bold"
                >
                  {translations.cart.subtotal}
                </Playfair_DisplayText>
                <Playfair_DisplayText
                  tag="h1"
                  fontSize="16px"
                  className="font-bold"
                >
                  {formattedTotalPrice} €
                </Playfair_DisplayText>
              </div>

              {/* Continue to Cart Button */}
              <Link href="/cart">
                <button
                  className="mt-4 w-full rounded-md bg-gray-800 px-4 py-2 hover:bg-gray-900"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Continue to Cart"
                >
                  <Playfair_DisplayText
                    tag="h1"
                    fontSize="16px"
                    className="text-white"
                  >
                    {translations.cart.title}
                  </Playfair_DisplayText>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
