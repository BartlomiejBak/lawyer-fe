import { Contact } from "./contact.model";

export class Task {
    constructor(
        public taskId: string,
        public priority: boolean,
        public deadline: string,
        public description: string,
        public contactList: Contact[]
    ) {}
}