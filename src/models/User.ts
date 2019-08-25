export default class User {
  private userId: number;
  private clientId: number;
  private barberId: number;
  private username: string;
  private fullName: string;
  private password: string;
  private email: string;
  private cel: number;
  private deleteOn: string;//!
  private createOn: string;//!
  private status: boolean;

  constructor(obj: any = {}) {
    this.userId = obj.userId || null;
    this.clientId = obj.clientId || null;
    this.barberId = obj.barberId || null;
    this.username = obj.username || null;
    this.fullName = obj.fullName || null;
    this.password = obj.password || null;
    this.email = obj.email || null;
    this.cel = obj.cel || null;
    this.deleteOn = obj.deleteOn || null;
    this.createOn = obj.createOn || null;
    this.status = obj.status || null;
  }

  get getUserId(): number {
    return this.userId;
  }
  set setUserId(value: number) {
    this.userId = value;
  }

  get getClientId(): number {
    return this.clientId;
  }
  set setClientId(value: number) {
    this.clientId = value;
  }

  get getBarberId(): number {
    return this.barberId;
  }
  set setBarberId(value: number) {
    this.barberId = value;
  }

  get getUsername(): string {
    return this.username;
  }
  set setUsername(value: string) {
    this.username = value;
  }

  get getFullName(): string {
    return this.fullName;
  }
  set setFullName(value: string) {
    this.fullName = value;
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

  get getStatus(): boolean {
    return this.status;
  }
  set setStatus(value: boolean) {
    this.status = value;
  }
}