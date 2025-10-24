import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import CloseIcon from "./SVG/CloseIcon";
import FileExtension from "./SVG/FileExtension";
import {setClickedFile } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
    file : IFile , 

}


const TabsFilesBar = ({file} : IProps) => {
    const dispatch = useDispatch() ; 
    const {selectedFile : {activeTabId}} = useSelector((state : RootState) => state.tree) ; 
    const onClickHandler = () => {
        const {id , name , content} = file ; 
        dispatch(setClickedFile({filename  : name, fileContent : content , activeTabId: id})) ;
    }
    return (

        <div className="flex items-center p-2" onClick={onClickHandler} style={
                {borderTop : file.id === activeTabId ? "1px solid #cf6ccf" : "2px  solid transparent"}}>
            <FileExtension filename= {file.name}/> 
            <span className=""> {file.name}</span>
            <span>
                <CloseIcon />
            </span>
        </div>
    )
}




export default TabsFilesBar ; 
