import { ResponseModel } from "./response-model";


export interface itemResponseModel<T> extends ResponseModel{
data:T
}