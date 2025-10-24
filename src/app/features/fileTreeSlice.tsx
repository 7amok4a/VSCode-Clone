import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface ISelectedFile {
    filename : string  , 
    fileContent : string , 
}


interface IInitialState {
    tabsFile : IFile[] , 
    selectedFile : ISelectedFile , 
}

const initialState : IInitialState = {
    tabsFile : [] , 
    selectedFile : {
        filename : "" , 
        fileContent : "" , 
    }
} ; 
const fileTreeSlice = createSlice({
    name : "fileTree" , 
    initialState , 
    reducers : {
        setTabsFile : (state , action : PayloadAction<IFile[]>) => {
            state.tabsFile = action.payload ; 
        }
    }
})

export const {setTabsFile} = fileTreeSlice.actions ; 

export default fileTreeSlice.reducer ; 