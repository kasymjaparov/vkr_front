import { FileIcon, Loading } from "@/shared/components/ui"
import useDetail from "./useDetail"
import { Button, Grid, Paper, Typography } from "@mui/material"
import { ImageModal } from "@/shared/components/shared"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import { getFormatedDate } from "@/shared/utils"

const Detail = () => {
  const {
    data,
    isLoading,
    handleImageModalClick,
    imageModal,
    imageUrl,
    setImageModal,
    onDeleteOrder,
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
                  <td>{data.series}</td>
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
                    <td>Причина отмены заказа</td>
                    <td>{data.denied_reason}</td>
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
                  <table key={item.id} className="info_table">
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
            {data.status === "new" ? (
              <Button color="error" onClick={onDeleteOrder} variant="contained">
                Удалить
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Detail
