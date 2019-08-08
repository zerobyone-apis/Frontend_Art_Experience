<template>
  <div>
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
            <!-- :hint="$i18n.t(field.hint)" -->
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

            <!-- Hour Field  -->
            <v-dialog
              v-if="field.is == 'hour'"
              :ref="'dialog'+(index+1)"
              v-model="modals['dialog'+(index+1)]"
              :return-value.sync="time"
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
              <v-time-picker v-model="time" full-width>
                <v-spacer></v-spacer>
                <!-- <v-btn flat color="primary" @click="modals['dialog'+(index+1)] = false">Cancel</v-btn> -->
                <v-btn
                  flat
                  color="primary"
                  @click="item[field.name] = time;modals['dialog'+(index+1)] = false"
                >OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-flex>

          <!--footer-->
        </v-layout>
      </slot>
    </v-form>
  </div>
</template>

<script>
export default class Body {
    
}
</script>