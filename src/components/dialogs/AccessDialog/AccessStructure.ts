
export default class ReservationStructure {

  // is: this are the list of fields type
  //     if (type == "input") component = "v-text-field";
  //     if (type == "select") component = "v-select";
  //     if (type == "list") component = "x-list";
  //     if (type == "checkbox") component = "v-checkbox";
  //     if (type == "date") component = "v-date-picker";

  private dialog: boolean = false;

  public stepsSignIn: any = [
    { //automatic
      title: "Iniciar Sesion",
      required: 'username',
      fields: [
        {
          is: "input",
          name: "username",
          label: "Usuario o Email",
          hint: "",
          icon: "people",
          required: true
        },
        {
          is: "input",
          name: "password",
          label: "Contraseña",
          hint: "",
          icon: "people",
          required: true
        }
      ]
    }
  ];

  public stepsSignUp: any = [
    {
      title: "Registrarse",
      required: 'username',
      fields: [
        {
          is: "input",
          name: "username",
          label: "Nombre de usuario",
          hint: "",
          icon: "people",
          required: true
        },
        {
          is: "input",
          name: "email",
          label: "Email",
          hint: "",
          icon: "people",
          required: true
        },
        {
          is: "input",
          name: "password",
          label: "Contraseña",
          hint: "",
          icon: "people",
          required: true
        },
        {
          is: "input",
          name: "password2",
          label: "Repita la contraseña",
          hint: "",
          icon: "people",
          required: true
        }
      ]
    }
  ];
}
