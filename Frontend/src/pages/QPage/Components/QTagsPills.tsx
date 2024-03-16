import { Badge } from "@/components/ui/badge"

export default function QTagsPills({tag}:{tag:string}) {
  return (
    <Badge variant="outline" >
        {tag}
    </Badge>
  )
}
