import { ActionData } from '../../util/types'

interface ValidationErrorsProps {
  actionData: ActionData
}

export default function ValidationErrors({ actionData }: ValidationErrorsProps) {
  const sharedStyles = 'text-lg text-red-400'
  return (
    <div className="text-center">
      {actionData?.error && <p className={sharedStyles}>{actionData.error}</p>}
      {actionData?.errors?.username && <p className={sharedStyles}>{actionData.errors.username}</p>}
      {actionData?.errors?.password && <p className={sharedStyles}>{actionData.errors.password}</p>}
    </div>
  )
}
