import { BarlowText } from '@/components/atoms/barlow_text'
import { Playfair_DisplayText } from '@/components/atoms/playfair_display_text'
import { getTranslations } from 'next-intl/server'
import { CircleCheckBig } from 'lucide-react'

export default async function Advantages() {
  const t = await getTranslations('about_us_page.advantages')

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
    <div className="md:divide-dark-gray m-auto flex flex-col px-4 pt-16 md:max-w-full md:flex-row md:gap-6 md:divide-x xl:gap-12">
      {advantages.map((advantage, index) => (
        <div
          className={`flex flex-row items-start gap-4 py-3 md:flex-col md:items-center md:py-7 lg:flex-row lg:items-start ${
            index === 0 ? '' : 'md:pl-6 xl:pl-[52px]'
          }`}
          key={index}
        >
          {/* Icon */}
          <CircleCheckBig className="mt-2 shrink-0" />
          {/* Texts */}
          <div className="flex flex-col md:text-center lg:text-start">
            <Playfair_DisplayText
              fontSize="32px"
              className="text-dark-gray whitespace-nowrap"
            >
              {advantage.title}
            </Playfair_DisplayText>

            <BarlowText fontSize="14px" className="text-dark-gray">
              {advantage.description}
            </BarlowText>
          </div>
        </div>
      ))}
    </div>
  )
}
