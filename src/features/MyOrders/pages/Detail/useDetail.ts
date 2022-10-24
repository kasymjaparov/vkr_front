import { useAppDispatch, useAppSelector } from '@/app/store'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import { StatusResponse } from '@/shared/enums'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { deleteOrder, getById, handleOrder } from '../../store/actions'
import { selectOrder } from '../../store/selectors'

const useDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(selectUserProfile)
    const role = user.role
    const { data, status } = useAppSelector(selectOrder)
    const isLoading = status === StatusResponse.LOADING
    const [imageModal, setImageModal] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [reason, setReason] = useState("")
    const handleImageModalClick = (url: string) => {
        setImageModal(true)
        setImageUrl(url)
    }
    const onDeleteOrder = () => {
        dispatch(deleteOrder(data.id as unknown as string)).then(() => {
            navigate("/myOrders")
        })
    }
    const onHandleOrder = (type: string) => {
        dispatch(handleOrder({ type: type, id: id as string, reason })).then(() => {
            dispatch(getById(id as string))
            window.scrollTo(0, 0)
        })
    }
    const handleReason = (value: string) => {
        setReason(value)
    }
    useEffect(() => {
        dispatch(getById(id as string))
    }, [])
    return { isLoading, handleReason, reason, data, handleImageModalClick, onHandleOrder, imageUrl, imageModal, setImageModal, onDeleteOrder, role }
}

export default useDetail