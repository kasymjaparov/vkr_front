import React from "react"
import {
  MyCheckbox,
  MyFileInput,
  MyInput,
  MyTextArea,
} from "@shared/components/ui"
import { Box, Button, Paper, Stack } from "@mui/material"
import { Formik } from "formik"
import useEditProfile from "./useEditProfile"

const EditProfile = () => {
  const { validationSchema, initialValues, onSubmit, sign } = useEditProfile()
  return (
    <div>
      <div className="pages-title">Изменить данные</div>
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          isValid,
          handleSubmit,
          resetForm,
          setFieldTouched,
          dirty,
        }) => (
          <>
            <Paper
              sx={{
                padding: 2,
                marginTop: "16px",
                maxWidth: "50%",
                "@media(max-width:968px)": {
                  maxWidth: "100%",
                },
              }}
            >
              <Stack spacing={2} direction="column">
                <MyInput
                  labelName="Имя"
                  name="name"
                  placeholder="Имя"
                  error={touched.name && !!errors.name}
                  errorMessage={errors.name}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <MyInput
                  labelName="Фамилия"
                  name="surname"
                  placeholder="Фамилия"
                  error={touched.surname && !!errors.surname}
                  errorMessage={errors.surname}
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <MyInput
                  labelName="Отчество"
                  name="patronymic"
                  placeholder="Отчество"
                  error={touched.patronymic && !!errors.patronymic}
                  errorMessage={errors.patronymic}
                  value={values.patronymic}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <MyInput
                  labelName="Номер телефона"
                  name="phone"
                  placeholder="Номер телефона"
                  error={touched.phone && !!errors.phone}
                  errorMessage={errors.phone}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!sign ? (
                  <MyCheckbox
                    onChange={handleChange}
                    onBlur={handleBlur}
                    valueCheckBox={values.sign}
                    name="sign"
                    labelName="Разрешение на подпись"
                    error={touched.sign && !!errors.sign}
                    errorMessage={errors.sign}
                  />
                ) : (
                  <span>Ваша подпись присутствует</span>
                )}

                <Button
                  variant="contained"
                  type="button"
                  onClick={
                    handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
                  }
                >
                  Отправить
                </Button>
              </Stack>
            </Paper>
          </>
        )}
      </Formik>
    </div>
  )
}

export default EditProfile
