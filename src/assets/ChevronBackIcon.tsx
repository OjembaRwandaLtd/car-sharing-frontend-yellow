import { ReactElement } from 'react'

interface ChevronBackIconProps {
  className?: string
}

export function ChevronBackIcon({ className }: ChevronBackIconProps): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="#F8FCAD"
    >
      <path d="M7.5 1L1.5 7L7.5 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
