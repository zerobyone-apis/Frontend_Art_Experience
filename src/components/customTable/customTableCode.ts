
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({ components: {} })
export default class CustomTableCode extends Vue {
    @Prop() value!: any[];
    @Prop({
        default: {
            headers: [],
            search: { show: false }
        }
    })
    conf!: any;
    @Prop({ default: () => [] }) items!: any[];
    @Prop({ default: () => [] }) multiple!: any[];
    @Prop({ default: "category" }) itemIcon!: string;
    @Prop({ default: null }) pagination!: any;
    @Prop({ default: false }) loading!: boolean;

    private search: string = "";
    private filters: any = {};
    private ordered: boolean = false;
    private showMultiple: boolean = !!this.multiple.length;
    private rowsPerPage: number[] = [8, 10, 15, 20, 25];

    get selectedItems(): any[] {
        return this.value;
    }

    set selectedItems(value) {
        this.$emit("input", value);
    }

    /**
     * @name FILTERED
     * @desc Returns items filtered by search input
     */
    get filtered(): any[] {
        if (!this.pagination) {
            return (this.items || []).filter(item => {
                let valid = false;
                Object.keys(item).forEach(key => {
                    if (
                        item[key]
                            .toString()
                            .toLowerCase()
                            .indexOf(this.search.toLowerCase()) > -1
                    ) {
                        valid = true;
                    }
                });
                return valid;
            });
        } else {
            return this.items;
        }
    }

    /**
     * @name HEADERS_WIDTH
     * @desc Returns items width based on item quantity
     */
    get headersWidth(): number {
        return 100 / this.conf.headers.length;
    }

    /**
     * @name THEME
     * @desc Returns globally stored theme
     */
    get theme(): any {
        return this.$store.state.theme;
    }

    /**
     * @name PAGINATION_FIRST_ITEM
     * @description returns first number showing in table pagination
     */
    get pFirstItem(): number {
        let { page, limit, total } = this.pagination;
        return +page * +limit - +limit + 1;
    }

    /**
     * @name PAGINATION_LAST_ITEM
     * @description returns last row showing in table pagination
     */
    get pLastItem(): number {
        let last = this.pFirstItem + +this.pagination.limit;
        return last > this.pagination.total ? this.pagination.total : last;
    }

    /**
     * @name ON_PAGINATION_LIMIT_CHANGE
     * @desc reset values of pagination where value of limit change
     */
    @Watch("pagination.limit")
    onPaginationLimitChange() {
        this.$emit("get", this.pagination);
        this.selectedItems = [];
    }

    @Watch("search")
    onSearchChange() {
        this.updateSelection();
    }

    @Watch("selectedItems")
    onSelectedItemsChange() {
        this.$emit("value", this.selectedItems);
    }

    mounted() {
        this.init();
        this.conf.headers.map((header: any) => {
            this.filters[header.value] = false;
        });
    }

    /**
     * @name INIT
     * @desc checks whether the properties sent to the component
     *       are correct
     */
    init() {
        if (!this.conf.headers.length > 0) {
            throw "No headers found in configuration object";
        }
    }

    /**
      * @name OPEN
      * @desc Emits "open" event when table row is clicked
      */
    open(item: object) {
        this.$emit("open", item);
    }


    /**
     * @name EDIT
     * @desc Emits "edit" event when row edit button is clicked
     */
    edit(item: object) {
        this.$emit("edit", item);
    }

    /**
     * @name ADD
     * @desc Emits "new" event when new button is clicked
     */
    add() {
        this.$emit("new");
    }

    /**
     * @name FILTER_DESC
     * @desc Filters items desc based on row clicked
     */
    filterAtoZ(key: string) {
        this.items.sort((a, b) => {
            return this.getValueByHeader(b, key) > this.getValueByHeader(a, key)
                ? -1
                : 1;
            return 0;
        });

        this.filters[key] = !this.filters[key];
        this.updateSelection();
    }

    /**
     * @name FILTER_ASC
     * @desc Filters items asc based on row clicked
     */
    filterZtoA(key: string) {
        this.items.sort((a, b) => {
            return this.getValueByHeader(b, key) < this.getValueByHeader(a, key)
                ? -1
                : 1;
            return 0;
        });

        this.filters[key] = !this.filters[key];
        this.updateSelection();
    }

    /**
     * @name GET_VALUE_BY_HEADER
     * @desc obtain the value of the header when have multiple indexs
     */
    getValueByHeader(item: any, header: string) {
        let value = item;
        header.split(".").forEach(subKey => {
            value = value[subKey];
        });
        return value;
    }

    /**
     * @name UPDATE_SELECTION
     * @desc Updates selected item reference
     */
    updateSelection() {
        this.selectedItems = Object.assign([], this.selectedItems);
    }

    /**
     * @name PREVIOUS_PAGE
     * @desc changes values of pagination to prev page
     */
    previousPage() {
        let { limit, page } = this.pagination;

        if (page > 1) {
            page -= 1;
        }
        Object.assign(this.pagination, { limit, page });
        this.$emit("get", this.pagination);
    }

    /**
     * @name NEXT_PAGE
     * @desc changes values of pagination to next page
     */
    pNextPage() {
        let { limit, page, total } = this.pagination;

        if (page * limit < total) {
            page += 1;
        }

        Object.assign(this.pagination, { page });
        this.$emit("get", this.pagination);
    }

    pSearch() {
        if (this.pagination) {
            this.pagination.criteria = this.search;
            this.$emit("get", this.pagination);
        }
    }

    formatDate(date: string) {
        if (date) {
            let [year, month, day] = date.substring(0, 10).split('-');
            return `${day}/${month}/${year}`;
        } else {
            return null;
        }
    }
}