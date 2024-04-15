import { FC } from 'react'

import { LogoIcon } from '../components'
import { useTranslation } from '../utils'

export const Branding: FC = () => {
  const { t } = useTranslation()

  return (
    <a className="heyform-branding" href="https://www.siriusform.com/?ref=badge" target="_blank">
      <LogoIcon /> {t('Made with')} HeyForm
    </a>
  )
}
