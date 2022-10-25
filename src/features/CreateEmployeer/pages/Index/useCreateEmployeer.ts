import { useAppDispatch, useAppSelector } from '@/app/store'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import { RegistratrationReq } from '@/features/Auth/type'
import { Roles } from '@/shared/enums'
import * as yup from "yup"
import { createEmployeer } from '../../store/actions'

const useCreateEmployeer = () => {
    const { user } = useAppSelector(selectUserProfile)
    const dispatch = useAppDispatch()
    const validationSchema = yup.object().shape({
        email: yup.string().required("Обязательное поле"),
        password: yup.string().required("Обязательное поле"),
    })
    const initialValues: RegistratrationReq = {
        email: "",
        password: "",
        role: ""
    }
    const onSubmit = (editData: RegistratrationReq, { resetForm }: any) => {
        dispatch(createEmployeer(editData)).then(() => {
            resetForm({})
        })
        console.log(editData)
    }

    return { validationSchema, initialValues, onSubmit, sign: user.signature }
}

export default useCreateEmployeer