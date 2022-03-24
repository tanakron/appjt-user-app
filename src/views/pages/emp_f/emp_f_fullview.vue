<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import { dataUsers} from "./datauser";
/**
 * Cards component
 */
export default {
  page: {
    title: "พนักงาน",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, 
 
  },

  data() {
  
    return {
         dataUsers: dataUsers,
      title: "พนักงานทั้งหมด",
      items: [
        {
          text: "รายการพนักงาน",
          href: "/"
        },
        {
          text: "พนักงานทั้งหมด",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="titles" />
  
      <!-- end col -->


    <div class="row" >
      <div class="col-4">
        <h4 class="my-3">พนักงาน</h4>
        <b-card-group deck v-for="(dataUserss,index) in  dataUsers" :key="index">
          <b-card
          
            :img-src="require('@/assets/images/small/img-4.jpg')"
            img-alt="Card image"
            img-top
            class="mb-4"
          >
            <b-card-title >
              <h4 class="card-title"> {{dataUserss.type}} </h4>
              
            </b-card-title>
             <div class="row">
<div class="col-6">
            <p
              class="card-text">
              {{dataUserss.iduser}}
         </p>
         <p
              class="card-text">
              {{dataUserss.idcards}}
         </p>
         <p
              class="card-text">
              {{dataUserss.nameth}}
         </p><p
              class="card-text">
              {{dataUserss.nameeng}}
         </p>
         <p
              class="card-text">
              {{dataUserss.sex}}
         </p>
         </div>
         <div class="col-6">
            <p
              class="card-text">
              {{dataUserss.management}}
         </p>
         <p
              class="card-text">
              {{dataUserss.department}}
         </p>
         <p
              class="card-text">
              {{dataUserss.position}}
         </p><p
              class="card-text">
              {{dataUserss.status}}
         </p>
         <p
              class="card-text">
              {{dataUserss.probationary}}
         </p>
         <p
              class="card-text">
              {{dataUserss.jobpacking}}
         </p>
         <p
              class="card-text">
              {{dataUserss.jobout}}
         </p>
         <p
              class="card-text">
              {{dataUserss.ot}}
         </p>
         </div>
          </div>
            <p class="card-text">
              <small class="text-muted">{{dataUserss.time}}</small>
            </p>
          </b-card>
          
        </b-card-group>
        
      </div>
    </div>
    <!-- end row -->

  </Layout>
</template>