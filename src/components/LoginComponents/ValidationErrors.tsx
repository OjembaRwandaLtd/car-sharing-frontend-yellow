import { LoginActionData } from '../../util/types'

interface ValidationErrorsProps {
  actionData: LoginActionData
}

export default function ValidationErrors({ actionData }: ValidationErrorsProps) {
  const sharedStyles = 'text-lg text-red-400'
  return (
    <div className="text-center">
      {actionData?.authError && <p className={sharedStyles}>{actionData.authError}</p>}
      {actionData?.inputErrors?.username && (
        <p className={sharedStyles}>{actionData.inputErrors.username}</p>
      )}
      {actionData?.inputErrors?.password && (
        <p className={sharedStyles}>{actionData.inputErrors.password}</p>
      )}
    </div>
  )
}
