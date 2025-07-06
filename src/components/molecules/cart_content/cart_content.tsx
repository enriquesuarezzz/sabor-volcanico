'use client'
import { useState, useEffect } from 'react'
import Delete from '@/components/atoms/svg/delete'
import { useCart } from '@/components/molecules/cart_context/cart_context'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { Playfair_DisplayText } from '@/components/atoms/playfair_display_text'
import { BarlowText } from '@/components/atoms/barlow_text'

interface CartContentProps {
  translations: {
    title: string
    empty: string
    product: string
    quantity: string
    price: string
    remove: string
    subtotal: string
    shipping: string
    total: string
    checkout: string
  }
}

const CartContent = ({ translations }: CartContentProps) => {
  const locale = useLocale() // Use locale from next-intl
  const router = useRouter()

  // Ensure cartItems is available on client-side only
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart()
  const [clientCart, setClientCart] = useState<typeof cartItems>([])

  useEffect(() => {
    setClientCart(cartItems) // Sync cart data after mount
  }, [cartItems])

  const subtotal = clientCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const shippingCost = 0
  const igic = parseFloat((subtotal * 0.07).toFixed(2))
  const total = parseFloat((subtotal + shippingCost + igic).toFixed(2))

  const handleCheckout = () => {
    // Use the locale dynamically in routing
    router.push(`/${locale}/checkout`)
  }

  return (
    <div className="mx-4 flex flex-col justify-between gap-4 pt-24 md:px-10 lg:mx-24 lg:flex-row lg:gap-20 lg:px-4 lg:pt-32">
      <div className="w-full p-1 md:p-6 lg:w-2/3">
        <Playfair_DisplayText fontSize="28px" style="bold" className="pb-10">
          {translations.title}
        </Playfair_DisplayText>

        {clientCart.length === 0 ? (
          <div className="mt-10 flex justify-center">
            <BarlowText fontSize="16px" style="bold">
              {translations.empty}
            </BarlowText>
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-12 border-b pb-2 text-center">
              <div className="col-span-6 text-left">
                <BarlowText fontSize="22px">{translations.product}</BarlowText>
              </div>
              <div className="col-span-4">
                <BarlowText fontSize="22px">{translations.quantity}</BarlowText>
              </div>
              <div className="col-span-2">
                <BarlowText fontSize="22px">{translations.price}</BarlowText>
              </div>
            </div>
            {clientCart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center border-b py-4"
              >
                <div className="col-span-6 flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-h-[50px] rounded-md object-cover md:max-h-[100px]"
                  />
                  <BarlowText fontSize="19px">{item.name}</BarlowText>
                </div>
                <div className="col-span-4 flex flex-col items-center gap-1 md:gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <BarlowText fontSize="16px">{item.quantity}</BarlowText>
                    <button
                      className="rounded bg-gray-300 px-2 py-1 text-black hover:bg-gray-400"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="flex items-center gap-1"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Delete />
                    <BarlowText fontSize="16px" className="text-red-500">
                      {translations.remove}
                    </BarlowText>
                  </button>
                </div>
                <div className="col-span-2 text-center">
                  <BarlowText fontSize="19px">
                    {item.price.toFixed(2)} €
                  </BarlowText>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {clientCart.length > 0 && (
        <div className="w-full rounded-lg bg-white p-2 pt-4 md:p-10 lg:w-1/3 lg:p-6 lg:pt-10">
          <BarlowText fontSize="22px" style="bold">
            {translations.total}
          </BarlowText>

          <div className="mt-4 flex justify-between">
            <BarlowText fontSize="16px">{translations.subtotal}</BarlowText>
            <BarlowText fontSize="16px">{subtotal.toFixed(2)} €</BarlowText>
          </div>

          <div className="mt-2 flex justify-between">
            <BarlowText fontSize="16px">{translations.shipping}</BarlowText>
            <BarlowText fontSize="16px">{shippingCost.toFixed(2)} €</BarlowText>
          </div>

          <div className="mt-2 flex justify-between">
            <BarlowText fontSize="16px">IGIC (7%)</BarlowText>
            <BarlowText fontSize="16px">{igic.toFixed(2)} €</BarlowText>
          </div>

          <div className="mt-4 flex justify-between border-t pt-4 font-bold">
            <BarlowText fontSize="16px">{translations.total}</BarlowText>
            <BarlowText fontSize="16px">{total.toFixed(2)} €</BarlowText>
          </div>

          <button
            className="mt-6 w-full rounded bg-gray-800 py-2 text-white hover:bg-gray-900"
            onClick={handleCheckout}
          >
            {translations.checkout}
          </button>
        </div>
      )}
    </div>
  )
}

export default CartContent
