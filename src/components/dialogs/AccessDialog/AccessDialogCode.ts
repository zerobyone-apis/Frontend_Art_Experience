import { Vue, Component } from "vue-property-decorator";
import AccessStructure from './AccessStructure';
import InBack from "./IntegrationBackend";

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
        password: null,
    }

    private structureObjectAccessResponse = {
    }

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

    // next() {
    //     if (this.steps.length > this.wizard) this.wizard += 1;
    // }

    // prev() {
    //     if (this.steps.length > 0) this.wizard -= 1;
    // }

    // jump(value: number) {
    //     if (value >= 0 && value <= this.steps.length) {
    //         this.wizard = value;
    //     }
    // }

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
        try {
            // console.log("Antes del rsponse: ")
            // let response = await this.inback.getReserves();
            // console.log("Despues del response: ")
            // console.log(response);
        } catch (error) {
            console.error('yep, algo se rompio' + error);
        }
    }
}