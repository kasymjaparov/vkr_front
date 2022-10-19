import { Button, Paper, Stack, Typography } from "@mui/material"
import React from "react"
import { TextField } from "formik-mui"
import { useNavigate } from "react-router-dom"
import useCreateOrder from "./useCreateOrder"
import { Formik, Field, FieldArray } from "formik"
import {
  FileIcon,
  MyFileInput,
  MyInput,
  MySelect,
} from "@/shared/components/ui"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import { ImageModal } from "@/shared/components/shared"

const CreateOrder = () => {
  const navigate = useNavigate()
  const { canCreateOrder, validationSchema, initialValues, onSubmit } =
    useCreateOrder()
  const [imageModal, setImageModal] = React.useState(false)
  const [imageUrl, setImageUrl] = React.useState("")
  const handleImageModalClick = (url: string) => {
    setImageModal(true)
    setImageUrl(url)
  }

  return (
    <div>
      <div className="pages-title">Подать заявку</div>
      {!canCreateOrder ? (
        <div>
          <Typography sx={{ marginTop: "16px" }}>
            Заполните свои личные данные и оставьте подпись, чтобы создать
            заявку
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
        <>
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
              isValid,
              handleSubmit,
              setFieldValue,
              dirty,
              setFieldTouched,
            }) => (
              <Paper
                sx={{
                  padding: 2,
                  marginTop: "16px",
                  maxWidth: "70%",
                  "@media(max-width:968px)": {
                    maxWidth: "100%",
                  },
                }}
              >
                <ImageModal
                  open={imageModal}
                  url={imageUrl}
                  onClose={() => setImageModal(false)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />

                <Stack spacing={2}>
                  <MyInput
                    labelName="Адрес"
                    name="address"
                    placeholder="Адрес"
                    error={touched.address && !!errors.address}
                    errorMessage={errors.address}
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MySelect
                    defaultValue={"105"}
                    showNothing={false}
                    items={[
                      { text: "1", value: "1" },
                      { text: "2", value: "2" },
                      { text: "3", value: "3" },
                      { text: "4", value: "4" },
                      { text: "5", value: "5" },
                      {
                        text: "6",
                        value: "6",
                      },
                    ]}
                    labelName="Количество комнат"
                    name="amount_room"
                    placeholder=""
                    error={touched.amount_room && !!errors.amount_room}
                    errorMessage={errors.amount_room}
                    value={values.amount_room}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <MySelect
                    defaultValue={"105"}
                    showNothing={false}
                    items={[
                      { text: "105", value: "105" },
                      { text: "106", value: "106" },
                      { text: "104", value: "104" },
                      { text: "104 улучшенная", value: "104 улучшенная" },
                      { text: "Сталинка", value: "Сталинка" },
                      {
                        text: "Индивидуальный проект",
                        value: "Индивидуальный проект",
                      },
                    ]}
                    labelName="Серия"
                    name="series"
                    placeholder=""
                    error={touched.series && !!errors.series}
                    errorMessage={errors.series}
                    value={values.series}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FieldArray name="rooms">
                    {({ push, remove }) => {
                      return (
                        <div className="rooms_subform">
                          {values.rooms.map((_: any, index: number) => (
                            <div key={index}>
                              <Typography sx={{ marginY: "10px" }}>
                                {index > 0 ? "Доп комнаты" : "Комнаты"}
                              </Typography>
                              {index > 0 && (
                                <Button
                                  color="error"
                                  size="small"
                                  variant="contained"
                                  sx={{ marginBottom: "10px" }}
                                  onClick={() => remove(index)}
                                >
                                  Удалить эту комнату
                                </Button>
                              )}
                              <Stack spacing={2}>
                                <Field
                                  size="small"
                                  fullWidth
                                  label="Название"
                                  component={TextField}
                                  name={`rooms[${index}].name`}
                                />
                                <Field
                                  size="small"
                                  fullWidth
                                  label="Описание"
                                  component={TextField}
                                  name={`rooms[${index}].description`}
                                />
                              </Stack>
                            </div>
                          ))}
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ marginTop: "10px" }}
                            onClick={() => push({ name: "", description: "" })}
                          >
                            Добавить комнату
                          </Button>
                        </div>
                      )
                    }}
                  </FieldArray>
                  <MyFileInput
                    name="images"
                    labelName="Выберите фотографии квартиры"
                    onBlur={handleBlur}
                    multiple={true}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFieldValue("images", e.currentTarget.files)
                    }}
                    setFieldTouched={setFieldTouched}
                    error={touched.images && !!errors.images}
                    errorMessage={errors.images as string}
                  />
                  {values.images.length >= 1 ? (
                    <>
                      <span className="myform__label">Картинки</span>
                      <div style={{ marginTop: "0px" }}>
                        {Array.from(values.images).map((doc: any, index) => {
                          return (
                            <FileIcon
                              url={URL.createObjectURL(doc)}
                              handleClick={handleImageModalClick}
                              key={index}
                              icon={<InsertDriveFileIcon />}
                            />
                          )
                        })}
                      </div>
                    </>
                  ) : null}
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
            )}
          </Formik>
        </>
      )}
    </div>
  )
}

export default CreateOrder
