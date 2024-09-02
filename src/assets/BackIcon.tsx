import { ReactElement } from 'react'

interface BackIconProps {
  className?: string
}

export default function BackIcon({ className }: BackIconProps): ReactElement {
  return (
    <svg
      width="32"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#F8FCAD" // Set stroke color to white
      className={className}
    >
      <path
        d="M16 3L4 12L16 21"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2" // Adjust the stroke width as needed
      />
    </svg>
  )
}
