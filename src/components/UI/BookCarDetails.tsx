import { PropsWithChildren } from 'react'
import CalendarIcon from '../../assets/CalendarIcon'
import TimeIcon from '../../assets/TimeIcon'
import useCarType from '../../hooks/useCarType'

interface BookCarDetailsProps extends PropsWithChildren {
  carTypeId: number | string
  carName: string
  user: string
  isOwner: boolean
  startDate: string
  endDate: string
  startTime: string
  endTime: string
}

export default function BookCarDetails({
  carTypeId: id,
  carName,
  user,
  isOwner,
  startDate,
  endDate,
  startTime,
  endTime,
  children,
}: BookCarDetailsProps) {
  const [{ data: carType, error: carTypeError, loading: carTypeLoading }] = useCarType(id)

  if (carTypeLoading) {
    return
  }

  if (carTypeError) {
    throw new Error()
  }
  if (!carType) {
    return <p>No car yet</p>
  }

  return (
    <div className="h-full w-full items-center px-12 py-8 text-moni-gray-100 sm:bg-moni-light-black">
      <figure>
        <img src={carType.imageUrl} alt="carImage" />
        <figcaption className="flex w-full flex-col gap-8">
          <div>
            <h3 className="font-lora text-xl font-medium">{carName}</h3>
            <p className="font-inter text-sm">
              {isOwner ? 'Owned by' : 'Requested by'} {user}
            </p>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-2">
              <p>from</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CalendarIcon />
                  <span>{startDate}</span>
                </li>
                <li className="flex items-center gap-1">
                  <TimeIcon />
                  <span>{startTime}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p>to</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1">
                  <CalendarIcon />
                  <span>{endDate}</span>
                </li>
                <li className="flex items-center gap-1">
                  <TimeIcon />
                  <span>{endTime}</span>
                </li>
              </ul>
            </div>
          </div>
        </figcaption>
      </figure>

      {children}
    </div>
  )
}
