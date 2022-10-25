import React from "react"
import {
  MyCheckbox,
  MyFileInput,
  MyInput,
  MySelect,
  MyTextArea,
} from "@shared/components/ui"
import { Box, Button, Paper, Stack } from "@mui/material"
import { Formik } from "formik"
import useCreateEmployeer from "./useCreateEmployeer"
import { Roles } from "@/shared/enums"

const EditProfile = () => {
  const { validationSchema, initialValues, onSubmit, sign } =
    useCreateEmployeer()
  return (
    <div>
      <div className="pages-title">Создать сотрудника</div>
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
                  labelName="Почта"
                  name="email"
                  placeholder="Почта"
                  error={touched.email && !!errors.email}
                  errorMessage={errors.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <MyInput
                  labelName="Пароль"
                  name="password"
                  placeholder="Пароль"
                  error={touched.password && !!errors.password}
                  errorMessage={errors.password}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <MySelect
                  items={[
                    { text: "Строитель", value: Roles.BUILDER.toString() },
                    { text: "ДДВ", value: Roles.DDV.toString() },
                    { text: "Замерщик", value: Roles.MEASURE.toString() },
                  ]}
                  onBlur={handleBlur}
                  name="role"
                  onChange={handleChange}
                  labelName="Роль"
                  defaultValue={"0"}
                />
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
