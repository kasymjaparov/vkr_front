import { useAppDispatch, useAppSelector } from '@/app/store'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import * as yup from "yup"
import { createOrder } from '../../store/actions'
import { CreateOrderReq } from '../../type'

const useCreateOrder = () => {
    const { user } = useAppSelector(selectUserProfile)
    const canCreateOrder = user.name && user.surname && user.signature
    const dispatch = useAppDispatch()
    const validationSchema = yup.object().shape({
        address: yup.string().required("Обязательное поле"),
        series: yup.string().required("Обязательное поле"),
        amount_room: yup.string().required("Обязательное поле"),
        images: yup.mixed().required("Обязательное поле"),
        rooms: yup.array().of(
            yup.object().shape({
                name: yup.string().required("Обязательное поле"),
                description: yup.string().required("Обязательное поле"),
            })
        ),
    })
    const initialValues: CreateOrderReq = {
        address: "",
        series: "",
        amount_room: "",
        rooms: [{ name: "", description: "" }],
        images: ""
    }
    const onSubmit = (createData: CreateOrderReq) => {
        const formData = new FormData()
        formData.append("address", createData.address)
        formData.append("series", createData.series)
        formData.append("amount_room", createData.amount_room)
        formData.append("images", createData.images)
        formData.append("rooms", JSON.stringify(createData.rooms))
        dispatch(createOrder(formData))
    }

    return { validationSchema, initialValues, onSubmit, canCreateOrder }

}

export default useCreateOrder