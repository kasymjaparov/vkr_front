import { useAppDispatch, useAppSelector } from '@/app/store'
import { StatusResponse } from '@/shared/enums'
import { useEffect } from 'react'
import { getMyOrders } from '../../store/actions'
import { selectMyOrders } from '../../store/selectors'

const useMyOrders = () => {
    const dispatch = useAppDispatch()
    const tableHeaders = ["Id", "Заказчик", "Адрес", "Количество комнат", "Статус", "Дата", ""]
    const { list, status } = useAppSelector(selectMyOrders)
    const isLoading = status === StatusResponse.LOADING
    const isSuccess = status === StatusResponse.SUCCESS
    const isError = status === StatusResponse.ERROR

    useEffect(() => {
        dispatch(getMyOrders())
    }, [])

    return { list, isLoading, isError, isSuccess, tableHeaders }

}

export default useMyOrders