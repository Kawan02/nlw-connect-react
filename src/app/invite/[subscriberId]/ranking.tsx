import { getRanking } from '@/http/api'
import Image, { type StaticImageData } from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  const imageRanking: Record<number, StaticImageData> = {
    1: gold,
    2: silver,
    3: cooper,
  }

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {item.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              <Image
                src={imageRanking[rankingPosition]}
                alt=""
                className="absolute top-0 right-8"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
