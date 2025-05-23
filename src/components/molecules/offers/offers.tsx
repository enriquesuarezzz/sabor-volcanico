'use client'
import { getTranslations } from 'next-intl/server'
import { PoppinsText } from '@/components/atoms/poppins_text'
import { Link } from '@/i18n/routing'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { toast } from '../ui/use-toast'

export default function Offers() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-display text-3xl font-bold">
          Exclusive Offers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-food-secondary to-teal-600 text-white shadow-xl">
            <CardContent className="flex flex-col items-center justify-between p-8 md:flex-row">
              <div>
                <h3 className="mb-3 font-display text-2xl font-bold">
                  Free Delivery
                </h3>
                <p className="mb-5 text-lg opacity-90">
                  On your first order with code{' '}
                  <span className="font-semibold">WELCOME</span>
                </p>
                <Button
                  variant="secondary"
                  className="bg-white font-medium text-food-secondary hover:bg-white/90"
                  onClick={() => {
                    navigator.clipboard.writeText('WELCOME')
                    toast({
                      title: 'Promo Code Copied',
                      description: 'WELCOME has been copied to clipboard',
                    })
                  }}
                >
                  Get Code
                </Button>
              </div>
              <div className="mt-6 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0feddd4dba51?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300"
                  alt="Delivery service"
                  className="h-32 w-32 rounded-full border-4 border-white/30 object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 bg-gradient-to-br from-food-primary to-red-600 text-white shadow-xl">
            <CardContent className="flex flex-col items-center justify-between p-8 md:flex-row">
              <div>
                <h3 className="mb-3 font-display text-2xl font-bold">
                  20% Off Desserts
                </h3>
                <p className="mb-5 text-lg opacity-90">
                  Every weekend, limited time offer!
                </p>
                <Button
                  variant="secondary"
                  className="bg-white font-medium text-food-primary hover:bg-white/90"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="mt-6 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300"
                  alt="Dessert special"
                  className="h-32 w-32 rounded-full border-4 border-white/30 object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
