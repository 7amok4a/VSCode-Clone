import { useState } from "react";
import type { IFile } from "../../interfaces";
import RightArrowIcon from "./RightArrowIcon";
import BottomArrowIcon from "./Bottom";
import FileExtension from "./FileExtension";
import { useDispatch, useSelector } from "react-redux";
import { setTabsFile } from "../../app/features/fileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps {
   fileTree : IFile , 
}


const FileComponent = ({fileTree} : IProps) => {
    // Recursive 
    const { name , isFolder , children} = fileTree ; 
    const dispatch = useDispatch() ; 
    const {tabsFile} = useSelector((state : RootState) => state.tree)
    const [isOpen , setIsOpen] = useState<boolean>(false) ; 
    const toggle =  () => setIsOpen(prev => !prev) ; 
    return (
        <div className="mb-2 ml-2">
            <div className="flex items-center mb-2 cursor-pointer"> 
                {
                    isFolder? (
                        <div onClick={toggle} className="flex items-center">
                          {isOpen ? <BottomArrowIcon /> : <RightArrowIcon/> }  
                            <FileExtension filename= {name} isFolder = {isFolder} isOpen = {isOpen}/>
                            <span className="ml-2"> {name}</span> 
                        </div>
                    ) : 
                    (
                        <div className="flex items-center mr-2" onClick={() => dispatch(setTabsFile([...tabsFile  , fileTree]))} >
                            <FileExtension filename= {name}/>
                        <span className="ml-2"> {name}</span> 
                        </div>
                    )
                }
            </div>
       
            {
                isOpen && children && children.map((file , idx) => {
                return (
                    <FileComponent fileTree={file} key={idx} />
                )  ; 
                })
            }
        </div>
    ) ; 
}



export default FileComponent ; 