<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Stat from "./widget";

import SalesAnalytics from "./sales-analytics";
import EarningReport from "./earning";

import RecentActivity from "./recent-activity";

import Chat from "./chat";
import Transaction from './transaction';

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Stat,
  
    SalesAnalytics,
    EarningReport,
 
    RecentActivity,
 
    Chat,
    Transaction
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Jintai"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8">
        <Stat />
      
      </div>
      <div class="col-xl-4">
        <SalesAnalytics />
        <EarningReport />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
       <Chat />
      </div>
      <div class="col-lg-4">
        <RecentActivity />
      </div>
      <div class="col-lg-12">
             <Transaction />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">

      </div>
      <div class="col-lg-8">
      
      </div>
    </div>
  </Layout>
</template>