import { ActionData } from '../Login'

interface ValidationErrorsProps {
  actionData: ActionData
}

export default function ValidationErrors({ actionData }: ValidationErrorsProps) {
  return (
    <div>
      {actionData?.error && (
        <p className="text-center text-lg text-secondary-mustard">{actionData.error}</p>
      )}
      {actionData?.errors?.username && (
        <p className="text-center text-lg text-secondary-mustard">{actionData.errors.username}</p>
      )}
      {actionData?.errors?.password && (
        <p className="text-center text-lg text-secondary-mustard">{actionData.errors.password}</p>
      )}
    </div>
  )
}
