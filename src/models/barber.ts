export default class Barber {
    private idBarber: number;
    private idUser: number;
    private name: string;
    private username: string;
    private password: string;
    private email: string;
    private cel: number;
    private amountCuts: number;
    private clientsBarber: number;
    private startDate: string; //!
    private endDate: string; //!
    private rateOfBarber: string;
    private amountOfReservesByDay: string;

    constructor(obj: any = {}) {
        this.idBarber = obj.idBarber || null;
        this.idUser = obj.idUser || null;
        this.name = obj.name || null;
        this.username = obj.username || null;
        this.password = obj.password || null;
        this.email = obj.email || null;
        this.cel = obj.cel || null;
        this.amountCuts = obj.amountCuts || null;
        this.clientsBarber = obj.clientsBarber || null;
        this.startDate = obj.startDate || null;
        this.endDate = obj.endDate || null;
        this.rateOfBarber = obj.rateOfBarber || null;
        this.amountOfReservesByDay = obj.amountOfReservesByDay || null;
    }

    get getBarberId(): number {
        return this.idBarber;
    }
    set setBarberId(value: number) {
        this.idBarber = value;
    }

    get getUserId(): number {
        return this.idUser;
    }
    set setUserId(value: number) {
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

    get getAmountCuts(): number {
        return this.amountCuts;
    }
    set setAmountCuts(value: number) {
        this.amountCuts = value;
    }

    get getClientsBarber(): number {
        return this.clientsBarber;
    }
    set setClientsBarber(value: number) {
        this.clientsBarber = value;
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

    get getRateOfBarber(): string {
        return this.rateOfBarber;
    }
    set setRateOfBarber(value: string) {
        this.rateOfBarber = value;
    }

    get getamountOfReservesByDay(): string {
        return this.amountOfReservesByDay;
    }
    set setamountOfReservesByDay(value: string) {
        this.amountOfReservesByDay = value;
    }
}