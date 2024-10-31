export function Stats() {
  const stats = [
    { label: 'Projects Completed', value: '23+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Satisfied Clients', value: '50+' },
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
