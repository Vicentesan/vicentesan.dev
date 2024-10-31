'use client'

import { useLanguage } from '@/context/language'

export function Stats() {
  const { dictionary } = useLanguage()

  const stats = [
    { label: dictionary.projects_completed, value: '73+' },
    { label: dictionary.technologies_mastered, value: '15+' },
    { label: dictionary.satisfied_clients, value: '57+' },
    { label: dictionary.years_of_experience, value: '2+' },
    { label: dictionary.countries_served, value: '4+' },
    { label: dictionary.repositories_contributed, value: '7+' },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map(({ label, value }) => (
        <div key={label} className="space-y-2">
          <div className="text-3xl font-bold text-blue-400 dark:text-teal-400">
            {value}
          </div>
          <div className="text-sm text-gray-800 dark:text-zinc-400">
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}
