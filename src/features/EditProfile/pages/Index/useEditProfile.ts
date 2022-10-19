import { useAppDispatch, useAppSelector } from '@/app/store'
import { getProfileInfo } from '@/features/Auth/store/actions'
import { selectUserProfile } from '@/features/Auth/store/selectors'
import * as yup from "yup"
import { editProfile } from '../../store/actions'
import { EditProfileReq } from '../../type'

const useEditProfile = () => {
    const { user } = useAppSelector(selectUserProfile)
    const dispatch = useAppDispatch()
    const validationSchema = yup.object().shape({
        name: yup.string().required("Обязательное поле"),
        surname: yup.string().required("Обязательное поле"),
        phone: yup.string().required("Обязательное поле").matches(/^\+996(\d{9})$/, 'Заполните по форме +996xxxxxx '),
    })
    const initialValues: EditProfileReq = {
        name: user.name || "",
        surname: user.surname || "",
        patronymic: user.patronymic || "",
        phone: user.phone || "+996",
        sign: user.signature ? false : true
    }
    const onSubmit = (editData: EditProfileReq) => {
        dispatch(editProfile(editData)).then(() => {
            dispatch(getProfileInfo())
        })
    }

    return { validationSchema, initialValues, onSubmit, sign: user.signature }
}

export default useEditProfile