import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"
import React from "react"
import { useNavigate } from "react-router"
import { login, registration } from "../../store/actions"
import { selectLogin, selectRegistration, selectUserProfile } from "../../store/selectors"
import { LoginReq } from "../../type"

const useLogin = () => {
    const [data, setData] = React.useState<LoginReq>({ email: "", password: "" })
    const [showPassword, setShowPassword] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const loginState = useAppSelector(selectLogin)
    const { status: selectProfileState } = useAppSelector(selectUserProfile)
    const isError: boolean = loginState.status === StatusResponse.ERROR
    const isSuccess: boolean = loginState.status === StatusResponse.SUCCESS
    const isLoading: boolean = loginState.status === StatusResponse.LOADING || selectProfileState === StatusResponse.LOADING
    const handleSubmit = () => {
        dispatch(login(data))
        setData({ email: "", password: "" })
    }
    const handleKeyPress = (key: string) => {
        if (key === "Enter") handleSubmit()
    }
    React.useEffect(() => {
        if (isSuccess) {
            navigate("/")
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
export default useLogin
