import XComponent from "../../components/XComponent";
import User from "../../controllers/User";
import Event from "../../controllers/Event";

export default class BarberPage extends XComponent {
  private event: Event = new Event();
  private events: any[] = [];
  private selectedEvents: any[] = [];

  private user: User = new User();

  private barbers: any = [
    {
      "name": "Art Exprerience",
      "location": "Bvar Artigas 2122"
    }
  ];


  private barberShop: any = {
    /*
      example of barberShop component:
      info: {
                //info of the barberShop    
      },
      pageDesign: {
                //visual components of the page
      },
      barbers: [
                //barbers list
      ]
    */
    info: {
      name: "Damian Rodriguez",
      email: "artexperience@gmail.com",
      phone: "098345432"
    },
    pageDesign: {
      /*
        example of pageDesign component:
          name: {       //name of pageDesign component
            img: "...", //route of the image
            scala: 100, //percentaje 100%
            x: 0,       //left position
            y: 0        //top position
          }
      */
      banner: {
        img: "https://i.pinimg.com/originals/e5/ba/65/e5ba65c5de667396de7b25820c016834.jpg",
        scala: 100,
        x: 0,
        y: 0
      }
    }
  };

  private snackbar: any = { state: false, timeout: 0 };

  private pagination: any = {
    page: 1,
    total: 0,
    limit: 8,
    descending: true,
    sortBy: "code"
  };

  private icons: any = {
    instagram: "https://image.flaticon.com/icons/png/512/87/87390.png",
    facebook: "https://image.flaticon.com/icons/png/512/33/33702.png"
  }

  private rules: any = {
    required: [(v: any) => !!v || this.translate("VALIDATIONS.required")],
    email: [
      (v: any) => !!v || this.translate("VALIDATIONS.required"),
      (v: any) => /.+@.+/.test(v) || this.translate("VALIDATIONS.email")
    ],
    password: [
      (v: any) => !!v || this.translate("VALIDATIONS.required"),
      (v: any) => (v || "").length > 8 || this.translate("VALIDATIONS.password")
    ],
    phone: []
  };

  //Extends XComponent
  tableConf = { 
    headers: [
      {
        name: "EVENT.name",
        type: "string",
        value: "name",
        align: "left"
      },
      {
        name: "EVENT.location",
        type: "string",
        value: "location",
        align: "center"
      }
    ],
    search: {
      show: true,
      text: "Que barberia esta buscando?"
    }
  };

  private steps: any = [
    {
      title: "Datos basicos",
      fields: [
        {
          is: "input",
          name: "name",
          label: "nombre",
          hint: "EVENT.hintName",
          icon: "person",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "location",
          label: "EVENT.location",
          hint: "EVENT.hintLocation",
          icon: "my_location",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "invitedsNumber",
          label: "cantidad de invitados",
          hint: "EVENT.hintDate",
          icon: "people",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "description",
          label: "descripcion",
          hint: "EVENT.hintDate",
          icon: "description",
          rules: this.rules.required,
          required: true
        }
      ]
    },
    {
      title: "Fecha de inicio y fin",
      fields: [
        {
          is: "date",
          name: "startDate",
          label: "inicio",
          hint: "EVENT.hintDate",
          icon: "event",
          rules: this.rules.required,
          required: true
        },
        {
          is: "date",
          name: "endDate",
          label: "fin",
          hint: "EVENT.hintDate",
          icon: "event",
          rules: this.rules.required,
          required: true
        },
        {
          is: "hour",
          name: "startHour",
          label: "hora inicio",
          hint: "EVENT.hintDate",
          icon: "access_time",
          rules: this.rules.required,
          required: true
        },
        {
          is: "hour",
          name: "endHour",
          label: "hora fin",
          hint: "EVENT.hintDate",
          icon: "access_time",
          rules: this.rules.required,
          required: true
        }
      ]
    }
  ];

  created() {
    this.init();
  }

