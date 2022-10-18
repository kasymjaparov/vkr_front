import { Button, Typography } from "@mui/material"
import React from "react"
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import useCreateOrder from "./useCreateOrder"

const CreateOrder = () => {
  const navigate = useNavigate()
  const { canCreateOrder } = useCreateOrder()
  return (
    <div>
      <div className="pages-title">Подать заявку</div>
      {!canCreateOrder ? (
        <div>
          <Typography sx={{ marginTop: "16px" }}>
            Заполните свои личные данные и оставьте подпись, чтобы
            создать заявку
          </Typography>
          <Button
            sx={{ marginTop: "16px" }}
            variant="contained"
            onClick={() => navigate("/editProfile")}
          >
            Перейти
          </Button>
        </div>
      ) : (
        <div>fsdfs</div>
      )}
    </div>
  )
}

export default CreateOrder
