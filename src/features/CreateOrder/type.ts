export interface CreateOrderReq {
    address: string
    series: string
    amount_room: string
    rooms: { name: string, description: string }[]
    images: any
}