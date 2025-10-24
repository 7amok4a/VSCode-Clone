import type { IFile } from "../interfaces";

export const fileTree : IFile = {
    name : "VScode-clone" ,
    isFolder : true , 
    children : [
        {
            name : "node_modules", 
            isFolder :   true , 
            children : [
                {
                    name : '.vite' , 
                    isFolder : true , 
                    children : [
                        {
                            name : "react.js" , 
                            isFolder : false , 
                        }
                    ]
                } , 
            ]
        } , 
        {
            name : "public" , 
            isFolder : true , 
            children : [
                {
                    name : "index.html" , 
                    isFolder : false,  
                } ,
            ]
        } , 
        {
            name : "src" , 
            isFolder : true , 
            children : [
                {
                    name : "components" , 
                    isFolder : true , 
                    children : [
                       {
                         name : "Buttom.tsx" , 
                         isFolder : false , 
                       } , {
                            name : "index", 
                            isFolder : false , 
                       }
                        
                    ]
                } , 
            ]
        }
    ] , 

} ; 