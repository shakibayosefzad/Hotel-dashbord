import React from 'react'
import { useTranslation } from 'react-i18next'

function Rooms() {
  const { t } =  useTranslation();
  return (
    <div>
      <h1 className="text-xl font-bold dark:text-white">{t('rooms')}</h1>
    </div>
  )
}

export default Rooms
