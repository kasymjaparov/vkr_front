import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"
import React from "react"
import { useNavigate } from "react-router"
import { registration } from "../../store/actions"
import { selectRegistration } from "../../store/selectors"
import { RegistratrationReq } from "../../type"

const useRegistration = () => {
    const [data, setData] = React.useState<RegistratrationReq>({ email: "", password: "", role: "0" })
    const [showPassword, setShowPassword] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const registrationState = useAppSelector(selectRegistration)
    const isError: boolean = registrationState.status === StatusResponse.ERROR
    const isSuccess: boolean = registrationState.status === StatusResponse.SUCCESS
    const isLoading: boolean = registrationState.status === StatusResponse.LOADING
    const handleSubmit = () => {
        dispatch(registration(data))
        setData({ email: "", password: "", role: "0" })
    }
    const handleKeyPress = (key: string) => {
        if (key === "Enter") handleSubmit()
    }
    React.useEffect(() => {
        if (isSuccess) {
            navigate("/auth/login/")
        }
    }, [isSuccess])
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }
    return { isLoading, handleSubmit, handleClickShowPassword, handleMouseDownPassword, showPassword, handleKeyPress, data, setData, isError }
}
export default useRegistration
