import { IconButton } from "@mui/material"
interface IFileIconProp {
  icon: any
  url: string
  handleClick: (url: string) => void
}
const FileIcon: React.FC<IFileIconProp> = ({ icon, handleClick, url }) => {
  return (
    <IconButton
      onClick={() => handleClick(url)}
      sx={{ borderRadius: "6px", width: "66px", heigth: "66px" }}
      size="medium"
    >
      {icon}
    </IconButton>
  )
}

export default FileIcon
