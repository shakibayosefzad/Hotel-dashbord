import React from 'react'
import { useTranslation  } from 'react-i18next'

function Pricing() {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="text-xl font-bold dark:text-white">{t('prices')}</h1>
    </div>
  )
}

export default Pricing
