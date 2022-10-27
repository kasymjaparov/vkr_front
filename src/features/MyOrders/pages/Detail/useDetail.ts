import { useAppDispatch, useAppSelector } from '@/app/store'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import { Roles, StatusResponse } from '@/shared/enums'
import { SelectChangeEvent } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { appoint, deleteOrder, getById, getUsers, handleOrder } from '../../store/actions'
import { selectOrder, selectUsers } from '../../store/selectors'

const useDetail = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const { user } = useAppSelector(selectUserProfile)
    const { data, status } = useAppSelector(selectOrder)
    const { data: users, status: usersStatus } = useAppSelector(selectUsers)
    const [personIds, setPersonIds] = useState<string[]>([])
    const [imageModal, setImageModal] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [reason, setReason] = useState("")
    const [measureDate, setMeasureDate] = useState("")
    const [type, setType] = useState('Капитальный');
    const role = user.role
    const isLoading = status === StatusResponse.LOADING || usersStatus === StatusResponse.LOADING
    const employeers = data.users ? data.users.filter((item) => {
        return item.role !== Roles.CLIENT
    }) : []
    const handleImageModalClick = (url: string) => {
        setImageModal(true)
        setImageUrl(url)
    }
    const handleType = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    const handleMeasureDate = (value: string) => {
        setMeasureDate(value);
    };
    const handleChange = (event: SelectChangeEvent<typeof personIds>) => {
        const {
            target: { value },
        } = event
        setPersonIds(
            typeof value === "string" ? value.split(",") : value
        )
    }
    const onDeleteOrder = () => {
        dispatch(deleteOrder(data.id as unknown as string)).then(() => {
            navigate("/myOrders")
        })
    }
    const onSendMeasureDate = () => {
        console.log(measureDate)
    }
    const onHandleOrder = (type: string) => {
        dispatch(handleOrder({ type: type, id: id as string, reason })).then(() => {
            dispatch(getById(id as string))
            window.scrollTo(0, 0)
        })
    }
    const onAppointEmployeers = () => {
        dispatch(appoint({ users: personIds, order: data.id as unknown as string, type })).then(() => {
            dispatch(getById(id as string))
            window.scrollTo(0, 0)
        })
    }
    const handleReason = (value: string) => {
        setReason(value)
    }
    useEffect(() => {
        if (role === Roles.PM) {
            dispatch(getUsers())
        }
        dispatch(getById(id as string))
    }, [])
    return { isLoading, handleType, type, employeers, onAppointEmployeers, handleReason, reason, data, users, onSendMeasureDate, measureDate, handleMeasureDate, handleImageModalClick, onHandleOrder, imageUrl, imageModal, setImageModal, onDeleteOrder, role, personIds, handleChange }
}

export default useDetail