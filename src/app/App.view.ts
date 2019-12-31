
import vue from 'vue';

export default class AppCode extends vue {
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
