export default class Reserve {
    private reserve_id: number;
    private barberId: number;
    private clientId: number;
    private dateReserve: string;//!
    private deleteOn: string;//!
    private createOn: string;//!
    private workToDo: string;//!
    private price: number;

    constructor(obj: any = {}) {
        this.reserve_id = obj.reserve_id || null;
        this.barberId = obj.barberId || null;
        this.clientId = obj.clientId || null;
        this.dateReserve = obj.dateReserve || null;
        this.deleteOn = obj.deleteOn || null;
        this.createOn = obj.createOn || null;
        this.workToDo = obj.workToDo || null;
        this.price = obj.price || null;
    }

    get getReserve_id(): number {
        return this.reserve_id;
    }
    set setReserve_id(value: number) {
        this.reserve_id = value;
    }

    get getBarberId(): number {
        return this.barberId;
    }
    set setBarberId(value: number) {
        this.barberId = value;
    }

    get getClientId(): number {
        return this.clientId;
    }
    set setClientId(value: number) {
        this.clientId = value;
    }

    get getDateReserve(): string {
        return this.dateReserve;
    }
    set setDateReserve(value: string) {
        this.dateReserve = value;
    }

    get getDeleteOn(): string {
        return this.deleteOn;
    }
    set setDeleteOn(value: string) {
        this.deleteOn = value;
    }

    get getCreateOn(): string {
        return this.createOn;
    }
    set setCreateOn(value: string) {
        this.createOn = value;
    }

    get getWorkToDo(): string {
        return this.workToDo;
    }
    set setWorkToDo(value: string) {
        this.workToDo = value;
    }

    get getPrice(): number {
        return this.price;
    }
    set setPrice(value: number) {
        this.price = value;
    }
}
