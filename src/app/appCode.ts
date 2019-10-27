
import { Vue } from "vue-property-decorator";

export default class AppCode extends Vue {
    created() {
        this.init();
    }

    init() {
        if (!this.$store.getters.userInfo) {
            // this.$router.push("/");
        }
    }

    pageRouter(route: string) {
        this.$router.push(route);
    }
}
