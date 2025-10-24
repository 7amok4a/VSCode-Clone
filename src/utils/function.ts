import type { IFile } from "../interfaces";

export const ifFileExit = (arr : IFile[] , id : string)=> {
    return  arr.some(file =>  file.id === id)  ; 
}