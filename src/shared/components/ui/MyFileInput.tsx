import { ICommonForm } from "@/shared/types"
import { Button, FormControl, FormHelperText } from "@mui/material"
import React from "react"

interface IFileInput extends ICommonForm {
  multiple: boolean
  buttonLabel?: string
  accept?: string
  setFieldTouched: (field: string) => void
}
const MyFileInput: React.FC<IFileInput> = ({
  setFieldTouched,
  error = false,
  errorMessage = "",
  name,
  onChange,
  labelName,
  multiple = false,
  buttonLabel = labelName,
  accept = "image/*",
}) => {
  let random = Math.random() * 1000
  return (
    <FormControl>
      <span className="myform__label">{labelName}</span>
      <input
        name={name}
        onChange={onChange}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        id={random + " btn"}
        multiple={multiple}
      />
      <label htmlFor={random + " btn"}>
        <Button
          fullWidth
          sx={{ marginTop: "3px" }}
          variant="outlined"
          component="span"
          onBlur={() => setFieldTouched(name)}
        >
          {buttonLabel}
        </Button>
      </label>
      {error && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

export default MyFileInput
