export interface IUserDetails {
    userName: string;
    email: string;
    address: Array<IUserAddress>;
}

export interface IUserAddress {
    city: string;
    state: string;
    zipCode: number;
}