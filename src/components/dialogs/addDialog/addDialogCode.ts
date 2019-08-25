export default class AddDialog extends Vue {
    @Prop({ default: "Crear" }) buttonText: any;
    @Prop({ default: false }) value!: boolean;

    @Prop({
        default: () => [
            {
                title: "Step 1",
                fields: [
                    {
                        type: "input",
                        name: "first",
                        label: "My first input"
                    }
                ]
            },
            {
                title: "Step 2",
                fields: [
                    {
                        type: "input",
                        name: "second",
                        label: "My second input"
                    }
                ]
            }
        ]
    })
    steps: any;

    private item: any = {};
    private modals: any = {};
    private date: string = new Date().toISOString().substr(0, 10);
    private time: string = "";
    private wizard: number = 1;
    private errors: boolean = false;

    /**
     * @name MODEL
     * @description emits the input method to the parent for define visibility of the dialog
     */
    get model(): boolean {
        return this.value;
    }

    set model(model: boolean) {
        this.$emit("input", model);
    }

    /**
     * @name NEXT
     * @description next step in stepper dialog
     */
    next() {
        if (this.steps.length > this.wizard) this.wizard += 1;
    }

    /**
     * @name PREV
     * @description prev step in stepper dialog
     */
    prev() {
        if (this.steps.length > 0) this.wizard -= 1;
    }

    /**
     * @name JUMP
     * @description jump to the step entered in the stepper dialog
     */
    jump(value: number) {
        if (value >= 0 && value <= this.steps.length) {
            this.wizard = value;
        }
    }

    /**
     * @name GET_FIELD_TYPE
     * @description return a type of component by a type string
     */
    getFieldType(type: string): string {
        let component: string = "";
        if (type == "input") component = "v-text-field";
        if (type == "select") component = "v-select";
        if (type == "list") component = "x-list";
        if (type == "checkbox") component = "v-checkbox";
        if (type == "date") component = "v-date-picker";

        return component;
    }

    /**
     * @name ERROR_FIELD
     * @description Check the required fields and return if there is an empty one
     */
    errorField(field: any) {
        let error = false;
        if (field.required && !this.item[field.name]) {
            error = true;
        }
        return error;
    }

    /**s
     * @name EVENT
     * @description emits the "event" method to the parent
     */
    event() {
        this.errors = false;
        this.steps.map((step: any, index: number) => {
            let form = "step" + (index + 1);

            if (!this.$refs[form][0].validate()) {
                this.errors = true;
                this.wizard = index + 1;
            }
        });
        if (!this.errors) {
            this.$emit("event", this.item);
        }
    }

    saveDate(date: any) {
        this.$refs["dialog1"][0].save(date.toString());
        this.modal = false;
    }
}