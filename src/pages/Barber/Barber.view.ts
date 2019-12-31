import  Vue from 'vue';
import User from "../../models/User";

export default class BarberView extends Vue {

  private pictures: any = [
    "https://stylesatlife.com/wp-content/uploads/2018/09/Mexican-Haircuts-For-Guys-and-Girls.jpg",
    "https://root.coreylittle.com/williamsonsource/2017/10/pompadour.jpg",
    "https://blogocosa.com/wp-content/uploads/2019/05/pompadour-undercut-newest-30-tren-st-undercut-hairstyles-for-men-collection.jpg",
    "https://media.haircutinspiration.com/photos/20181204005057/Fade-beard-buzzcut-%40patty_cuts.jpg"
  ];

  private steps: any = [
    {
      title: "Datos basicos",
      fields: [
        {
          is: "input",
          name: "location",
          label: "Barberia",
          hint: "EVENT.hintLocation",
          icon: "home",
          // rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "location",
          label: "Tipo de trabajo",
          hint: "EVENT.hintLocation",
          icon: "work",
          // rules: this.rules.required,
          required: true
        }
      ]
    },
    {
      title: "Fecha de inicio y fin",
      fields: [
        {
          is: "input",
          name: "location",
          label: "Barberia",
          hint: "EVENT.hintLocation",
          icon: "home",
          // rules: this.rules.required,
          required: false
        },
        {
          is: "input",
          name: "location",
          label: "Tipo de trabajo",
          hint: "EVENT.hintLocation",
          icon: "work",
          // rules: this.rules.required,
          required: false
        },
        {
          is: "date",
          name: "startDate",
          label: "inicio",
          hint: "EVENT.hintDate",
          icon: "event",
          // rules: this.rules.required,
          required: true
        },
        {
          is: "hour",
          workTime: 0.5,
          name: "startDate",
          label: "horarios",
          hint: "EVENT.hintDate",
          icon: "event",
          // rules: this.rules.required,
          required: true
        }
      ]
    }
  ];


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
}