import Image from 'next/image'
import { BarlowText } from '../atoms/barlow_text'

export default function Highlights() {
  return (
    <section className="flex w-full items-center justify-center pt-10 md:pt-24">
      {/* bg image */}
      <div className="relative w-full">
        <Image
          src={`/images/features.avif`}
          alt="canry islands beach image"
          width={250}
          height={250}
          unoptimized
          priority
          className="max-h-[500px] w-full object-cover"
        />
      </div>
      {/* highlights */}
      <div className="absolute flex w-full items-center justify-between px-4 md:px-11">
        {/* highlight 1 */}
        <div className="flex flex-col items-center">
          <BarlowText fontSize="44px" className="text-white">
            +100
          </BarlowText>
          <BarlowText fontSize="16px" className="text-white">
            aviones
          </BarlowText>
        </div>
        {/* highlight 2 */}
        <div className="flex flex-col items-center">
          <BarlowText fontSize="44px" className="text-white">
            +100
          </BarlowText>
          <BarlowText fontSize="16px" className="text-white">
            aviones
          </BarlowText>
        </div>
        {/* highlight 3 */}
        <div className="flex flex-col items-center">
          <BarlowText fontSize="44px" className="text-white">
            +100
          </BarlowText>
          <BarlowText fontSize="16px" className="text-white">
            aviones
          </BarlowText>
        </div>
        {/* highlight 4 */}
        <div className="flex flex-col items-center">
          <BarlowText fontSize="44px" className="text-white">
            +100
          </BarlowText>
          <BarlowText fontSize="16px" className="text-white">
            aviones
          </BarlowText>
        </div>
      </div>
    </section>
  )
}
