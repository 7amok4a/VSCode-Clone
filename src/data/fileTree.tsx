import { v4 as uuid } from "uuid";
import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id : uuid() , 
          name : ".vite" , 
          isFolder : true , 
          children : [
            {
              id : uuid() , 
              name : "index.js" , 
              isFolder : false 
            }
          ]

        }
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content : `import FileBar from "./components/FileBar"
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
`
            },
            {
              id: uuid(),
              name: "index.html",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
