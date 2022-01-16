export class Payment {
    constructor(
        public paymentId: string,
        public paymentValue: number,
        public paymentDate: string,
        public paid: boolean,
        public paidDate: string,
        public comment: string,
        public us: boolean,
        public incoming: boolean
    ) {}
}