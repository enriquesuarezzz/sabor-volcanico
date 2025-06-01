import { ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'

export default async function Header() {
  const t = await getTranslations('home_page.header')
  return (
    <div className="relative py-16 pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="mb-3 block text-base font-semibold uppercase tracking-wide text-canary-blue sm:text-lg lg:text-base xl:text-base">
                {t('title')}
              </span>
              <span className="mt-1 block font-display text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-4xl">
                <span className="block text-canary-blue-dark">
                  {t('subtitle')}
                </span>
                <span className="mt-1 block text-canary-blue">
                  {t('subtitle2')}
                </span>
              </span>
            </h1>
            <p className="mt-5 text-base text-gray-600 sm:mt-7 sm:text-xl lg:text-lg xl:text-lg">
              {t('description')}
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:text-left">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/products">
                    <Button className="flex h-auto w-full items-center justify-center rounded-2xl border border-transparent bg-canary-blue px-8 py-6 text-base font-medium text-white hover:bg-canary-blue-dark">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {t('products_button')}
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <Link href="/about_us">
                    <Button
                      variant="outline"
                      className="flex h-auto w-full items-center justify-center rounded-2xl border-canary-yellow px-8 py-6 text-base font-medium text-canary-blue hover:bg-canary-yellow/10"
                    >
                      {t('about_us_button')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full overflow-hidden rounded-lg shadow-xl lg:max-w-lg">
              <img
                src="images/header_image.jpg"
                alt="Delicious gourmet food"
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8">
                  <Badge className="mb-4 bg-canary-yellow px-3 py-1.5 font-semibold text-canary-blue-dark">
                    Featured
                  </Badge>
                  <h3 className="mb-2 font-display text-2xl font-bold text-white">
                    Chef's Special
                  </h3>
                  <p className="mb-4 text-white/90">
                    Discover this week's exclusive dishes created by our
                    award-winning chefs
                  </p>
                  <Button
                    className="rounded-2xl bg-canary-yellow text-canary-blue-dark hover:bg-canary-yellow-light"
                    size="sm"
                  >
                    View Special
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
