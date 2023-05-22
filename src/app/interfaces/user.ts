

import { Company } from "./company";
import {Adress} from "./address";
export interface User {

    id: number;
    name: string;
    username: string;
    email: string;
    address: Adress;
    phone: string;
    website: string;
    company: Company

}
