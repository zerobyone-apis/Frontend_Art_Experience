import { Vue } from "vue-property-decorator";
import PageData from '../../../data/PageData';

export default class ReservationDialogCode extends Vue {
    private data: any = new PageData();
    private item: any = {};
    private wizard: number = 1;

    private reservation = {
        barberId: null,
        clientId: null,
        workId: null,
        startHour: null,
        startDate: null,
        isSuccess: false,
    }

    private selectedBarber: any = {};
    private selectedJob: any = {};

    private selectJob(job: any) {
        this.selectedJob = job;
        this.reservation.workId = job.workId;
    }

    private selectBarber(barber: any) {
        this.selectedBarber = barber;
        this.reservation.barberId = barber.barberId;
    }

    private checkSuccessStep() {
        let required = this["steps"][this.wizard - 1].required;
        if (this.reservation[required] != undefined) {
            return false;//not disabled
        } else {
            return true; //disabled
        }
    }

    //pensar este metodo: debe desmarcar todos los domingos 
    private getDaysExceptWednesday() {
        return val => parseInt(val.split('-')[2]) % 7 === 1;
    }

    private getDayNumber(date: any) {
        return new Date(date).getDay();
    }

    private selectHour(hour: any) {
        this.data.weekObject.map((item: any) => {
            if (item == hour) {
                item.selected = true;
                this.reservation.startHour = hour.hour;
            } else {
                item.selected = false;
            }
        });
    }

    private getHours(saturday: boolean) {
        let items: any = [];
        this.data.weekObject.forEach((item: any) => {
            if (item.saturday == saturday) {
                items.push(item);
            }
        });
        return items;
    }

    get model(): boolean {
        return this["value"];
    }

    set model(model: boolean) {
        this.$emit("input", model);
        this.wizard = 1;
    }

    next() {
        if (this["steps"].length > this.wizard) this.wizard += 1;
    }

    prev() {
        if (this["steps"].length > 0) this.wizard -= 1;
    }

    jump(value: number) {
        if (value >= 0 && value <= this["steps"].length) {
            this.wizard = value;
        }
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

    event() {
        console.log(this.reservation)
        this.wizard = 1;
        //reset
        // this.selectedBarber = {};
        // this.selectedJob = {};
        // this.reservation.startDate = "";
        this.model = false;
    }
}
