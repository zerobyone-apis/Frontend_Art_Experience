
export default class Reservation {

  private dialog: boolean = false;

  private steps: any = [
    {
      title: "custom",
      fields: []
    },
    {
      title: "custom",
      fields: []
    },
    {
      title: "Indique la fecha y la hora en la que quiere reservar",
      fields: [
        {
          is: "date",
          name: "startDate",
          label: "fecha de inicio",
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
}

// {
//   is: "select",
//   name: "typeWork",
//   label: "Tipo de trabajo",
//   hint: "EVENT.hintTypeWork",
//   icon: "work",
//   // rules: this.rules.required,
//   required: false
// },