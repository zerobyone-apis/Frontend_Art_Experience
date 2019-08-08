<template>
  <div id="home">

    <v-img transition="slide-y-transition" height="100%" :aspect-ratio="16/9" src="http://www.integra-aes.com/site/wp-content/uploads/2012/11/Grey-website-background-1024x640.jpg">    
      <div style="padding-top:calc(100% - 70%);">
      
        <v-layout row wrap>
          <v-flex xs12 xl12 sm12>
            <v-layout row wrap class="text-xs-center">
              <v-flex xs12 xl12 sm12>
                <span class="wellcome">Bienvenido a ArtExperience</span>
                <v-divider class="pt-3"></v-divider>
                <span style="color:white">Crea y gestione tus reservas y actividades comodamente</span>
              </v-flex>
      
              <v-layout row wrap class="pt-4" >
                <v-flex xs6 xl6 sm6 class="text-xs-right pr-4">
                  <v-btn class="button-access" dark outline @click="dialogs.login = true">
                    Acceder
                  </v-btn>
                </v-flex>
                <v-flex xs6 xl6 sm6 class="text-xs-left pl-4">
                  <v-btn class="button-access" dark outline @click="dialogs.register = true">
                    Registrarse
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-layout>    
          </v-flex>
        </v-layout>

      </div>
    </v-img>
    
    <add-dialog v-model="dialogs.login" :steps="stepsLogin" @event="login" button-text="Acceder"></add-dialog>
    <add-dialog v-model="dialogs.register" :steps="stepsRegistration" @event="register" button-text="Registrarse"></add-dialog>
    
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import XComponent from "@/components/XComponent.ts";
import User from "@/controllers/User.ts";
import AddDialog from "@/components/dialogs/add.vue";

@Component({
  components: {
    AddDialog
  }
})
export default class Home extends XComponent {
  private user: User = new User();

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
    repitPassword: [
      (v: any) => !!v || this.translate("VALIDATIONS.required"),
      (v: any) => (v || "").length > 8 || this.translate("VALIDATIONS.password"),
      (v: any) => (v == this.user.password) || "las contrase;as no coiciden"
    ],
    phone: []
  };

  private stepsLogin: any = [
    {
      title: "Acceder",
      fields: [
      {
          is: "input",
          name: "username",
          label:"nombre de usuario",
          hint: "USER.hintUsername",
          icon: "person",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          type: "password",
          name: "password",
          label:"contraseña",
          hint: "USER.hintPassword",
          icon: "vpn_key",
          rules: this.rules.required,
          required: true
        }
      ]
    }
  ];

  private stepsRegistration: any = [
    {
      title: "Registrarse",
      fields: [
        {
          is: "input",
          name: "name",
          label: "nombre",
          hint: "USER.hintName",
          icon: "person",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "username",
          label: "nombre de usuario",
          hint: "USER.hintUsername",
          icon: "person",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          name: "picture",
          label: "imagen de perfil",
          hint: "USER.hintPicture",
          icon: "account_circle",
          rules: this.rules.required,
          required: true
        }
      ]
    },
    {
      title: "Registrarse",
      fields: [
        {
          is: "input",
          name: "email",
          label: "email",
          hint: "USER.hintemail",
          icon: "email",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          type:"password",
          name: "password",
          label: "contraseña",
          hint: "USER.hintPassword",
          icon: "vpn_key",
          rules: this.rules.required,
          required: true
        },
        {
          is: "input",
          type:"password",
          name: "repitPassword",
          label: "repita contraseña",
          hint: "USER.hintPassword",
          icon: "vpn_key",
          rules: this.rules.required,
          required: true
        }
      ]
    }
  ];

  /**
   * @name ADD
   * @description add item
   */
  async register(user) {
    try {
      this.user = Object.assign(this.user, user);
      await this.user.add();
      
      this.$store.commit("setUserInfo", JSON.stringify(this.user));
      this.$router.push("/MyEvents");
      this.dialogs.register = false;
    } catch (error) {
      this.$notify({ group: 'foo', type: 'warn',
        title: 'Error',
        text: error.data.message
      });
    }
  }

  /**
   * @name LOGIN
   * @description add item
   */
   async login(user) {
    try {  
      this.user = Object.assign(this.user, user);
      await this.user.get();

      this.$store.commit("setUserInfo", JSON.stringify(this.user));
      this.$router.push("/MyEvents");
      this.dialogs.login = false;
    } catch (error) {
      this.$notify({ group: 'foo', type: 'warn',
        title: 'Error de autenticacion',
        text: error.data.message
      });
    }
  }
}
</script>

<style lang="scss">
  #home {
    position:absolute;
    width: 100%!important;
    height:100%!important;
    background-color: rgb(0, 0, 0);
  }

  #box-login {
    position: relative;
    bottom: 30px;
    left: 0px;
    width: 300px;
    height: 300px;
    background-color: red;

  }

  .button-access {
    width: 150px;
    opacity: 0.9;
  }

  .login-box {
    position: absolute;
    width: 600px;
    height: 800px;
    background-color: #00000059;
    border-radius: 20px;
  }

  .wellcome {
    font-size:x-large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    color:rgba(255, 255, 255, 0.904)
  }


</style>