import { useAdminDashboard } from "./useAdminDashboard"

interface ITooltipProp {
  name: string
}
export const MyCustomTooltip: React.FC<ITooltipProp> = ({ name }) => {
  const { logoutBtn } = useAdminDashboard()
  return (
    <div className="myAppBar__links__profile__tooltip">
      <div className="myAppBar__links__profile__tooltip__header">
        <h5>{name}</h5>
      </div>
      <div className="myAppBar__links__profile__tooltip__body">
        <div className="myAppBar__links__profile__tooltip__body__links">
          {/* <div className="myAppBar__links__profile__tooltip__body__links__item">
            <div className="myAppBar__links__profile__tooltip__body__links__item__icon fa-solid fa-outdent" />
            <div className="myAppBar__links__profile__tooltip__body__links__item__text">
              Изменить пароль
            </div>
          </div> */}
          <div
            onClick={logoutBtn}
            className="myAppBar__links__profile__tooltip__body__links__item"
          >
            <div className="myAppBar__links__profile__tooltip__body__links__item__icon fa-solid fa-right-from-bracket" />
            <div className="myAppBar__links__profile__tooltip__body__links__item__text">
              Выйти
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
