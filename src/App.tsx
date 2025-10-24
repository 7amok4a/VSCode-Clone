import FileComponent from "./components/SVG/FileComponent"
import { fileTree } from "./data/fileTree"

function App() {

  return (
    <div className="my-5">
        <FileComponent  fileTree={fileTree}/>
    </div>
  )
}

export default App
