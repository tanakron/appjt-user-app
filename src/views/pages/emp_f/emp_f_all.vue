<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import axios from "axios";

export default {
  page: {
    title: "Advanced Table",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      users: [],

      title: "พนักงาน ทั้งหมด",
      items: [
        {
          name: "",
        },
        {
          text: "Tables",
          href: "/",
        },
        {
          text: "Advanced",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "emp_id", sortable: true },
        { key: "emp_fullname", sortable: true },
        { key: "emp_start", sortable: true },
        { key: "emp_bithday", sortable: true },
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.users.length;
    },
  },
  async mounted() {
    let users = await axios.get("http://18.136.103.55/users/emp_allusers");
    this.users = users.data;

    // Set the initial number of items

    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

  </Layout>
</template>
