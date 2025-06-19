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
    <div className="flex w-full flex-col items-center justify-center pt-4 md:pt-24">
      <section className="flex w-full flex-col items-center justify-center gap-4 px-10 pb-10 pt-24 md:gap-8 md:pb-16 md:pt-10 lg:flex-row lg:gap-8">
        <Playfair_DisplayText
          fontSize="44px"
          className="max-w-[900px] text-center text-gray-700 transition lg:max-w-[700px]"
        >
          {t('title')}
        </Playfair_DisplayText>
        <BarlowText fontSize="16px" className="max-w-[500px] text-center">
          {t('description')}
        </BarlowText>
      </section>
      <div className="w-full">
        <Image
          src="/images/about_us_header.avif"
          alt="canary islands town image"
          width={1920}
          height={1080}
          className="h-full max-h-[650px] w-full object-cover"
        />
      </div>
      <section className="mx-4 flex flex-col gap-6 pt-10 md:mx-20 md:flex-row md:gap-10 md:pt-14">
        <BarlowText fontSize="16px" className="w-full md:w-[50%]">
          <span
            dangerouslySetInnerHTML={{
              __html: t('first_paragraph'),
            }}
          />
        </BarlowText>
        <BarlowText fontSize="16px" className="w-full md:w-[50%]">
          <span
            dangerouslySetInnerHTML={{
              __html: t('second_paragraph'),
            }}
          />
        </BarlowText>
      </section>
      <section className="mx-4 mt-10 flex w-full justify-center bg-[#f6f3ed] py-4 md:mx-20">
        <div className="flex w-full max-w-6xl flex-col items-center md:flex-row md:items-center">
          {/* Text Content */}
          <div className="mb-10 text-center md:mb-0 md:w-1/2 md:text-left">
            <Playfair_DisplayText
              fontSize="28px"
              className="pb-1 uppercase text-gray-700"
            >
              {t('first_section_title')}
            </Playfair_DisplayText>
            <Playfair_DisplayText
              fontSize="16px"
              style="bold"
              className="pb-4 uppercase text-gray-700"
            >
              {t('first_section_subtitle')}
            </Playfair_DisplayText>
            <BarlowText fontSize="16px" className="text-gray-600">
              {t('first_section_description')}
            </BarlowText>
          </div>

          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded shadow-md lg:h-[500px] lg:w-[500px]">
              <Image
                src="/images/about_us_image_1.avif"
                alt="hands of a person making gofio"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 pt-10 md:mx-20 md:pt-14">
        <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-10 md:space-y-0">
          {/* Text 1 - Order 1 on mobile */}
          <div className="order-1 space-y-6 md:order-2 md:w-1/2">
            <BarlowText
              fontSize="16px"
              className="text-lg leading-relaxed text-gray-800"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: t('third_paragraph'),
                }}
              />
            </BarlowText>

            <BarlowText
              fontSize="16px"
              className="text-lg leading-relaxed text-gray-800"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: t('fourth_paragraph'),
                }}
              />
            </BarlowText>
          </div>

          {/* Image - Order 2 on mobile */}
          <div className="order-2 flex justify-center md:order-1 md:w-1/2">
            <div className="max-w-xl overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/about_us_image_2.avif"
                width={800}
                height={600}
                alt="three wine bottles and a lot of cheeses"
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
