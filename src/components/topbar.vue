<script>
import simplebar from "simplebar-vue";
import i18n from "../i18n";

export default {
  data() {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/thai.png"),
          language: "th",
          title: "Thai",
        },
      ],
      current_language: "en",
    };
  },
  components: { simplebar },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    setLanguage(locale) {
      i18n.locale = locale;
      this.current_language = i18n.locale;
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/jtlogo.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/jtlogo.png" alt height="30" />
            </span>
          </a>

          <a href="index.html" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/jtlogo.png" alt height="30" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/jtlogo.png" alt height="40" />
            </span>
          </a>
        </div>

        <button
          @click="toggleMenu"
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item waves-effect"
          id="vertical-menu-btn"
        >
          <i class="ri-menu-2-line align-middle"></i>
        </button>

        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input
              type="text"
              class="form-control"
              :placeholder="$t('navbar.search.text')"
            />
            <span class="ri-search-line"></span>
          </div>
        </form>

        <b-dropdown
          variant="black"
          class="dropdown-mega d-none d-lg-block ml-2"
          toggle-class="header-item"
          menu-class="dropdown-megamenu"
        >
          <template v-slot:button-content>
            {{ $t("หมวดหมู่พิเศษ") }}
            <i class="mdi mdi-chevron-down"></i>
          </template>
          <div class="row">
            <div class="col-sm-8">
              <div class="row">
                <div class="col-md-4">
                  <h5 class="font-size-14 mt-0">{{ $t("ฝ่ายบุคคล") }}</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("เงินเดือนพนักงาน")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{ $t("OT พนักงาน") }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("สรุปการทำงานพนักงานประจำปี")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("สรุปการทำงานพนักงานประจำเดือน")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("สรุปKPI พนักงานประจำเดือน")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("สรุปKPI พนักงานประจำปี")
                      }}</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <h5 class="font-size-14 mt-0">{{ $t("แผนก ODB") }}</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">{{ $t("แจ้ง KPI") }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{ $t("รายงาน KPI") }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{ $t("เพิ่ม KPI") }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ข้อมูลฝึกอบรม")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{ $t("แจ้งฝึกอบรม") }}</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <h5 class="font-size-14 mt-0">{{ $t("ขออนุมัติ") }}</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("จัดซื้ออุปกรณ์สือสาร")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{ $t("โอที พนักงาน") }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ขอ Work for Home")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ขออุปกรณ์ ออกนอกสถานที่")
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row">
                <div class="col-sm-6">
                  <h5 class="font-size-14 mt-0">{{ $t("ขออนุมัติ") }}</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">{{ $t("การลา") }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ปรับตำแหน่งงาน")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ขอเพิ่มพนักงานในแผนก")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ปรับเงินเดือน")
                      }}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">{{
                        $t("ผ่านโปรทดลองงาน")
                      }}</a>
                    </li>
                  </ul>
                </div>

                <div class="col-sm-5">
                  <div>
                    <img
                      src="@/assets/images/megamenu-img.png"
                      alt
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-dropdown>
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block d-lg-none ml-2">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            id="page-header-search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ri-search-line"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="ri-search-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <b-dropdown variant="white" right toggle-class="header-item">
          <template v-slot:button-content>
            <img
              class
              src="@/assets/images/flags/thai.png"
              alt="Header Language"
              height="16"
            />
          </template>
          <b-dropdown-item
            class="notify-item"
            v-for="(entry, i) in languages"
            :key="`Lang${i}`"
            :value="entry"
            @click="setLanguage(entry.language)"
            :link-class="{ active: entry.language === current_language }"
          >
            <img
              :src="`${entry.flag}`"
              alt="user-image"
              class="mr-1"
              height="12"
            />
            <span class="align-middle">{{ entry.title }}</span>
          </b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          class="d-none d-lg-inline-block d-lg-inline-block ml-1"
          menu-class="dropdown-menu-lg"
          right
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="ri-apps-2-line"></i>
          </template>
          <div class="px-lg-2">
            <div class="row no-gutters">
              <div class="col">
                <a
                  class="dropdown-icon-item"
                  href="https://drive.google.com/drive/my-drive"
                >
                  <img src="@/assets/images/drive.jpg" alt="Google" />
                  <span>{{ $t("Google Drive") }}</span>
                </a>
              </div>
              <div class="col">
                <a
                  class="dropdown-icon-item"
                  href="http://mail.jintaijewelry.com/webmail/login/"
                >
                  <img
                    src="@/assets/images/brands/mailjintai.png"
                    alt="Jintaimail"
                  />
                  <span>{{ $t("Jintaimail") }}</span>
                </a>
              </div>
              <div class="col">
                <a
                  class="dropdown-icon-item"
                  href="https://mail.google.com/mail/u/0/?ogbl#inbox"
                >
                  <img src="@/assets/images/brands/gmail2.png" alt="gmail" />
                  <span>{{ $t("Gmail") }}</span>
                </a>
              </div>
            </div>

            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="http://192.168.0.213/it/">
                  <img src="@/assets/images/brands/service.png" alt="dropbox" />
                  <span>{{ $t("แจ้งซ่อม") }}</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="http://192.168.0.213/">
                  <img
                    src="@/assets/images/brands/jintaiapp.png"
                    alt="โปรแกรมโรงงาน"
                  />
                  <span>{{ $t("โปรแกรมโรงงาน") }}</span>
                </a>
              </div>
            </div>
          </div>
        </b-dropdown>

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            @click="initFullScreen"
          >
            <i class="ri-fullscreen-line"></i>
          </button>
        </div>

        <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="ri-notification-3-line"></i>
            <span class="noti-dot"></span>
          </template>
          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">
                  {{ $t("navbar.dropdown.notification.text") }}
                </h6>
              </div>
              <div class="col-auto">
                <a href="#!" class="small">{{
                  $t("navbar.dropdown.notification.subtext")
                }}</a>
              </div>
            </div>
          </div>
          <simplebar style="max-height: 230px;">
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span
                    class="avatar-title bg-primary rounded-circle font-size-16"
                  >
                    <i class="ri-shopping-cart-line"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.order.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.order.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.order.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-3.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.james.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.james.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.james.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span
                    class="avatar-title bg-success rounded-circle font-size-16"
                  >
                    <i class="ri-checkbox-circle-line"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.item.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.item.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.item.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">
                    {{ $t("navbar.dropdown.notification.salena.title") }}
                  </h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">
                      {{ $t("navbar.dropdown.notification.salena.text") }}
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i>
                      {{ $t("navbar.dropdown.notification.salena.time") }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </simplebar>
          <div class="p-2 border-top">
            <a
              class="btn btn-sm btn-link font-size-14 btn-block text-center"
              href="javascript:void(0)"
            >
              <i class="mdi mdi-arrow-right-circle mr-1"></i>
              {{ $t("navbar.dropdown.notification.button") }}
            </a>
          </div>
        </b-dropdown>

        <b-dropdown
          right
          variant="black"
          toggle-class="header-item"
          class="d-inline-block user-dropdown"
        >
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/avatar-2.jpg"
              alt="Header Avatar"
            />
            <span class="d-none d-xl-inline-block ml-1">{{
              $t("navbar.dropdown.kevin.text")
            }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <a class="dropdown-item" href="#">
            <i class="ri-user-line align-middle mr-1"></i>
            {{ $t("admin") }}
          </a>

          <a class="dropdown-item d-block" href="#">
            <span class="badge badge-success float-right mt-1">11</span>
            <i class="ri-settings-2-line align-middle mr-1"></i>
            {{ $t("navbar.dropdown.kevin.list.settings") }}
          </a>

          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
            {{ $t("navbar.dropdown.kevin.list.logout") }}
          </a>
        </b-dropdown>

        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="ri-settings-2-line toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.notify-item {
  .active {
    color: #16181b;
    background-color: #f8f9fa;
  }
}
</style>
