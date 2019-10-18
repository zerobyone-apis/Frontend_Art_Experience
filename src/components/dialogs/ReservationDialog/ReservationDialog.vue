<template>
  <v-dialog
    v-model="model"
    persistent
    overlay-color="black"
    transition="slide-x-transition"
    :fullscreen="$vuetify.breakpoint.name == 'xs'"
  >
    <div class="reservation-dialog">
      <v-btn @click="model=false" fab text small class="btn_close">
        <v-icon>close</v-icon>
      </v-btn>

      <v-stepper v-model="wizard">
        <v-stepper-items>
          <v-stepper-content v-for="(step,index) in steps" :key="index+1" :step="index+1">
            <!-- custom content -->
            <div class="content" v-if="index==0">
              <!-- list employees -->

              <p
                class="text step-title"
              >Seleccione el barbero con el que quiere realizar el servicio</p>

              <div class="items-list">
                <div
                  class="item"
                  v-for="(item,index) in data.employees"
                  :key="index"
                  @click="selectedBarber = item"
                  data-aos="fade-down"
                  data-aos-duration="600"
                >
                  
                  <v-img class="item-img-big" :src="item.picture.img" aspect-ratio="1"></v-img>
                  <p class="item-info">{{ item.info.job }}</p>
                  <p class="item-name">{{ item.info.name }}</p>
                  
                </div>
              </div>

              <div class="selected-item">
                <p class="select-item-name font-text">Barbero seleccionado</p>
                <div class="item">
                  <p class="item-info">{{ selectedBarber.info.job }}</p>
                  <img class="item-img" :src="selectedBarber.picture.img" aspect-ratio="1" />
                  <p class="item-name">{{ selectedBarber.info.name }}</p>
                </div>
              </div>
            </div>

            <!-- custom content -->
            <div class="content" v-if="index==1">
              <!-- list jobs -->
              <p class="text step-title">Seleccione el servicio que desea realizar</p>

              <div class="items-list">
                <div
                  class="item"
                  v-for="(item,index) in data.jobs"
                  :key="index"
                  @click="selectedJob = item"
                  data-aos="fade-down"
                  data-aos-duration="600"
                >
                  <p class="item-info">{{ item.name }}</p>
                  <v-img class="item-img-big" :src="item.img" aspect-ratio="1"></v-img>
                  <p class="item-cost">{{ "$"+item.cost }}</p>
                </div>
              </div>

              <div class="selected-item">
                <p class="select-item-name font-text">Servicio seleccionado</p>
                <div class="item">
                  <p class="item-info">{{ selectedJob.name }}</p>
                  <img class="item-img" :src="selectedJob.img" aspect-ratio="1" />
                  <!-- <p class="item-cost">{{ "$"+ selectedJob.cost }}</p> -->
                </div>
              </div>
            </div>

            <!-- automatic content -->
            <div class="content" v-if="step.title!='custom'">
              <p class="text step-title">{{step.title}}</p>

              <div class="automatic-box">
                <v-layout row wrap class="layout-box">
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
                    ></component>

                    <!-- Hours BOX -->
                    <div v-if="field.is == 'hour'" class="hours-item">
                      <div class="hours-box">
                        <p class="font-text hours-name">Manaña</p>
                        <v-btn
                          text
                          small
                          class="hour-item font-text"
                          v-for="(hour,i) in data.hours.week"
                          :key="i"
                          @click="selectHour('week', i)"
                        >{{ hour }}</v-btn>
                      </div>

                      <div class="hours-box">
                        <p class="font-text hours-name">Tarde</p>
                        <v-btn
                          small
                          class="hour-item font-text"
                          v-for="(hour,i) in data.hours.saturday"
                          :key="i"
                          text
                          @click="selectHour('saturday', i)"
                        >{{ hour }}</v-btn>
                      </div>
                    </div>

                    <!-- Date Field -->
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
                          text
                          color="primary"
                          @click="item[field.name] = date; 
                          modals['dialog'+(index+1)] = false"
                        >OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>
                </v-layout>
              </div>
            </div>

            <!-- footer -->
            <div class="footer-dialog">
              <v-btn
                v-if="steps.length == index+1"
                text
                small
                class="footer-button"
                @click.native="event"
              >{{ buttonText }}</v-btn>

              <v-btn
                v-if="wizard != steps.length"
                text
                small
                class="footer-button"
                @click.native="wizard += 1"
              >{{ $i18n.t('GENERAL.next') }}</v-btn>

              <v-btn
                v-if="wizard > 1"
                text
                small
                class="footer-button"
                @click.native="wizard -= 1"
              >{{ $i18n.t('GENERAL.prev') }}</v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { Prop, Watch, Component } from "vue-property-decorator";
import { VSelect, VTextField, VCheckbox } from "vuetify/lib";

import ReservationDialogCode from "./ReservationDialogCode";
import "./ReservationDialogStyle.scss";
import "../../../styles/fonts.scss";

@Component({})
export default class ReservationDialog extends ReservationDialogCode {
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