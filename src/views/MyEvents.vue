<template>
  <transition name="slide-fade">
    <div id="my-events" class="page-content">
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 xl12>
          <custom-table
            :conf="tableConf"
            v-model="selectedEvents"
            :items="events"
            itemIcon="event"
            @get="get"
            @value="updateSelected"
            @open="open"
            @edit="showSave"
            @new="showNew"
          ></custom-table>
        </v-flex>
      </v-layout>

      <!--Dialogs-->
      <add-dialog v-model="dialogs.add" :steps="steps" @event="add" button-text="Crear"></add-dialog>
      <save-dialog v-model="dialogs.save" :steps="steps" :item="event" @event="save"></save-dialog>

      <!--delete dialog-->
      <delete-dialog
        v-model="dialogs.delete"
        message="EVENTS.deleteEvemts"
        @close="dialogs.delete = false"
      ></delete-dialog>
      <v-snackbar
        class="delete-snackbar"
        v-model="snackbar.state"
        :timeout="snackbar.timeout"
        color="red"
      >
        <v-btn @click.native="dialogs.delete = true" class="delete-snackbar-button" dark flat block>
          <v-icon>delete_forever</v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import XComponent from "@/components/XComponent.ts";
import User from "@/controllers/User.ts";
import Event from "@/controllers/Event.ts";
import CustomTable from "@/components/CustomTable.vue";
import AddDialog from "@/components/dialogs/add.vue";
import SaveDialog from "@/components/dialogs/save.vue";
import DeleteDialog from "@/components/dialogs/delete.vue";

@Component({
  components: {
    CustomTable,
    AddDialog,
    SaveDialog,
    DeleteDialog
  }
})

export default class MyEvents extends XComponent {
  private event: Event = new Event();
  private events: any[] = [];
  private selectedEvents: any[] = [];

  private user: User = new User();

  private snackbar: any = { state: false, timeout: 0 };
  
  private pagination: any = {
    page: 1,
    total: 0,
    limit: 8,
    descending: true,
    sortBy: "code"
  };

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

  private tableConf = {
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
      },
      {
        name: "EVENT.date",
        type: "string",
        value: "date",
        align: "center"
      }
    ],
    search: {
      show: false,
      text: "EVENT.search"
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
        },
      ]
    }
  ];

// {
//       title: "Creacion de Encuesta",
//       Addbutton: {text:"Crear"},
//       fields: [
//         {
//           is: "input",
//           name: "name",
//           label: "nombre",
//           hint: "EVENT.hintName",
//           icon: "person",
//           rules: this.rules.required,
//           required: true
//         },
//         {
//           is: "select",
//           name: "type",
//           label: "tipo de encuesta",
//           hint: "EVENT.hintName",
//           icon: "person",
//           rules: this.rules.required,
//           data: {
//             items: this.typeSurvey
//           },
//           required: true
//         },
//         {
//           is: "date",
//           name: "limitTime",
//           label: "fecha limite",
//           hint: "EVENT.hintDate",
//           icon: "event",
//           rules: this.rules.required,
//           required: true
//         }
//       ]
//     }

  created() {
    this.init();
  }

  init() {
    let user = JSON.parse(this.$store.state.userInfo);
    console.log(user)
    this.user = new User(user);
    console.log("init id user is "+this.user.id)
    if(this.user) {
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
      this.$notify({ group: 'foo', type: 'warn',
        title: 'Error',
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
      this.$notify({ group: 'foo', type: 'warn',
        title: 'Error',
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
    console.log(this.event)
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
}
</script>

<style lang="scss">
#my-events {
    position:absolute;
    top:60px;
    width: 100%!important;
    height:calc(100% - 60px)!important;
}

.custom-dialogs__footer { 
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid #cecece4f;
}

.custom-stepper {
  .v-stepper__header {
    box-shadow: none;
    border: 1px solid #d4d4d4;
    border-radius: 80px;
    margin: 31px;
  }
}

.delete-snackbar {
  height: 48px !important;

  .v-snack__content {
    padding: 0 !important;
    align-items: initial !important;

    .delete-snackbar-button {
      width: 100% !important;
      position: relative;
      left: 0px;
      margin-left: 0 !important;

      i {
        font-size: 29px !important;
      }

      .v-icon {
        padding-left: 0px !important;
      }
    }
  }
}
</style>