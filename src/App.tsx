import { useSelector } from "react-redux";
import FileBar from "./components/FileBar"
import ResizablePanel from "./components/ResizablePanel"
import FileComponent from "./components/SVG/FileComponent"
import { fileTree } from "./data/fileTree"
import WelcomeTab from "./components/WelcomeTab";
import type { RootState } from "./app/store";

function App() {
  const { tabsFile } = useSelector(({ tree }: RootState) => tree);
  return (
    <div className="my-5">
        <div className="flex h-screen">
         <ResizablePanel  showLeftPanel leftPanel = {
            <div className="w-64 p-2 "> 
           <FileComponent  fileTree={fileTree}/>
         </div>
         }  rightPanel = {tabsFile.length ? <FileBar /> : <WelcomeTab />}/>
          
        </div>
    </div>
  )
}

export default App
