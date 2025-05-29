'use client'
import { useState } from 'react'
import { cn } from '../../../../lib/utils'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

// Category type definition
type Category = {
  id: number
  name: string
  image: string
}

// Professional categories with image URLs
const categories: Category[] = [
  {
    id: 1,
    name: 'All',
    image: '/images/categories/all.avif',
  },
  {
    id: 2,
    name: 'Aloe Vera',
    image: '/images/categories/aloe_vera.avif',
  },
  {
    id: 3,
    name: 'Dulces',
    image: '/images/categories/dulces.avif',
  },
  {
    id: 4,
    name: 'Gofio',
    image: '/images/categories/gofio.avif',
  },
  {
    id: 5,
    name: 'Bebidas',
    image: '/images/categories/bebidas.avif',
  },
  {
    id: 6,
    name: 'Salsas',
    image: '/images/categories/mojo.avif',
  },
  {
    id: 7,
    name: 'Papas y batatas',
    image: '/images/categories/papas_y_batatas.avif',
  },
  {
    id: 8,
    name: 'Ron y Licores',
    image: '/images/categories/ron_y_licores.avif',
  },
  {
    id: 9,
    name: 'Quesos',
    image: '/images/categories/quesos.avif',
  },
  {
    id: 10,
    name: 'Vinos',
    image: '/images/categories/vinos.avif',
  },
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1)

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-display text-3xl font-bold">
          Browse Categories
        </h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-6 pb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="group focus:outline-none"
              >
                <div
                  className={cn(
                    'flex flex-col items-center transition-all duration-200',
                    activeCategory === category.id
                      ? 'scale-105'
                      : 'hover:scale-105',
                  )}
                >
                  <div
                    className={cn(
                      'relative mb-3 h-24 w-24 overflow-hidden rounded-full',
                      activeCategory === category.id
                        ? 'ring-4 ring-food-primary'
                        : 'ring-2 ring-transparent hover:ring-food-primary/30',
                    )}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover"
                    />
                    {activeCategory === category.id && (
                      <div className="absolute inset-0 bg-food-primary/20"></div>
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-sm font-medium',
                      activeCategory === category.id
                        ? 'font-semibold text-food-primary'
                        : 'text-gray-600',
                    )}
                  >
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}

export default Categories
