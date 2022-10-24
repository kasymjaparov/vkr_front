import { useAppDispatch, useAppSelector } from '@/app/store'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import { Roles, StatusResponse } from '@/shared/enums'
import { useEffect } from 'react'
import { getAllOrders, getMyOrders } from '../../store/actions'
import { selectMyOrders } from '../../store/selectors'

const useMyOrders = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(selectUserProfile)
    const tableHeaders = user.role === Roles.CLIENT ? ["Id", "Адрес", "Количество комнат", "Статус", "Дата", ""] : ["Id", "Заказчик", "Адрес", "Количество комнат", "Статус", "Дата", ""]
    const { list, status } = useAppSelector(selectMyOrders)
    const isLoading = status === StatusResponse.LOADING
    const isSuccess = status === StatusResponse.SUCCESS
    const isError = status === StatusResponse.ERROR

    useEffect(() => {
        if (user.role === Roles.PM) {
            dispatch(getAllOrders())
        }
        else {
            dispatch(getMyOrders())

        }
    }, [])

    return { list, isLoading, isError, isSuccess, tableHeaders, role: user.role }

}

export default useMyOrders