<template>
  <v-dialog v-model="model" fullscreen scrollable transition="slide-x-transition">
    <v-card class="x-dialogs">
      <v-card-text style="padding:0;">
        <v-stepper v-model="wizard" class="stepper">
          <v-stepper-items>
            <v-stepper-content v-for="(step,index) in steps" :key="index+1" :step="index+1">
              <div class="black" style="position: relative; width: 100%; height: 60px;">
                <v-layout row wrap class="text-xs-center">
                  <v-flex xs4 xl4 sm4 class="text-xs-left pt-3 pl-1">
                    <v-icon @click="model=false" dark fab>arrow_back</v-icon>
                  </v-flex>
                  <v-flex xs4 xl4 sm4 class="pt-3">
                    <span class="white--text">{{ $i18n.t(step.title) }}</span>
                  </v-flex>
                  <v-flex xs4 xl4 sm4></v-flex>
                </v-layout>
              </div>

              <v-layout row wrap class="x-dialogs__content">
                <!-- img box -->
                <v-flex xs12 sm12 lg12 class="mb-1">
                  <div class="container">
                    <div class="box-img">
                      <v-img
                        class="img"
                        :style="{'margin-left' : imgSettings.x+'px', 'margin-top' : imgSettings.y+'px'}"
                        :width="imgSettings.width+'%'"
                        :height="imgSettings.height+'%'"
                        :src="image"
                      ></v-img>
                    </div>
                  </div>
                </v-flex>

                <!-- tools  -->
                <v-flex xs12 sm12 lg12>
                  <p>{{ "value "+ imgSettings.x }}</p>
                  <div class="box-tools">
                    <v-slider v-model="imgSettings.width" label="largo" min="100" max="200"></v-slider>
                    <v-slider v-model="imgSettings.height" label="alto" min="100" max="200"></v-slider>
                    <v-slider v-model="imgSettings.x" label="horizontal" min="0" max="100"></v-slider>
                    <v-slider v-model="imgSettings.y" label="vertical" min="0" max="100"></v-slider>
                  </div>
                </v-flex>

                <!--footer-->
                <v-flex xs12 sm12 lg12 class="pr-3">
                  <v-btn
                    v-if="steps.length == index+1"
                    color="x-theme__color"
                    flat
                    outline
                    style="float: right;"
                    @click.native="event"
                  >{{ buttonText }}</v-btn>
                  <v-btn
                    v-if="wizard != steps.length"
                    style="float: right;"
                    flat
                    color="x-theme__color"
                    @click.native="wizard += 1"
                  >{{ $i18n.t('GENERAL.next') }}</v-btn>
                  <v-btn
                    v-if="wizard > 1"
                    color="grey"
                    style="float: right;"
                    flat
                    @click.native="wizard -= 1"
                  >{{ $i18n.t('GENERAL.prev') }}</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { VSelect, VTextField, VCheckbox } from "vuetify/lib";

@Component({
  components: {
    VSelect,
    VTextField,
    VCheckbox
  }
})
export default class AddDialog extends Vue {
  @Prop({ default: "Crear" }) buttonText: any;
  @Prop({ default: false }) value!: boolean;
  @Prop({
    default:
      "http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
  })
  image!: string;

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

  private imgSettings: any = {
    x: 0,
    y: 0,
    width: 50,
    height: 50
  };

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
</script>

<style lang="scss">
.stepper {
  .v-stepper__content {
    padding: 0 !important;
  }
}
.x-dialogs {
  border-radius: 0px !important;

  .x-stepper {
    box-shadow: none !important;
    border: none;
    border-radius: 80px;
    margin: 31px;

    .v-stepper__header {
      box-shadow: none;
      border-radius: 50px;
      padding: 11px 28px;
      margin-left: 5%;
      width: 89%;
      margin-top: 22px;
      border: 1px solid #d4d4d4;
    }

    .v-stepper__step > .v-stepper__label {
      color: #8f8f8f !important;
      text-shadow: none;
    }

    .v-stepper__step__step {
      background-color: #de5656 !important;
    }
  }
}

.x-dialogs__footer {
  border-top: 1px solid #f1f1f1;
  padding: 8px;
}

.x-dialogs__content {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(42, 42, 42);
}

.date-box {
  input {
    border-style: solid;
    height: 30px !important;
    font-size: 16px;
  }
}

.container {
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #de5656;
  text-align: center;
}

.box-img {
  position: relative;
  border-style: solid;
  width: 150px;
  height: 150px;
  overflow: hidden;
  // display: flex;
  align-items: center;
  justify-content: center;

  .img {
    position: relative;
  }
}

.box-tools {
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #ffffff;
}
</style>
