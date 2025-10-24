import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface ISelectedFile {
    activeTabId : string | null , 
    filename : string  , 
    fileContent : string | undefined, 
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
        activeTabId : null , 
    },

} ; 
const fileTreeSlice = createSlice({
    name : "fileTree" , 
    initialState , 
    reducers : {
        setTabsFile : (state , action : PayloadAction<IFile[]>) => {
            state.tabsFile = action.payload ; 
        } , 
        setClickedFile : (state , action : PayloadAction<ISelectedFile>) => {
            state.selectedFile.filename = action.payload.filename ; 
            state.selectedFile.fileContent = action.payload.fileContent ;   
            state.selectedFile.activeTabId = action.payload.activeTabId
        } , 
    }
})

export const {setTabsFile , setClickedFile } = fileTreeSlice.actions ; 

export default fileTreeSlice.reducer ; 