interface IStatusBtnOption {
    [property: string]: {
        text: string
        color: string
    }
}
/**Данные по статусам */
export const getStatusBtn = (status: string) => {
    const statuses: IStatusBtnOption = {
        new: {
            text: "В обработке",
            color: "#009688",
        },
        approved: {
            text: "Утвержден",
            color: "#4932d2",
        },
        denied: {
            text: "Отказано",
            color: "#f50057",
        },
        appointed: {
            text: "Ответственные назначены",
            color: "#9c27b0",
        },
    }
    return statuses[status as keyof typeof statuses]
}
