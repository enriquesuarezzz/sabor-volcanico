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
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 2,
    name: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 3,
    name: 'Burgers',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 4,
    name: 'Sushi',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 5,
    name: 'Pasta',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 6,
    name: 'Salads',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 7,
    name: 'Desserts',
    image:
      'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 8,
    name: 'Drinks',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 9,
    name: 'Breakfast',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
  },
  {
    id: 10,
    name: 'Vegan',
    image:
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
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
