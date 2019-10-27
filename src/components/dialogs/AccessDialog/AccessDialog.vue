<template v-cloak>
  <v-dialog
    v-model="model"
    elevation="20"
    persistent
    overlay-color="black"
    transition="slide-x-transition"
    :fullscreen="$vuetify.breakpoint.name == 'xs'"
    width="600"
    height="700"
  >
    <!-- dialog content  -->
    <div class="access-dialog-content">
      <!-- close  -->

      <div class="banner">
        <v-btn dark @click="model=false" fab text small class="btn_close">
          <v-icon>close</v-icon>
        </v-btn>
      </div>

      <v-stepper class="stepper" v-model="wizard">
        <v-stepper-items>
          <!-- steps  -->
          <v-stepper-content v-for="(step,index) in steps" :key="index+1" :step="index+1">
            <!-- header  -->
            <div class="header-dialog">
              <p class="text step-title">{{ step.title }}</p>
            </div>

            <!-- step content -->
            <div class="step-content">
              <!-- automatic content -->
              <div class="automatic-content" v-if="step.custom!='custom'">
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
                      <!-- :error="errors && errorField(field)" -->
                      <component
                        v-if="field.is != 'date' && field.is != 'hour'"
                        v-model="access[field.name]"
                        :is="getFieldType(field.is)"
                        :type="field.type"
                        :items="(field.data || {}).items"
                        :item-text="(field.data || {}).text"
                        :item-value="(field.data || {}).value"
                        :rules="field.rules"
                        :label="field.label"
                        :prepend-icon="field.icon"
                        :selectable="field.selectable"
                        color="x-theme__color"
                      ></component>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </div>
            <!-- /step content  -->

            <!-- footer -->
            <div class="footer-dialog">
              <v-btn
                v-if="steps.length == index+1"
                class="footer-button"
                v-bind:v-model="access"
                :disabled="checkSuccessStep()"
                @click.native="event"
                text
                small
              >{{ buttonText }}</v-btn>
              <v-btn
                v-if="wizard != steps.length"
                text
                small
                class="footer-button"
                v-bind:v-model="access"
                :disabled="checkSuccessStep()"
                @click.native="wizard += 1"
              >siguiente</v-btn>
              <v-btn
                v-if="wizard > 1"
                text
                small
                class="footer-button"
                @click.native="wizard -= 1"
              >volver</v-btn>
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

import AccessDialogCode from "./AccessDialogCode";
import "./AccessDialogStyle.scss";
import "../../../styles/fonts.scss";

@Component({
  components: {
    VSelect, VTextField, VCheckbox
  }
})
export default class AccessDialog extends AccessDialogCode {
  @Prop({ default: "Crear" }) buttonText: any;
  @Prop({ default: false }) value!: boolean;
}
</script>