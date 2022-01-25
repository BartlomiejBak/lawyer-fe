import { Address } from "./address.model";

export class Court {
    constructor(
        public courtId: string,
        public name: string,
        public address: Address,
        public description: string,
        public phone: string
    ) {}
}