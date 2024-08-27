interface Cars {
  viewCar: string
}

export default function TransparentButton({ viewCar }: Cars) {
  return (
    <button className="mx-4 h-11 w-11/12 rounded-3xl border-2 border-white text-center font-inter text-sm font-bold text-white">
      {viewCar}
    </button>
  )
}
