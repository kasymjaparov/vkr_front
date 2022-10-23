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
    }
    return statuses[status as keyof typeof statuses]
}