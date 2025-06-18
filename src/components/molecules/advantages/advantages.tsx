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
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-0 md:flex-row md:gap-6 md:divide-x md:pt-16 xl:gap-12">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 md:flex-1 md:flex-col md:items-center md:px-4 lg:items-start ${
            index !== 0 ? 'md:pl-3' : ''
          }`}
        >
          <div className="ml-4 flex flex-col text-start md:text-center lg:text-start">
            <div className="flex items-center gap-6">
              <CircleCheckBig className="text-dark-gray mt-1 shrink-0" />
              <Playfair_DisplayText fontSize="28px" className="text-dark-gray">
                {advantage.title}
              </Playfair_DisplayText>
            </div>
            <BarlowText fontSize="16px" className="text-dark-gray mt-2">
              {advantage.description}
            </BarlowText>
          </div>
        </div>
      ))}
    </div>
  )
}
