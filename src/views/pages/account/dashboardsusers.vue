<script>
export default {};
</script>

<style></style>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8">
        <Stat />
        <RevenueAnalytics />
      </div>
      <div class="col-xl-4">
        <SalesAnalytics />
        <EarningReport />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <Sources />
      </div>
      <div class="col-lg-4">
        <RecentActivity />
      </div>
      <div class="col-lg-4">
        <RevenueLocation />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <Chat />
      </div>
      <div class="col-lg-8">
        <Transaction />
      </div>
    </div>
  </Layout>
</template>
