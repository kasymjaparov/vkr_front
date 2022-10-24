import { IProfile } from "../Auth/type"

export interface Order {
    id: number,
    address: string,
    series: string,
    amount_room: number,
    type?: string,
    status: string,
    contract?: string,
    contract_signed: boolean,
    denied_reason: string,
    created_at: string,
    updated_at: string,
    users: IProfile[],
    act: {
        id: number,
        contract: string,
        client?: string,
        pm?: string,
        builder?: string,
        created_at: string,
        updated_at: string
    },
    order_rooms:
    {
        id: number,
        name: string,
        description: string
    }[],
    order_images:
    {
        id: number,
        link: string
    }[],
    measurement?: {
        id: number,
        link: string,
        come_datetime: string;
        description: string;
        description_client: string;
    },
    checks: [],
    samples: [],
    stages: []
}
export interface IHandleOrderReq {
    type: string;
    id: string;
    reason: string;
}