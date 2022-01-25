import { ContactRole } from "./contact-role.model";

export class Lawsuit {
    constructor(
        public lawsuitId: string,
        public name: string,
        public caseSide: string,
        public inputDate: string,
        public deadline: string,
        public signature: string,
        public claimAmount: number,
        public additionalInfo: string,
        public contacts: ContactRole[],
        public tasklist: Task[],
        public eventSet: Event[]
    ) {}
}