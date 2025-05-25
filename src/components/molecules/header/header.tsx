import { ShoppingCart, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

const Header = () => {
  return (
    <div className="relative py-16 pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="text-canary-blue mb-3 block text-base font-semibold uppercase tracking-wide sm:text-lg lg:text-base xl:text-lg">
                Premium Food Delivery
              </span>
              <span className="mt-1 block font-display text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="text-canary-blue-dark block">
                  Exceptional Cuisine
                </span>
                <span className="text-canary-blue mt-1 block">
                  Delivered to Your Door
                </span>
              </span>
            </h1>
            <p className="mt-5 text-base text-gray-600 sm:mt-7 sm:text-xl lg:text-lg xl:text-xl">
              Experience the finest selection of gourmet meals from
              award-winning restaurants. Prepared with premium ingredients and
              delivered with care to your doorstep.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:text-left">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="bg-canary-blue hover:bg-canary-blue-dark flex h-auto w-full items-center justify-center rounded-2xl border border-transparent px-8 py-6 text-base font-medium text-white">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Browse Menu
                  </Button>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <Button
                    variant="outline"
                    className="border-canary-yellow text-canary-blue hover:bg-canary-yellow/10 flex h-auto w-full items-center justify-center rounded-2xl px-8 py-6 text-base font-medium"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Find Restaurants
                  </Button>
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
                  <Badge className="bg-canary-yellow text-canary-blue-dark mb-4 px-3 py-1.5 font-semibold">
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
                    className="bg-canary-yellow text-canary-blue-dark hover:bg-canary-yellow-light rounded-2xl"
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

export default Header