  init() {
    let user = JSON.parse(this.$store.state.userInfo);
    console.log(user);
    this.user = new User(user);
    console.log("init id user is " + this.user.id);
    if (this.user) {
      this.get(this.user.id);
    }
  }

  /**
   * @name GET
   * @description gets items with filters of pagination
   */
  async get(idUser) {
    try {
      this.loading.table = true;
      let events = await Event.get(idUser);
      this.pagination.total = events.total;
      this.selectedEvents = [];
      this.events = events.docs;
    } catch (error) {
      console.log(error);
      this.$notify({
        group: "foo",
        type: "warn",
        title: "Error",
        text: error.data.message
      });
    } finally {
      this.loading.table = false;
    }
  }

  /**
   * @name ADD
   * @description add item
   */
  async add(event) {
    try {
      this.event = Object.assign(this.event, event);
      await this.event.add(this.user.id);
      this.events.push(this.event);
      this.dialogs.add = false;
    } catch (error) {
      this.$notify({
        group: "foo",
        type: "warn",
        title: "Error",
        text: error.data.message
      });
    }
  }

  /**
   * @name SAVE
   * @description save changes in the selected item from the table
   */
  async save(event) {
    this.event = Object.assign(this.event, event);
    console.log(this.event);
    try {
      await this.event.save();
      this.dialogs.save = false;
      this.updateInTable();
    } catch (error) {
      console.log(error);
      if (error.status == "VALIDATE") {
        this.errors.wizard = true;
      }
    }
  }

  /**
   * @name REMOVE
   * @description remove selected items
   */
  async remove() {
    try {
      await Promise.all(
        this.selectedEvents.map(async event => {
          let aux = new Event(event);
          await aux.delete();
          this.removeFromTable(aux._id.value);
        })
      );
      this.dialogs.delete = false;
    } catch (error) {
      if (error.status == 401) {
        let result = await this.auth.reconnect();
        if (result) {
          this.get(this.pagination);
        } else {
          this.auth.logoff();
        }
      } else {
      }
    }
  }

  /**
   * @name SHOW_NEW
   * @description shows the add dialog
   */
  showNew() {
    //this.event = new Event();
    this.dialogs.add = true;
  }

  /**
   * @name OPEN
   * @description
   */
  open(event) {
    // this.event = Object.assign(new Event(), event);
    // this.dialogs.save = true;
  }

  /**
   * @name SHOW_SAVE
   * @description shows the update dialog when is selected a item from the table
   */
  showSave(event) {
    console.log(event);
    this.event = Object.assign(new Event(), event);
    this.dialogs.save = true;
  }

  /**
   * @name REMOVE_FROM_TABLE
   * @description remove item from the table
   */
  removeFromTable(id: number) {
    let index = -1;
    let selectedIndex = -1;
    this.events.map(elem => {
      if (elem._id == id) {
        index = this.events.indexOf(elem);
      }
    });

    this.selectedEvents.map(elem => {
      if (elem._id == id) {
        selectedIndex = this.selectedEvents.indexOf(elem);
      }
    });
    this.events.splice(index, 1);
    this.selectedEvents.splice(selectedIndex, 1);
  }

  /**
   * @name UPDATE_SELECTED
   * @description shows the delete snackbar where is selected a item from the table
   */
  updateSelected(selected: any[]) {
    this.selectedEvents = selected;
    if (selected.length > 0) {
      this.snackbar.state = true;
    } else {
      this.snackbar.state = false;
    }
  }

  /**
   * @name UPDATE_IN_TABLE
   * @description update items in the table
   */
  updateInTable() {
    this.events.map(event => {
      if (event._id == this.event._id.value) {
        Object.assign(event, this.event.getRaw());
      }
    });
  }

  getStars() {
    let stars: String = "";
    for (let index = 0; index < this.barberShop.info.stars; index++) {
      stars +="star ";
    }
    return stars;
  }
}