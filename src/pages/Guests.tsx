import React from 'react'
import { useTranslation } from 'react-i18next'

function Guests() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-xl dark:text-white font-bold">{ t ("guests")}</h1>
    </div>
  )
}

export default Guests