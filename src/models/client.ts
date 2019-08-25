export default class Client {
    private idClient: number;
    private idUser: number;
    private name: string;
    private username: string;
    private password: string;
    private email: string;
    private cel: number;
    private amountReserves: number;
    private interactions: string;
    private startDate: string;//!
    private endDate: string;//!
    private status: boolean;
    private clientType: string;

    constructor(obj: any = {}) {
        this.idClient = obj.idBarber || null;
        this.idUser = obj.idUser || null;
        this.name = obj.name || null;
        this.username = obj.username || null;
        this.password = obj.password || null;
        this.email = obj.email || null;
        this.cel = obj.cel || null;
        this.amountReserves = obj.amountReserves || null;
        this.interactions = obj.interactions || null;
        this.startDate = obj.startDate || null;
        this.endDate = obj.endDate || null;
        this.status = obj.status || null;
        this.clientType = obj.clientType || null;
    }

    get getIdClient(): number {
        return this.idClient;
    }
    set setIdClient(value: number) {
        this.idClient = value;
    }

    get getIdUser(): number {
        return this.idUser;
    }
    set setIdUser(value: number) {
        this.idUser = value;
    }

    get getName(): string {
        return this.name;
    }
    set setName(value: string) {
        this.name = value;
    }

    get getUsername(): string {
        return this.username;
    }
    set setUsername(value: string) {
        this.username = value;
    }

    get getPassword(): string {
        return this.password;
    }
    set setPassword(value: string) {
        this.password = value;
    }

    get getEmail(): string {
        return this.email;
    }
    set setEmail(value: string) {
        this.email = value;
    }

    get getCel(): number {
        return this.cel;
    }
    set setCel(value: number) {
        this.cel = value;
    }

    get getAmountReserves(): number {
        return this.amountReserves;
    }
    set setAmountReserves(value: number) {
        this.amountReserves = value;
    }

    get getInteractions(): string {
        return this.interactions;
    }
    set setInteractions(value: string) {
        this.interactions = value;
    }
    
    get getStartDate(): string {
        return this.startDate;
    }
    set setStartDate(value: string) {
        this.startDate = value;
    }

    get getEndDate(): string {
        return this.endDate;
    }
    set setEndDate(value: string) {
        this.endDate = value;
    }

    get getStatus(): boolean {
        return this.status;
    }
    set setStatus(value: boolean) {
        this.status = value;
    }

    get getClientType(): string {
        return this.clientType;
    }
    set setClientType(value: string) {
        this.clientType = value;
    }

}
