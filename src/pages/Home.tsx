import TransparentButton from '../components/TransparentButton'
import WhiteButton from '../components/WhiteButton'

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-primary-indigo py-10">
        <h1 className="flex flex-col text-center font-lora text-5xl font-bold text-gray-50">
          MONI <span className="font-medium italic">share</span>
        </h1>
        <p className="mx-auto my-12 flex flex-col text-center font-lora text-xl font-medium text-gray-100">
          Hello Manuela!!
          <span>What are you up to today?</span>
        </p>
        <WhiteButton car="Book Car" />
        <p className="my-6 text-center font-lora text-xl font-medium text-white">or</p>
        <TransparentButton viewCar="See My Cars" />
      </div>
    </>
  )
}
