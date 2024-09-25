import carImage from '../../assets/Homepage-car.avif'
import CalendarIcon from '../../assets/CalendarIcon'
import TimeIcon from '../../assets/TimeIcon'
export default function BookCarDetails() {
  return (
    <>
      <figure className="flex flex-col items-center gap-8 px-12 py-8 text-moni-gray-100">
        <img src={carImage} alt="carImage" />
        <figcaption className="flex w-full flex-col gap-8">
          <div>
            <h3 className="font-lora text-xl font-medium">Tini Titan</h3>
            <p className="font-inter text-sm">Requested by Manuela</p>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-2">
              <p>from</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CalendarIcon />
                  <span>07 Jun 2024</span>
                </li>
                <li className="flex items-center gap-1">
                  <TimeIcon />
                  <span>13:09</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p>to</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CalendarIcon />
                  <span>07 Jun 2024</span>
                </li>
                <li className="flex items-center gap-1">
                  <TimeIcon />
                  <span>14:09</span>
                </li>
              </ul>
            </div>
          </div>
        </figcaption>
      </figure>
    </>
  )
}
