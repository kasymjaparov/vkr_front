import { useAppSelector } from "@/app/store"
import { selectUserRole } from "@/features/Auth/store/selectors"

/**
 *Мидлвейр-роут для защищенных роутов
 *@children элемент, который нужно обвернуть
 *@roles массив, с ролями для определенных юзеров
 */
const RequiredAuth = ({
  children,
  roles,
}: {
  children: React.ReactNode
  roles: number[]
}) => {
  const token: string | null = window.localStorage.getItem("token")
  const role = useAppSelector(selectUserRole) // нынешняя роль юзера
  const userHasRequiredRole = roles.includes(role) // проверка юзера на данную роль для доступа
  if (token && role && !userHasRequiredRole) return <h2> Доступ запрещен </h2>
  else return children as JSX.Element
}
export default RequiredAuth
