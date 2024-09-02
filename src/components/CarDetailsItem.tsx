interface carDetailItemProps {
  icon: React.ReactNode
  title?: string | number | null
}

export default function CarDetailsItem({ title, icon }: carDetailItemProps) {
  return (
    <div className="flex items-center gap-3 font-inter text-white">
      <span className="h-6 w-6">{icon}</span>
      <span>{title}</span>
    </div>
  )
}
