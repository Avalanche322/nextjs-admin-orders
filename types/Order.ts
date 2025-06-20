import {Cart} from "@/types/Cart";

export interface Order extends Cart {
    total: number
}