import { Box, Button, Divider, Typography } from "@mui/material"
import { useAdminDashboard } from "./useAdminDashboard"

export const Notification = () => {
  const { notifications, handleWatchNotification } = useAdminDashboard()
  return (
    <div className="myAppBar__links__profile__tooltip">
      <Box sx={{ p: 2 }}>
        {notifications.length > 0 ? (
          notifications.map(notification => {
            return (
              <div key={notification.id}>
                <Typography sx={{ fontSize: "14px" }}>
                  {notification.title}
                </Typography>
                <Button
                  onClick={() =>
                    handleWatchNotification(
                      notification.id as unknown as string
                    )
                  }
                  variant="contained"
                  size="small"
                  color="info"
                  fullWidth
                  sx={{ marginY: "7px" }}
                >
                  Прочитано
                </Button>
              </div>
            )
          })
        ) : (
          <Typography sx={{ fontSize: "14px" }}>
            У вас нет уведомлений
          </Typography>
        )}
      </Box>
    </div>
  )
}
