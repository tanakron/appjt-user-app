<script>
/**
 * Recent activity component
 */
export default {
  data() {
    return {
      activityData: [
        {
          icon: "ri-edit-2-fill",
          date: "17 mar, 2022 ",
          time: "12:07 am",
          name: "นางสาว  ณิชกานต์   อาดำ",
          title: "kpi ส่งรายงานผิดวัน",
        },
          {
          icon: "ri-edit-2-fill",
          date: "17 mar, 2022 ",
          time: "12:07 am",
          name: "นางสาว  ฟาติมะ   เจ๊ะมะ",
          title: "kpi ไม่สวมหน้ากาก",
        },
        {
          icon: "ri-edit-2-fill",
          date: "17 mar, 2022 ",
          time: "12:07 am",
          name: "นางสาว  ฟาติมะ   เจ๊ะมะ",
          title: "kpi ไม่สวมหน้ากาก",
        },
        {
          icon: "ri-edit-2-fill",
          date: "17 mar, 2022 ",
          time: "12:07 am",
          name: "นางสาว  ฟาติมะ   เจ๊ะมะ",
          title: "kpi ไม่สวมหน้ากาก",
        },
        
      ],
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <b-dropdown
        right
        toggle-class="arrow-none card-drop"
        class="float-right"
        variant="white"
      >
        <template v-slot:button-content>
          <i class="mdi mdi-dots-vertical"></i>
        </template>
        <!-- item-->
        <b-dropdown-item>Report - ทั้งหมด</b-dropdown-item>
        <!-- item-->
        <b-dropdown-item>Kpi-เพิ่ม</b-dropdown-item>
        <!-- item-->
        <b-dropdown-item>Kpi-ลบ</b-dropdown-item>
              <!-- item-->
        <b-dropdown-item>Export Report</b-dropdown-item>
      </b-dropdown>

      <h4 class="card-title mb-4">Kpi Report</h4>

      <div data-simplebar style="max-height: 330px;">
        <ul class="list-unstyled activity-wid">
          <li
            class="activity-list"
            v-for="(data, index) in activityData"
            :key="index"
          >
            <div class="activity-icon avatar-xs">
              <span
                class="avatar-title bg-soft-primary text-primary rounded-circle"
              >
                <i :class="`${data.icon}`"></i>
              </span>
            </div>
            <div>
              <div>
                <h5 class="font-size-13">
                  {{ data.date }}
                  <small class="text-muted">{{ data.time }}</small>
                </h5>
              </div>
              <div>
                <p class="text-muted mb-0">{{ data.name }}</p>
              </div>
              <div>
                <p class="text-muted mb-0">{{ data.title }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
