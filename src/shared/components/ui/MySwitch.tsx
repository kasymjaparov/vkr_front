import React from "react"
import { FormControl, Switch } from "@mui/material"

interface ISwitch {
  labelName: string
  value: boolean
  handleChange: () => void
}
const MySwitch: React.FC<ISwitch> = ({ labelName, value, handleChange }) => {
  return (
    <FormControl>
      <span className="myform__label">{labelName}</span>
      <Switch
        checked={value}
        onChange={handleChange}
      />
    </FormControl>
  )
}

export default MySwitch
