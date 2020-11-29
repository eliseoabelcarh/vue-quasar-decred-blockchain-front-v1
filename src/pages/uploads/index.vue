<template>
  <q-page style="padding-top: 80px">
    <div class="container">
      <router-view></router-view>
    </div>

    <q-page-sticky position="top" expand class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title>Uploads</q-toolbar-title>

        <div class="q-pa-md">
          <q-btn-dropdown flat color="white" label="Go to">
            <q-list padding class="text-deep-purple-14">
              <q-item
                clickable
                v-close-popup
                :to="{ name: 'Uploads' }"
                active-class="text-blue-grey-9"
              >
                <q-item-section>
                  <q-item-label>Photo Id Front</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{ name: 'Signin' }"
                active-class="text-blue-grey-9"
              >
                <q-item-section>
                  <q-item-label>Photo Id Back</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-page-sticky>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      name: null,
      lastname: null,
      password: null,
      passwordConfirm: null,
      acceptTerms: false
    };
  },

  methods: {
    onSubmit() {
      if (this.acceptTerms !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.email = null;
      this.name = null;
      this.lastname = null;
      this.password = null;
      this.passwordConfirm = null;
      this.acceptTerms = false;
    }
  }
};
</script>
<style>
.container {
  margin: 0 auto;
}
</style>
