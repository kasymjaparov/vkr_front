import { FileIcon, Loading } from "@/shared/components/ui"
import useDetail from "./useDetail"
import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { ImageModal } from "@/shared/components/shared"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import { getFormatedDate } from "@/shared/utils"
import { Roles } from "@/shared/enums"

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
    onHandleOrder,
    reason,
    handleReason,
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
          <Grid item md={6} xs={12}>
            {(data.status === "new" || data.status === "denied") &&
            role === Roles.CLIENT ? (
              <Button color="error" onClick={onDeleteOrder} variant="contained">
                Удалить
              </Button>
            ) : null}
            {role === Roles.PM && data.status === "new" ? (
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
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Detail
