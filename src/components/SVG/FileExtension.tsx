import FileIcon from "./FileIcon";
import IconImage from "./IconImage";

interface IProps {
    filename : string , 
    isFolder ?: boolean , 
    isOpen ?: boolean ,  
}

const extensionPath : Record <string , string>= {
    "tsx" : "/icons/react_ts",  
    "jsx" : "/icons/react" , 
    "js" : "/icons/javascript" , 
    "html" : "/icons/html" , 


    "node_modules" : "/icons/folder-node" , 
    "public" : "/icons/folder-public" , 
    "components" : "/icons/folder-components" , 
    "src" : "/icons/folder-src" ,  
 }

const FileExtension = ({filename , isFolder , isOpen} : IProps) => {
    const extension = filename.split('.').pop() ; 
    if (extension && Object.prototype.hasOwnProperty.call(extensionPath , extension)) {
        const iconPath = isFolder ? isOpen ? `${extensionPath[extension]}-open.svg`
                                : `${extensionPath[extension]}.svg` 
                                : `${extensionPath[extension]}.svg`  ; 
        return <IconImage src = {iconPath} />
    } 
    if (isFolder) 
        return isOpen? (<IconImage src="/icons/folder-default-open.svg"/>) :
            (<IconImage src="/icons/folder-default.svg"/>) ;  
    return <FileIcon />
}


export default FileExtension ; 


