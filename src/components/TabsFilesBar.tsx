import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import CloseIcon from "./SVG/CloseIcon";
import FileExtension from "./SVG/FileExtension";
import {setClickedFile, setTabsFile } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
    file : IFile , 

}


const TabsFilesBar = ({file} : IProps) => {
    const dispatch = useDispatch() ; 
    const {selectedFile : {activeTabId} , tabsFile} = useSelector((state : RootState) => state.tree) ; 
    const onClickHandler = () => {
        const {id , name , content} = file ; 
        dispatch(setClickedFile({filename  : name, fileContent : content , activeTabId: id})) ;
    }
    const onRemove = (id : string) => {
        const filterFiles = tabsFile.filter((file) => file.id !== id) ;
        const lastTab = filterFiles[filterFiles.length - 1 ] ; 
        if (!lastTab) {
                dispatch(setTabsFile([])) ;
                  dispatch(setClickedFile({activeTabId : null , fileContent : "" , filename : ""})) ; 
                return ; 
        }
           
        dispatch(setTabsFile(filterFiles)) ; 
        dispatch(setClickedFile({activeTabId : lastTab.id , fileContent : lastTab.content , filename : lastTab.name})) ; 

    }
    return (

        <div className="flex items-center p-2" onClick={onClickHandler} style={
                {borderTop : file.id === activeTabId ? "1px solid #cf6ccf" : "2px  solid transparent"}}>
            <FileExtension filename= {file.name}/> 
            <span className=""> {file.name}</span>
            <span className="cursor-pointer hover:bg-[#64646473] 
                    duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md" 
                onClick={(e) =>{e.stopPropagation();  onRemove(file.id);}}>
                <CloseIcon />
            </span>
        </div>
    )
}




export default TabsFilesBar ; 
