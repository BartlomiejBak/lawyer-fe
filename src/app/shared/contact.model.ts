import { Address } from "./address.model";

export class Contact {
    constructor(
        contactId: string,
        name: string,
        firstName: string,
        lastName: string,
        email: string,
        altEmail: string,
        phone: string,
        altPhone: string,
        companyName: string,
        pesel: string,
        nip: string,
        regon: string,
        krs: string,
        dateCreated: string,
        dateModified: string,
        address: Address,
        correspondenceAddress: Address
    ) {}
}