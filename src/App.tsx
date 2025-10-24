import FileBar from "./components/FileBar"
import FileComponent from "./components/SVG/FileComponent"
import { fileTree } from "./data/fileTree"

function App() {

  return (
    <div className="my-5">
        <div className="flex h-screen">
         <div className="w-64 border-r border-white"> 
           <FileComponent  fileTree={fileTree}/>
         </div>
          <FileBar />
        </div>
    </div>
  )
}

export default App
