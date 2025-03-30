import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation();

  return (
    <div>
  <h1 className="text-xl dark:text-white font-bold">{ t ("dashboard")}</h1>
    </div>
  )
}

export default Home
