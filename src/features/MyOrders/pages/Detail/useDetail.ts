import { useAppDispatch, useAppSelector } from '@/app/store'
import { StatusResponse } from '@/shared/enums'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { deleteOrder, getById } from '../../store/actions'
import { selectOrder } from '../../store/selectors'

const useDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { data, status } = useAppSelector(selectOrder)
    const isLoading = status === StatusResponse.LOADING
    const [imageModal, setImageModal] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const handleImageModalClick = (url: string) => {
        setImageModal(true)
        setImageUrl(url)
    }
    const onDeleteOrder = () => {
        dispatch(deleteOrder(data.id as unknown as string)).then(() => {
            navigate("/myOrders")
        })
    }
    useEffect(() => {
        dispatch(getById(id as string))
    }, [])
    return { isLoading, data, handleImageModalClick, imageUrl, imageModal, setImageModal, onDeleteOrder }
}

export default useDetail