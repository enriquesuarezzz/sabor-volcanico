import { BarlowText } from '@/components/atoms/barlow_text'
import { Playfair_DisplayText } from '@/components/atoms/playfair_display_text'
import { getTranslations } from 'next-intl/server'
import { CircleCheckBig } from 'lucide-react'

export default async function Advantages() {
  const t = await getTranslations('home_page.advantages')

  const advantages = [
    {
      title: t('advantage_1_title'),
      description: t('advantage_1_description'),
    },
    {
      title: t('advantage_2_title'),
      description: t('advantage_2_description'),
    },
    {
      title: t('advantage_3_title'),
      description: t('advantage_3_description'),
    },
  ]

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-16 md:flex-row md:gap-6 md:divide-x xl:gap-12">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 md:flex-1 md:flex-col md:items-center md:px-4 lg:items-start ${
            index !== 0 ? 'md:pl-6' : ''
          }`}
        >
          <CircleCheckBig className="text-dark-gray mt-1 shrink-0" />
          <div className="flex flex-col text-start md:text-center lg:text-start">
            <Playfair_DisplayText fontSize="32px" className="text-dark-gray">
              {advantage.title}
            </Playfair_DisplayText>
            <BarlowText fontSize="14px" className="text-dark-gray mt-2">
              {advantage.description}
            </BarlowText>
          </div>
        </div>
      ))}
    </div>
  )
}
