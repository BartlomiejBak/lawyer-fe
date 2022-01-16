export class Poa {
    constructor(
        public poaId: string,
        public type: string,
        public payment: string,
        public kpc: boolean,
        public termination: boolean,
        public startDate: string,
        public endDate: string,
        public terminationNotificationDuty: boolean,
        public terminationNotificationDutyCompleted: boolean
    ) {}
}