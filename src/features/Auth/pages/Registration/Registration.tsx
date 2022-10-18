import { InputAdornment, TextField, Button, IconButton } from "@mui/material"
import React from "react"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import useRegistration from "./useRegistration"

const Registartion = () => {
  const {
    handleSubmit,
    data,
    setData,
    handleKeyPress,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  } = useRegistration()
  return (
    <form className="login">
      <div className="login__block">
        <div className="login__block__form">
          <h1 className="login__block__form_title">Регистрация</h1>
          <TextField
            value={data.email}
            onKeyUp={(e: React.KeyboardEvent<HTMLElement>) =>
              handleKeyPress(e.key)
            }
            onChange={e => setData({ ...data, email: e.target.value })}
            placeholder="Почта"
            sx={{ width: "100%", mb: "10px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fa-solid fa-user" />
                </InputAdornment>
              ),
            }}
            name="login"
            variant="outlined"
          />
          <TextField
            type={showPassword ? "text" : "password"}
            value={data.password}
            onKeyUp={(e: React.KeyboardEvent<HTMLElement>) =>
              handleKeyPress(e.key)
            }
            autoComplete="on"
            onChange={e => setData({ ...data, password: e.target.value })}
            sx={{ width: "100%", mb: "10px" }}
            placeholder="Пароль"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fa-solid fa-lock" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button
            onClick={() => handleSubmit()}
            color="secondary"
            variant="contained"
            fullWidth
            disabled={!!(!data.password.length || !data.email.length)}
          >
            Отправить
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Registartion
