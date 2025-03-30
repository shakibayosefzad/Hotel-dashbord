import React from 'react'
import { useTranslation } from 'react-i18next'

function Transactions() {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="text-xl font-bold dark:text-white">{ t('transactions')}</h1>
    </div>
  )
}

export default Transactions
