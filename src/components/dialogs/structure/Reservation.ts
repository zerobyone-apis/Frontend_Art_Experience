
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
          date: new Date().toISOString().substr(0, 10), //is used only for the component
          modal: [], //is only used for the component
          required: true
        },
        {
          is: "hour",
          workTime: 0.5,
          name: "startHour",
          label: "horarios",
          hint: "EVENT.hintDate",
          icon: "event",
          required: true
        }
      ]
    }
  ];
}
