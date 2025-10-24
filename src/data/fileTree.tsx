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
              content : "<div> ahmed matter is a Big Software Engineer</div>"
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
