export default class BarberJobs {
    private idJob: number;
    private idBarber: number;
    private price: number;
    private timeRequire: string;//!
    private typeWork: any;

    constructor(obj: any = {}) {
        this.idJob = obj.idJob || null;
        this.idBarber = obj.idBarber || null;
        this.price = obj.price || null;
        this.timeRequire = obj.timeRequire || null;
        this.typeWork = obj.typeWork || [];//!
    }

    get getIdJob(): number {
        return this.idJob;
    }
    set setIdJob(value: number) {
        this.idJob = value;
    }

    get getBarberId(): number {
        return this.idBarber;
    }
    set setBarberId(value: number) {
        this.idBarber = value;
    }

    get getPrice(): number {
        return this.price;
    }
    set setPrice(value: number) {
        this.price = value;
    }

    get getTimeRequire(): string {
        return this.timeRequire;
    }
    set setTimeRequire(value: string) {
        this.timeRequire = value;
    }

    get getTypeWork(): any {
        return this.typeWork;
    }
    set setTypeWork(value: any) {
        this.typeWork = value;
    }
}