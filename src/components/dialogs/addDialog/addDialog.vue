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
                      <component
                        v-if="field.is != 'date' && field.is != 'hour'"
                        v-model="item[field.name]"
                        :is="getFieldType(field.is)"
                        :type="field.type"
                        :items="(field.data || {}).items"
                        :item-text="(field.data || {}).text"
                        :item-value="(field.data || {}).value"
                        :error="errors && errorField(field)"
                        :rules="field.rules"
                        :label="$i18n.t(field.label)"
                        :prepend-icon="field.icon"
                        :selectable="field.selectable"
                        color="x-theme__color"
                      >
                      </component>

                      <!-- Hours BOX  -->
                      <div v-if="field.is == 'hour'">
                        <p>Manana</p>
                        <div class="hours-box">
                          <v-btn
                            small
                            class="hour-item"
                            v-for="(hour,i) in getHours(field.workTime).slice(0,5)"
                            :key="i"
                          >{{ hour }}</v-btn>
                        </div>
                        <p>Tarde</p>
                        <div class="hours-box">
                          <v-btn
                            small
                            class="hour-item"
                            v-for="(hour,i) in getHours(field.workTime).slice(5)"
                            :key="i"
                          >{{ hour }}</v-btn>
                        </div>
                      </div>


                      <!-- Date Field  -->
                      <v-dialog
                        v-if="field.is == 'date'"
                        :ref="'dialog'+(index+1)"
                        v-model="modals['dialog'+(index+1)]"
                        :return-value.sync="date"
                        lazy
                        full-width
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="item[field.name]"
                            :label="field.label"
                            :prepend-icon="field.icon"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>

                        <v-date-picker color="black" v-model="date" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn
                            flat
                            color="primary"
                            @click="item[field.name] = date; 
                            modals['dialog'+(index+1)] = false"
                          >OK</v-btn>
                        </v-date-picker>
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
import { Prop, Watch, Component } from "vue-property-decorator";
import { VSelect, VTextField, VCheckbox } from "vuetify/lib";

import AddDialogCode from "./addDialogCode";
import "./addDialogStyle.scss";

@Component({})
export default class AddDialog extends AddDialogCode {
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
}
</script>