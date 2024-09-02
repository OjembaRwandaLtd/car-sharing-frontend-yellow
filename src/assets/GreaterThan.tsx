import { ReactElement } from 'react'

interface GreaterThanIconProps {
  className?: string
}

export default function GreaterThanIcon({ className }: GreaterThanIconProps): ReactElement {
  return (
    <svg
      width="48" // Adjust size as needed
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white" // White stroke color for the greater than symbol
      className={className}
    >
      <path
        d="M8 4L16 12L8 20" // Creates the greater than symbol
        strokeWidth="2" // Adjust thickness as needed
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
