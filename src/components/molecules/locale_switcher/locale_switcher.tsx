'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu'

const locales = [
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
  },
]

const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleLocaleChange = (localeCode: string) => {
    const segments = pathname.split('/')
    segments[1] = localeCode
    const newPath = segments.join('/')
    router.replace(newPath)
  }

  const selectedLocale =
    locales.find((locale) => locale.code === currentLocale) || locales[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 hover:bg-gray-100 hover:text-canary-blue"
        >
          <div className="flex items-center space-x-1">
            <span className="text-base">{selectedLocale.flag}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => handleLocaleChange(locale.code)}
            className={`flex cursor-pointer items-center space-x-2 ${
              selectedLocale.code === locale.code ? 'bg-canary-blue/10' : ''
            }`}
          >
            <span className="text-base">{locale.flag}</span>
            <span className="text-sm">{locale.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LocaleSwitcher
