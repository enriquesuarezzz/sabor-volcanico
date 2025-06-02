import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Star } from 'lucide-react'

export default async function TopSellingProducts() {
  const t = await getTranslations('home_page.top_selling_products')
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold">{t('title')}</h2>
          <Link href="/products">
            <Button
              variant="outline"
              className="border-food-primary text-food-primary hover:bg-food-primary/5"
            >
              {t('button_text')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: t('product_1'),
              image:
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400',
              rating: 4.8,

              category: t('product_1_category'),
            },
            {
              name: t('product_2'),
              image:
                'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400',
              rating: 4.7,

              category: t('product_2_category'),
            },
            {
              name: t('product_3'),
              image:
                'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400',
              rating: 4.9,

              category: t('product_3_category'),
            },
            {
              name: t('product_4'),
              image:
                'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400',
              rating: 4.6,

              category: t('product_4_category'),
            },
          ].map((product, i) => (
            <Card
              key={i}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-3 top-3">
                  <Badge className="flex items-center gap-1 bg-white px-2 py-1 text-gray-800">
                    <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                    <span>{product.rating}</span>
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 font-display text-lg font-bold">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{product.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
