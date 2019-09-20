
import XComponent from "../../components/XComponent";
import User from "../../models/User";

export default class HomeCode extends XComponent {

    private fields: any = { 
        login: [
            { text: "username", icon: "account_circle", value: "" },
            { text: "password", icon: "vpn_key", value: "" }
        ],
        register: [
            { text: "username", icon: "account_circle", value: "" },
            { text: "password", icon: "vpn_key", value: "" },
            { text: "email", icon: "email", value: "" },
        ]
    }













    //old
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
                    label: "nombre de usuario",
                    hint: "USER.hintUsername",
                    icon: "person",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    type: "password",
                    name: "password",
                    label: "contraseña",
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
                    type: "password",
                    name: "password",
                    label: "contraseña",
                    hint: "USER.hintPassword",
                    icon: "vpn_key",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    type: "password",
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
            this.$notify({
                group: 'foo', type: 'warn',
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
            this.$notify({
                group: 'foo', type: 'warn',
                title: 'Error de autenticacion',
                text: error.data.message
            });
        }
    }
}