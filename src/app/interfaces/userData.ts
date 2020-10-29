import { User } from "../interfaces/user";


export interface UserData{
    page:number,
    per_page:number,
    total:number,
    total_pages:number
    data:User[];
}