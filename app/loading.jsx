
import { Progress } from "@/components/ui/progress"

const loading = () => {
  return (
    <div className="p-20 mt-10">
      <Progress value={33} />
    </div>
  )
}

export default loading
