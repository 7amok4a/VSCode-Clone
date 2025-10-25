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
              isFolder : false , 
              content : `var x = 0 ; 
var y = 1 ; 
for (int i = 0 ; i < 23 ; ++i) {
      x += 3 , y += 4 ; 
}`
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
              content : `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Basic HTML + JS</title>
</head>
<body>
  <h1>Hello — HTML + JS</h1>
  <p id="message">Click the button to change this text.</p>
  <button id="btn">Click me</button>

  <!-- Link to plain JS file -->
  <script src="script.js"></script>
</body>
</html>
`
            },
          ],
        },
      ],
    },
  ],
};
