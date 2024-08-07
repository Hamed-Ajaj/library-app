import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
            Please Login to continue with this action!
        </AlertDescription>
    </Alert>
  )
}
