interface reserve {
  reserve_id: number;
  barberOrHairdresserId: number;
  clientId: number;
  mailClient: string;
  celClient: number;
  startTime: string;
  endTime: string;
  createOn: string;
  nameClient: string;
  workToDo: string;
  work_id: number;
  workTime: number;
  priceWork: number;
  totalCost: number;
  additionalCost: number;
  active: boolean;
}
export default class Reserve {
  private reserve_id: number;
  private barberOrHairdresserId: number;
  private clientId: number;
  private mailClient: string;
  private celClient: number;
  private startTime: string;
  private endTime: string;
  private createOn: string;
  private nameClient: string;
  private workToDo: string;
  private work_id: number;
  private workTime: number;
  private priceWork: number;
  private totalCost: number;
  private additionalCost: number;
  private active: boolean;

  constructor(reserve: reserve) {
    this.reserve_id = reserve.reserve_id;
    this.barberOrHairdresserId = reserve.barberOrHairdresserId;
    this.clientId = reserve.clientId;
    this.mailClient = reserve.mailClient;
    this.celClient = reserve.celClient;
    this.startTime = reserve.startTime;
    this.endTime = reserve.endTime;
    this.createOn = reserve.createOn;
    this.nameClient = reserve.nameClient;
    this.workToDo = reserve.workToDo;
    this.work_id = reserve.work_id;
    this.workTime = reserve.workTime;
    this.priceWork = reserve.priceWork;
    this.totalCost = reserve.totalCost;
    this.additionalCost = reserve.additionalCost;
    this.active = reserve.active;
  }

  get getReserve_id(): number {
    return this.reserve_id;
  }
  set setReserve_id(value: number) {
    this.reserve_id = value;
  }

  get getBarberOrHairdresserId(): number {
    return this.barberOrHairdresserId;
  }
  set setBarberOrHairdresserId(value: number) {
    this.barberOrHairdresserId = value;
  }

  get getCelClient(): number {
    return this.celClient;
  }
  set setCelClient(value: number) {
    this.celClient = value;
  }
  get getClientId(): number {
    return this.clientId;
  }
  set setClientId(value: number) {
    this.clientId = value;
  }
  get getCreateOn(): string {
    return this.createOn;
  }
  set setCreateOn(value: string) {
    this.createOn = value;
  }
  get getMailClient(): string {
    return this.mailClient;
  }
  set setMailClient(value: string) {
    this.mailClient = value;
  }

  get getStartTime(): string {
    return this.startTime;
  }
  set setStartTime(value: string) {
    this.startTime = value;
  }

  get getEndTime(): string {
    return this.endTime;
  }
  set setEndTime(value: string) {
    this.endTime = value;
  }

  get getNameClient(): string {
    return this.nameClient;
  }
  set setNameClient(value: string) {
    this.nameClient = value;
  }

  get getWorkToDo(): string {
    return this.workToDo;
  }
  set setWorkToDo(value: string) {
    this.workToDo = value;
  }
  get getWorkId(): number {
    return this.work_id;
  }
  set setWorkId(value: number) {
    this.work_id = value;
  }
  get getWorkTime(): number {
    return this.workTime;
  }
  set setWorkTime(value: number) {
    this.workTime = value;
  }
  get getPriceWork(): number {
    return this.priceWork;
  }
  set setPriceWork(value: number) {
    this.priceWork = value;
  }

  get getTotalCost(): number {
    return this.totalCost;
  }
  set setTotalCost(value: number) {
    this.totalCost = value;
  }
  get getAdditionalCost(): number {
    return this.additionalCost;
  }
  set setAdditionalCost(value: number) {
    this.additionalCost = value;
  }
  get getActive(): boolean {
    return this.active;
  }
  set setaAtive(value: boolean) {
    this.active = value;
  }
}
