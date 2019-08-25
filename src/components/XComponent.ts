import { Vue, Component } from 'vue-property-decorator';

export default class XComponent extends Vue {
  protected loading: any = { table: false, request: false };
  protected dialogs: any = {
    add: false, 
    save: false, 
    delete: false, 
    login: false, 
    register: false,
    imgSettings: false
  };
  protected wizard: number = 1;
  protected errors: any = { wizard: false };
  protected tableConf: any = {
    headers: [],
    search: {
      show: true,
      text: ''
    }
  };

  translate(text: string) {
    return this.$i18n.t(text);
  }
}