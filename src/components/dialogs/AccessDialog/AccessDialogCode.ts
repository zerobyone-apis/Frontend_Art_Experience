import { Vue, Component } from "vue-property-decorator";
import AccessStructure from "./AccessStructure";
import InBack from "./../ReservationDialog/ReserveBackend";

export default class AccessDialogCode extends Vue {
  private structure = new AccessStructure();
  private steps: any = this.structure.stepsSignIn;
  private stepsSignUp: any = this.structure.stepsSignUp;
  private stepsSignIn: any = this.structure.stepsSignIn;

  private item: any = {};
  private wizard: number = 1;
  private inback = new InBack();

  private access = {
    username: null,
    email: null,
    password: null
  };

  private structureObjectAccessResponse = {};

  // show and hide the dialog
  get model(): boolean {
    return this["value"];
  }

  set model(model: boolean) {
    this.$emit("input", model);
  }
  private checkSuccessStep() {
    // let required = this.steps[this.wizard - 1].required;
    // if (this.reservation[required] != undefined) {
    //     return false;//not disabled
    // } else {
    //     return true; //disabled
    // }
    return null;
  }

  getFieldType(type: string): string {
    let component: string = "";
    if (type == "input") component = "v-text-field";
    if (type == "select") component = "v-select";
    if (type == "list") component = "x-list";
    if (type == "checkbox") component = "v-checkbox";
    if (type == "date") component = "v-date-picker";
    return component;
  }

  async event() {
    let createMock = {
      barberOrHairdresserId: 1,
      clientId: 1,
      mailClient: "node.seven.post@gmail.net",
      nameClient: " JAVA Magdalena",
      celClient: 22334455,
      startTime: "2019-09-26T10:00:00.085Z",
      endTime: "2019-09-26T11:00:00.085Z",
      workToDo: "CORTE Y BARBA",
      priceWork: 500.0,
      workTime: 60,
      additionalCost: 100.0
    };

    let updateMock = {
      reserve_id: 34,
      barberOrHairdresserId: 1,
      mailClient: "node.third.update.PUT@gmail.net",
      nameClient: " WOS CANGURO",
      celClient: 22334455,
      startTime: "2019-09-26T10:00:00.085Z",
      createOn: "1573274902341",
      endTime: "2019-09-26T11:00:00.085Z",
      workToDo: "LAVADO,CORTE_BARBA",
      priceWork: 750.0,
      workTime: 90,
      additionalCost: 120.0
    };

    try {
      const findAll = await this.inback.findAll();
      console.log(`"Find All reserves Method:`);
      console.log(findAll);

      const findbyId = await this.inback.findById(36);
      console.log(`"Find reserve by ID Method:`);
      console.log(findbyId);

      await this.inback.createReserve(createMock);

      await this.inback.updateReserve(updateMock);

      await this.inback.cancelReserve({
        idClient: 1,
        idReserve: 34
      });

      await this.inback.deleteReserve({
        idBarbOrHair: 1,
        idReserve: 33
      });
    } catch (error) {
      console.error(`EL error proviene de aca .. -> ${error}`);
    }
  }
}
