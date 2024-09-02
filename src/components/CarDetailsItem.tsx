interface carDetailItemProps {
  icon: React.ReactNode
  title?: string | number | null
  className?: string
}

export default function CarDetailsItem({ title, icon, className }: carDetailItemProps) {
  return (
    <div className="flex items-center gap-3 font-inter capitalize text-primary-white">
      <span className="h-6 w-6">{icon}</span>
      <span className={className}>{title}</span>
    </div>
  )
}
