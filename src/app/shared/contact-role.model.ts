import { Contact } from "./contact.model";

export class ContactRole {
    constructor(
        public id: string,
        public contact: Contact,
        public role: string
    ) {}
}