import Categories from '@/components/molecules/categories/categories'
import Header from '@/components/molecules/header/header'
import TopSellingProducts from '@/components/molecules/top_selling_products/top_selling_products'
import { getTranslations } from 'next-intl/server'
import Offers from '@/components/molecules/offers/offers'
import Advantages from '@/components/molecules/advantages/advantages'

export async function generateMetadata() {
  const t = await getTranslations('home_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default async function HomePage() {
  const categoriesT = await getTranslations('home_page.categories')
  const offersT = await getTranslations('home_page.offers')

  const categoriesTranslations = {
    title: categoriesT('title'),
    allCategories: categoriesT('allCategories'),
    aloeVera: categoriesT('aloeVera'),
    sweets: categoriesT('sweets'),
    gofio: categoriesT('gofio'),
    drinks: categoriesT('drinks'),
    sauces: categoriesT('sauces'),
    potatoesAndSweetPotatoes: categoriesT('potatoesAndSweetPotatoes'),
    rumAndLiquors: categoriesT('rumAndLiquors'),
    cheeses: categoriesT('cheeses'),
    wines: categoriesT('wines'),
  }
  const offersTranslations = {
    title: offersT('title'),
  }
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Categories translations={categoriesTranslations} />
      <TopSellingProducts />
      <Advantages />
      <Offers translations={offersTranslations} />
    </main>
  )
}
