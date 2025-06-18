'use client'

import { useState } from 'react'
import { cn } from '../../../../lib/utils'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

type Category = {
  id: number
  name: string
  image: string
}

type CategoriesProps = {
  translations: {
    title: string
    allCategories: string
    aloeVera: string
    sweets: string
    gofio: string
    drinks: string
    sauces: string
    potatoesAndSweetPotatoes: string
    rumAndLiquors: string
    cheeses: string
    wines: string
  }
}

const Categories = ({ translations }: CategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState(1)

  const categories: Category[] = [
    {
      id: 1,
      name: translations.allCategories,
      image: '/images/categories/all.avif',
    },
    {
      id: 2,
      name: translations.aloeVera,
      image: '/images/categories/aloe_vera.avif',
    },
    {
      id: 3,
      name: translations.sweets,
      image: '/images/categories/sweets.avif',
    },
    { id: 4, name: translations.gofio, image: '/images/categories/gofio.avif' },
    {
      id: 5,
      name: translations.drinks,
      image: '/images/categories/drinks.avif',
    },
    { id: 6, name: translations.sauces, image: '/images/categories/mojo.avif' },
    {
      id: 7,
      name: translations.potatoesAndSweetPotatoes,
      image: '/images/categories/potatoes.avif',
    },
    {
      id: 8,
      name: translations.rumAndLiquors,
      image: '/images/categories/rum_and_licors.avif',
    },
    {
      id: 9,
      name: translations.cheeses,
      image: '/images/categories/cheeses.avif',
    },
    {
      id: 10,
      name: translations.wines,
      image: '/images/categories/wines.avif',
    },
  ]

  return (
    <div className="bg-white pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-display text-3xl font-bold md:text-3xl">
          {translations.title}
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
                      'text-md font-medium',
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
