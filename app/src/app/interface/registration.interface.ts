export interface IUserDetails {
    userName: string;
    email: string;
    address: IUserAddress[];
}

export interface IUserAddress {
    city: string;
    state: string;
    zipCode: number;
}