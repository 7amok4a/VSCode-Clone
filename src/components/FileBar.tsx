import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import TabsFilesBar from "./TabsFilesBar";

// interface IProps {

// }; 


const FileBar = (/*{} : IProps*/) => {
    const {tabsFile ,selectedFile} = useSelector((state : RootState) => state.tree) ; 
    return (
        <div>
            <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
                {tabsFile.map((file) => <TabsFilesBar  file = {file} key={file.id}/>)}
            </div>
            {selectedFile.fileContent}
        </div>
    )
} ; 


export default FileBar ; 