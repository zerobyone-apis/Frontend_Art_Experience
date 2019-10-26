
export default class ReservationStructure {

  private dialog: boolean = false;

  public steps: any = [
    { //custom
      title: "Seleccione el barbero con el que quiere realizar el servicio",
      type: 'custom',
      required: "employeeId"
    },
    { //custom
      title: "Seleccione el servicio que desee realizar",
      type: 'custom',
      required: "workId"
    },
    { //automatic
      title: "Indique la fecha y la hora en la que quiere reservar",
      required: "startHour",
      fields: [
        {
          is: "date",
          name: "startDate",
          label: "fecha de inicio",
          hint: "EVENT.hintDate",
          icon: "event",
          date: new Date().toISOString().substr(0, 10),
          modal: [],
          required: true
        },
        {
          is: "hour",
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
