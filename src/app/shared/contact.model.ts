import { Address } from "./address.model";

export class Contact {
    constructor(
        public contactId: string,
        public name: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public altEmail: string,
        public phone: string,
        public altPhone: string,
        public companyName: string,
        public pesel: string,
        public nip: string,
        public regon: string,
        public krs: string,
        public dateCreated: string,
        public dateModified: string,
        public address: Address,
        public correspondenceAddress: Address
    ) {}
}