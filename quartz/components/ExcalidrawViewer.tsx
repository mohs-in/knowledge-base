import { useEffect, useState } from "react"
import { Excalidraw } from "@excalidraw/excalidraw"

interface ExcalidrawViewerProps {
  src: string
}

export default function ExcalidrawViewer({ src }: ExcalidrawViewerProps) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [src])

  if (!data) return <div>Loading drawing...</div>

  return (
    <div style={{ height: "600px", border: "1px solid #ddd" }}>
      <Excalidraw initialData={data} viewModeEnabled={true} />
    </div>
  )
}
