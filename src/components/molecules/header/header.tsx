import { ShoppingCart, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-food-primary text-base font-semibold tracking-wide uppercase sm:text-lg lg:text-base xl:text-lg mb-3">
                Premium Food Delivery
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-display font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Exceptional Cuisine</span>
                <span className="block text-food-primary mt-1">
                  Delivered to Your Door
                </span>
              </span>
            </h1>
            <p className="mt-5 text-base text-gray-500 sm:mt-7 sm:text-xl lg:text-lg xl:text-xl">
              Experience the finest selection of gourmet meals from
              award-winning restaurants. Prepared with premium ingredients and
              delivered with care to your doorstep.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md bg-food-primary text-white hover:bg-food-primary/90 h-auto">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Browse Menu
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md h-auto"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Find Restaurants
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-xl lg:max-w-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Delicious gourmet food"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                <div className="p-8">
                  <Badge className="mb-4 bg-white text-food-primary px-3 py-1.5">
                    Featured
                  </Badge>
                  <h3 className="text-white text-2xl font-display font-bold mb-2">
                    Chef's Special
                  </h3>
                  <p className="text-white/85 mb-4">
                    Discover this week's exclusive dishes created by our
                    award-winning chefs
                  </p>
                  <Button variant="secondary" size="sm">
                    View Special
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
