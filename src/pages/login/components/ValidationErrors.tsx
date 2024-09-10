import { ActionData } from '../../../util/types'

interface ValidationErrorsProps {
  actionData: ActionData
}

export default function ValidationErrors({ actionData }: ValidationErrorsProps) {
  return (
    <div className="text-center">
      {actionData?.error && <p className="text-lg text-secondary-mustard">{actionData.error}</p>}
      {actionData?.errors?.username && (
        <p className="text-lg text-secondary-mustard">{actionData.errors.username}</p>
      )}
      {actionData?.errors?.password && (
        <p className="text-lg text-secondary-mustard">{actionData.errors.password}</p>
      )}
    </div>
  )
}
