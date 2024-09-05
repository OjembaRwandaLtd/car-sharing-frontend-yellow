import { ReactElement } from 'react'
import carPicture from './car-homepage.png'
interface CarImageProps {
  className?: string
}

export default function HomepageCar({ className }: CarImageProps): ReactElement {
  return <img src={carPicture} className={className} alt="car" />
}
