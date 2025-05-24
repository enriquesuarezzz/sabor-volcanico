import Categories from '@/components/molecules/categories/categories'
import Header from '@/components/molecules/header/header'
import TopSellingProducts from '@/components/molecules/top_selling_products/top_selling_products'
import { getTranslations } from 'next-intl/server'
import Offers from '@/components/molecules/offers/offers'

export async function generateMetadata() {
  const t = await getTranslations('home_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}

export default async function HomePage() {
  const t = await getTranslations('age_verification_pop_up')
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Categories />
      <TopSellingProducts />
      <Offers />
    </main>
  )
}
