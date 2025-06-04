'use client'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { toast } from '../ui/use-toast'
import Image from 'next/image'

type OffersProps = {
  translations: {
    title: string
  }
}

export default function Offers({ translations }: OffersProps) {
  return (
    <div className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 font-display text-4xl font-bold text-food-dark">
          {translations.title}
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Offer 1 */}
          <Card className="rounded-2xl border border-gray-100 bg-white shadow-md transition hover:shadow-lg">
            <CardContent className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="mb-2 font-display text-2xl font-semibold text-food-primary">
                  🚚 Free Delivery
                </h3>
                <p className="mb-4 text-gray-700">
                  On your first order with code{' '}
                  <span className="font-semibold text-food-secondary">
                    WELCOME
                  </span>
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-food-secondary text-food-secondary transition hover:bg-food-secondary/10"
                  onClick={() => {
                    navigator.clipboard.writeText('WELCOME')
                    toast({
                      title: 'Promo Code Copied',
                      description: 'WELCOME has been copied to clipboard',
                    })
                  }}
                >
                  Copy Code
                </Button>
              </div>
              <Image
                src="/images/categories/drinks.avif"
                alt="Drinks offer"
                width={112}
                height={112}
                className="h-28 w-28 rounded-full border-4 border-food-secondary object-cover shadow-sm"
              />
            </CardContent>
          </Card>

          {/* Offer 2 */}
          <Card className="rounded-2xl border border-gray-100 bg-white shadow-md transition hover:shadow-lg">
            <CardContent className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="mb-2 font-display text-2xl font-semibold text-food-primary">
                  🍰 20% Off Desserts
                </h3>
                <p className="mb-4 text-gray-700">
                  Every weekend, limited time offer!
                </p>
                <Button
                  variant="outline"
                  className="rounded-full border-food-primary text-food-primary transition hover:bg-food-primary/10"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  Order Now
                </Button>
              </div>
              <Image
                src="/images/categories/sweets.avif"
                alt="Desserts offer"
                width={112}
                height={112}
                className="h-28 w-28 rounded-full border-4 border-food-primary object-cover shadow-sm"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
