import { Vue } from "vue-property-decorator";
import PageData from '../../../data/PageData';

export default class ReservationDialogCode extends Vue {
    private data: any = new PageData();

    private reservation = {
        barberId: 1,
        clientId: 2,
        workId: 1,
        startHour: "",
        startDate: "",
        isSuccess: true,
    }

    private item: any = {};

    private wizard: number = 1;

    public selectedBarber: any = {
        idBarber: -1,
        idUser: -1,
        name: "",
        job: "",
        amountCuts: -1,
        clientsBarber: -1,
        rateOfBarber: -1,
        amountOfReservesByDay: -1,
        img: "",
        instagram: "",
        facebook: ""
    };


    public selectedJob: any = {
        name: "",
        cost: "",
        img: ""
    };

    //do this methosd    
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
}