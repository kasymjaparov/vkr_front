import { useAppSelector } from '@/app/store'
import React from 'react'
import * as yup from "yup"
import { selectUserProfile } from '../../store/selectors'

const useCreateOrder = () => {
    const { user } = useAppSelector(selectUserProfile)
    const canCreateOrder = user.name && user.surname && user.signature



    return { canCreateOrder }
}

export default useCreateOrder