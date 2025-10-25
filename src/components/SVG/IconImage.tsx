interface IProps {
    src : string , 
    className?: string;
}

const IconImage = ({src , className = "w-9 h-w-9"} : IProps) => {
    return <img  src = {src}  className={className}/>
}




export default IconImage ; 