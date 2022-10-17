import { ICommonForm } from "@/shared/types"
import { FormControl, FormHelperText, OutlinedInput } from "@mui/material"

interface IInputProps extends ICommonForm {
  type?: string
}
const MyInput = ({
  labelName,
  placeholder = "",
  type = "text",
  name,
  value = "",
  onChange,
  onBlur,
  error = false,
  errorMessage = "",
}: IInputProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <span className="myform__label">{labelName}</span>
      <OutlinedInput
        error={error}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value?.toString()}
        placeholder={placeholder}
        type={type}
        size="small"
      />
      {error && <FormHelperText error={true}>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

export default MyInput
