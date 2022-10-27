import { FileIcon, Loading, MyInput, MySelect } from "@/shared/components/ui"
import useDetail from "./useDetail"
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { ImageModal } from "@/shared/components/shared"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import { getFormatedDate } from "@/shared/utils"
import { Roles, StatusResponse } from "@/shared/enums"
import { decryptRole } from "@/shared/utils/getRole"
import Select from "@mui/material/Select"

const Detail = () => {
  const {
    data,
    isLoading,
    handleImageModalClick,
    imageModal,
    imageUrl,
    setImageModal,
    onDeleteOrder,
    role,
    users,
    onHandleOrder,
    reason,
    handleReason,
    personIds,
    handleChange,
    onAppointEmployeers,
    employeers,
    type,
    handleType,
    onSendMeasureDate,
    handleMeasureDate,
    measureDate,
  } = useDetail()
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
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
      <div className="users__header">
        <h1 className="users__title pages-title">Детали заказа</h1>
      </div>
      <Paper sx={{ p: "30px" }}>
        <Grid container spacing={8}>
          <Grid item md={6} xs={12}>
            <table className="info_table">
              <tbody>
                {role != Roles.CLIENT && data.users ? (
                  <tr>
                    <td>Клиент</td>
                    <td>
                      {
                        data.users.find(item => item.role === Roles.CLIENT)
                          ?.email
                      }
                    </td>
                  </tr>
                ) : null}

                <tr>
                  <td>Адрес</td>
                  <td>{data.address}</td>
                </tr>
                {data.type ? (
                  <tr>
                    <td>Тип ремонта</td>
                    <td>{data.type}</td>
                  </tr>
                ) : null}
                <tr>
                  <td>Серия квартиры</td>
                  <td>{data.series}</td>
                </tr>
                <tr>
                  <td>Количество комнат</td>
                  <td>{data.amount_room}</td>
                </tr>
                <tr>
                  <td>Дата создания заказа</td>
                  <td>{getFormatedDate(data.created_at)}</td>
                </tr>
                {data.type ? (
                  <tr>
                    <td>Тип ремонта</td>
                    <td>{data.type}</td>
                  </tr>
                ) : null}
                {data.status === "denied" ? (
                  <tr>
                    <td style={{ color: "#f73378" }}>Причина отмены заказа</td>
                    <td style={{ color: "#f73378" }}>{data.denied_reason}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, marginY: "10px" }}
            >
              Фотографии квартиры
            </Typography>
            {data.order_images &&
              data.order_images.map(item => {
                return (
                  <FileIcon
                    url={item.link}
                    handleClick={handleImageModalClick}
                    key={item.id}
                    icon={<InsertDriveFileIcon />}
                  />
                )
              })}
          </Grid>
          {employeers ? (
            <Grid item md={6} xs={12}>
              <table style={{ marginBottom: "10px" }} className="info_table">
                <tbody>
                  {employeers.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{decryptRole(item.role)}</td>
                        <td>{item.email}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Grid>
          ) : null}
          <Grid item md={6} xs={12}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}
            >
              Подробности по комнатам
            </Typography>
            {data.order_rooms &&
              data.order_rooms.map(item => {
                return (
                  <table
                    style={{ marginBottom: "10px" }}
                    key={item.id}
                    className="info_table"
                  >
                    <tbody>
                      <tr>
                        <td>Название комнаты</td>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <td>Описание</td>
                        <td>{item.description}</td>
                      </tr>
                    </tbody>
                  </table>
                )
              })}
          </Grid>
          {(data.status === "new" || data.status === "denied") &&
          role === Roles.CLIENT ? (
            <Grid item md={12} xs={12}>
              <Button color="error" onClick={onDeleteOrder} variant="contained">
                Удалить
              </Button>
            </Grid>
          ) : null}
          {role === Roles.PM && data.status === "new" ? (
            <Grid item md={6} xs={12}>
              <Stack sx={{ marginTop: "10px" }} direction="row" spacing={2}>
                <Button
                  sx={{ height: "40px" }}
                  onClick={() => onHandleOrder("approved")}
                  variant="contained"
                >
                  Принять
                </Button>
                <Box>
                  <FormControl sx={{ width: "100%", marginBottom: "7px" }}>
                    <OutlinedInput
                      onChange={e => handleReason(e.target.value)}
                      value={reason}
                      placeholder="Причина отказа"
                      size="small"
                    />
                  </FormControl>
                  <Button
                    color="error"
                    onClick={() => onHandleOrder("denied")}
                    variant="contained"
                  >
                    Отказать
                  </Button>
                </Box>
              </Stack>
            </Grid>
          ) : null}

          {role === Roles.PM && data.status === "approved" ? (
            <Grid item md={6} xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <span className="myform__label">
                  Выберите ответственных за проект(Строители,ДДВ,чертежники)
                </span>
                <Select
                  value={personIds}
                  onChange={handleChange}
                  multiple
                  displayEmpty
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 250,
                      },
                    },
                  }}
                  size="small"
                >
                  {users.map((selectObj, index) => (
                    <MenuItem key={index} value={selectObj.id}>
                      {selectObj.email} - {decryptRole(selectObj.role)}
                    </MenuItem>
                  ))}
                </Select>
                <MySelect
                  showNothing={false}
                  labelName="Тип ремонта"
                  value={type}
                  defaultValue={"Капитальный"}
                  onBlur={() => {}}
                  onChange={handleType}
                  name="order_type"
                  items={[
                    { text: "Капитальный", value: "Капитальный" },
                    { text: "Косметический", value: "Косметический" },
                  ]}
                />
                <Button
                  onClick={onAppointEmployeers}
                  sx={{ marginTop: "10px" }}
                  variant="contained"
                >
                  Отправить
                </Button>
              </FormControl>
            </Grid>
          ) : null}
          {role === Roles.MEASURE && data.status === "appointed" ? (
            <Grid item md={6} xs={12}>
              <FormControl sx={{ width: "100%" }}>
                <span className="myform__label">
                  Выберите дату и время замера
                </span>
                <OutlinedInput
                  value={measureDate}
                  onChange={e => handleMeasureDate(e.target.value)}
                  type="datetime-local"
                />
                <Button
                  disabled={measureDate.length < 5}
                  onClick={onSendMeasureDate}
                  sx={{ marginTop: "10px" }}
                  variant="contained"
                >
                  Отправить
                </Button>
              </FormControl>
            </Grid>
          ) : null}

          {role === Roles.MEASURE && data.status === "measure_time" ? (
            <Grid item md={6} xs={12}>
              measure data inputs
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </div>
  )
}

export default Detail
