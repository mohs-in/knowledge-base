import ExcalidrawViewer from "./ExcalidrawViewer"

interface ExcalidrawProps {
  file: string
}

export default function Excalidraw({ file }: ExcalidrawProps) {
  return <ExcalidrawViewer src={file} />
}
