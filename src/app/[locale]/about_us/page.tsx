import { BarlowText } from '@/components/atoms/barlow_text'
import { Playfair_DisplayText } from '@/components/atoms/playfair_display_text'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export async function generateMetadata() {
  const t = await getTranslations('about_us_page')

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  }
}
export default async function AboutUs() {
  const t = await getTranslations('about_us_page')
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-4 px-10 pb-10 pt-24 md:gap-8 md:pb-16 md:pt-36 lg:flex-row lg:gap-8">
        <Playfair_DisplayText
          fontSize="44px"
          style="bold"
          className="max-w-[900px] text-center lg:max-w-[700px]"
        >
          {t('title')}
        </Playfair_DisplayText>
        <BarlowText fontSize="14px" className="max-w-[500px] text-center">
          {t('description')}
        </BarlowText>
      </div>
      <div className="w-full">
        <Image
          src="/images/about_us_header.avif"
          alt="wine italy tuscany"
          width={1920}
          height={1080}
          className="h-full max-h-[650px] w-full object-cover"
        />
      </div>
      <section className="mt-10 flex w-full items-center justify-center bg-[#f6f3ed] px-6 py-16">
        <div className="flex w-full max-w-6xl flex-col items-center md:flex-row md:items-center">
          {/* Text Content */}
          <div className="mb-10 text-center md:mb-0 md:w-1/2 md:text-left">
            <Playfair_DisplayText
              fontSize="22px"
              className="pb-1 uppercase text-gray-700"
            >
              {t('first_section_title')}
            </Playfair_DisplayText>
            <Playfair_DisplayText
              fontSize="14px"
              style="bold"
              className="pb-4 uppercase text-gray-700"
            >
              {t('first_section_subtitle')}
            </Playfair_DisplayText>
            <BarlowText fontSize="14px" className="uppercase text-gray-600">
              {t('first_section_description')}
            </BarlowText>
          </div>

          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <div className="relative h-64 w-96 overflow-hidden rounded shadow-md">
              <Image
                src="/images/categories/all.avif"
                alt="Dish"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="mx-4 flex flex-col gap-6 pt-10 md:mx-20 md:flex-row md:gap-10 md:pt-16">
        <BarlowText fontSize="16px" className="">
          <span
            dangerouslySetInnerHTML={{
              __html: t('first_paragraph'),
            }}
          />
        </BarlowText>
        <BarlowText fontSize="16px" className="">
          <span
            dangerouslySetInnerHTML={{
              __html: t('second_paragraph'),
            }}
          />
        </BarlowText>
      </div>
      <Image
        src="/images/about_us_image_1.avif"
        alt="bottle of wine glass of wine and grapes on a table"
        width={1920}
        height={600}
        className="h-full max-h-[600px] w-full object-cover px-0 pt-10 md:px-20 md:pt-16"
      />
      <BarlowText fontSize="16px" className="mx-4 pt-10 md:mx-20 md:pt-16">
        <span
          dangerouslySetInnerHTML={{
            __html: t('last_paragraph'),
          }}
        />
      </BarlowText> */}
    </section>
  )
}
