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
                  <v-flex xs4 xl4 sm4>        
                  </v-flex>
              </v-layout>
              </div>
              
              <v-form :ref="'step'+(index+1)">
                <!--default step structure-->
                <slot
                  :name="'step'+(index+1)"
                  :jump="jump"
                  :next="next"
                  :prev="prev"
                  :event="steps.length-1 == index ? event : () =>{}"
                >
                  <v-layout row wrap class="x-dialogs__content">
                    <v-flex
                      v-for="(field,index) in step.fields"
                      :key="index"
                      xs12
                      sm12
                      lg12
                      class="pb-3 px-4"
                    >
                      <component v-if="field.is != 'date' && field.is != 'hour'"
                        v-model="item[field.name]"
                        :is="getFieldType(field.is)"
                        :type="field.type"
                        :items="(field.data || {}).items"
                        :item-text="(field.data || {}).text"
                        :item-value="(field.data || {}).value"
                        :hint="$i18n.t(field.hint)"
                        :error="errors && errorField(field)"
                        :rules="field.rules"
                        :label="$i18n.t(field.label)"
                        :prepend-icon="field.icon"
                        :selectable="field.selectable"
                        color="x-theme__color"
                      ></component>

                      <!-- Date Field  -->
                      <v-dialog v-if="field.is == 'date'"
                        :ref="'dialog'+(index+1)"
                        v-model="modals['dialog'+(index+1)]"
                        :return-value.sync="date"
                        lazy
                        full-width
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            :value="formatDate(item[field.name])"
                            :label="field.label"
                            :hint="$i18n.t(field.hint)"
                            :error="errors && errorField(field)"
                            :rules="field.rules"
                            :prepend-icon="field.icon"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker color="black" v-model="date" scrollable>
                          <v-spacer></v-spacer>
                          <!-- <v-btn flat color="primary" @click="modals['dialog'+(index+1)] = false">Cancel</v-btn> -->
                          <v-btn flat color="primary" @click="item[field.name] = date;modals['dialog'+(index+1)] = false">OK</v-btn>
                        </v-date-picker>
                      </v-dialog>

                      <!-- Hour Field  -->
                      <v-dialog v-if="field.is == 'hour'"
                        :ref="'dialog'+(index+1)"
                        v-model="modals['dialog'+(index+1)]"
                        :return-value.sync="time"
                        lazy
                        full-width
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            :value="item[field.name].substring(0,5)"
                            :label="field.label"
                            :hint="$i18n.t(field.hint)"
                            :error="errors && errorField(field)"
                            :rules="field.rules"
                            :prepend-icon="field.icon"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker v-model="time" format="24hr" full-width>
                          <v-spacer></v-spacer>
                          <!-- <v-btn flat color="primary" @click="modals['dialog'+(index+1)] = false">Cancel</v-btn> -->
                          <v-btn flat color="primary" @click="item[field.name] = time;modals['dialog'+(index+1)] = false">OK</v-btn>
                        </v-time-picker>
                      </v-dialog>
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
                      >{{ $i18n.t('GENERAL.save') }}</v-btn>
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
                </slot>
              </v-form>
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

export default class SaveDialog extends Vue {
  @Prop({ default: ()=>{return {}} }) item: any;
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
    if (!this.errors){
      this.$emit("event", this.item);
    } 
  }

  formatDate(date: string) {
    if(date){
      let [year, month, day] = date.substring(0,10).split('-');
      return `${day}/${month}/${year}`;
    }else{
      return null;
    }
  }


  saveDate(date:any){
    this.$refs['dialog1'][0].save(date.toString());
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
  
  // max-height: 520px;
  // overflow-y: auto;
  padding-top: 50px;
  padding-left: 90px;
  padding-right: 90px;
}

.date-box {
  input {
    border-style: solid;
     height: 30px !important;
     font-size: 16px;
   } 
  }
</style>
