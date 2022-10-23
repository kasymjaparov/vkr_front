import { useAppDispatch, useAppSelector } from '@/app/store'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import { useNavigate } from 'react-router'
import * as yup from "yup"
import { createOrder } from '../../store/actions'
import { CreateOrderReq } from '../../type'

const useCreateOrder = () => {
    const navigate = useNavigate()
    const { user } = useAppSelector(selectUserProfile)
    const canCreateOrder = user.name && user.surname && user.signature
    const dispatch = useAppDispatch()
    const validationSchema = yup.object().shape({
        address: yup.string().required("Обязательное поле"),
        series: yup.string().required("Обязательное поле"),
        amount_room: yup.string().required("Обязательное поле"),
        images: yup.mixed().required("Обязательное поле").test('BIG SIZE', "Размер всех файлов превышает 10 мб", (value) => {
            if (!value) {
                return false
            }
            const mb = 1024 * 1024
            let files: File[] = Array.from(value)
            let filesSize = 0
            for (let i = 0; i < files.length; i++) {
                filesSize += files[i].size
            }
            if (filesSize <= 10 * mb) {
                return true
            }
            return false
        }).test('Amount images', "Должно быть больше одной картинки", (value) => {
            if (!value) {
                return false
            }
            let files: File[] = Array.from(value)
            if (files.length >= 2) {
                return true
            }
            return false
        })
        ,
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
        Object.keys(createData.images).forEach(key => {
            formData.append("images", createData.images.item(key))
        })
        formData.append("address", createData.address)
        formData.append("series", createData.series)
        formData.append("amount_room", createData.amount_room)
        formData.append("images", createData.images)
        formData.append("rooms", JSON.stringify(createData.rooms))
        dispatch(createOrder(formData)).then(() => {
            navigate("/myOrders")
        })
    }

    return { validationSchema, initialValues, onSubmit, canCreateOrder }

}

export default useCreateOrder