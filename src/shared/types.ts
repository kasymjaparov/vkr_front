
import { AxiosRequestHeaders } from "axios"
import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { Roles, StatusResponse } from "./enums"

export interface IList<T> {
    data: T[],
    message?: string,
    amount: number,
    limit: number,
    pagesCount: number,
    status: StatusResponse
}
export interface IGetById<T> {
    data: T,
    message?: string,
    status: StatusResponse
}
export interface IEdit {
    message?: string,
    status: StatusResponse
}

export interface IPayloadList<T> {
    data: T[],
    amount: number,
    limit: number,
    pagesCount: number
}

export interface ICommonForm {
    labelName: string
    name: string
    onChange: any
    onBlur: (e: React.FocusEvent<any>) => void
    error?: boolean
    errorMessage?: string
    value?: string | number
    placeholder?: string
}
export interface IListTable<T> {
    count: number,
    page_size: number,
    num_pages: number,
    next: string,
    previous: null,
    results: T[]
}

export interface IHeaders { headers: AxiosRequestHeaders }
export interface IRoute {
    path: string
    element: JSX.Element
    children?: IRoute[]
}
export interface IAppBarLink {
    text: string;
    href: string;
    roles: Roles[];
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}
export interface IActive {
    is_active: boolean
}
