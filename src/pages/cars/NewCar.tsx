import AddCarForm from '../../components/AddCarForm'
import Spinner from '../../assets/Spinner'
import useAddCar from '../../hooks/useAddCar'

export default function NewCar() {
  const [{ loading }, execute] = useAddCar()

  if (loading) return <Spinner />

  return (
    <main className="w-full items-center px-4 py-5 md:px-52 lg:px-60">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-moni-gray-100">
        New Car
      </h1>
      <AddCarForm execute={execute} />
    </main>
  )
}
