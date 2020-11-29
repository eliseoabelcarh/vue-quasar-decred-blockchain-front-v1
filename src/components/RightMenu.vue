<template>
  <a>
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <q-list padding class="text-deep-purple-14">
        <q-item
          clickable
          v-ripple
          :to="{ name: 'Uploads' }"
          active-class="text-blue-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>Uploads</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          :to="{ name: 'Verifications' }"
          active-class="text-blue-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="verified_user" />
          </q-item-section>
          <q-item-section>Get Verification</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :to="{ name: 'Share' }"
          active-class="text-blue-grey-9"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-share" />
          </q-item-section>
          <q-item-section>Share</q-item-section>
        </q-item>

        <!--
        <q-item
          clickable
          v-ripple
          :to="{ name: 'Signup' }"
          active-class="text-blue-grey-10"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

-->
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="~assets/fondo-avatar.svg"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="~assets/profile-pic.png" />
        </q-avatar>
        <div class="text-weight-bold">JAMIE</div>
        <div>@jamie_fark</div>
      </div>
    </q-img>
  </a>
</template>

<script>
export default {
  name: "RightMenu",
  components: {
    // RightMenuBalances: () => import("./RightMenuBalances.vue")
  },
  props: {
    right: Boolean,
    profile: Object,
    accounts: Object
  },
  data() {
    return {
      expanded: true
    };
  }
};
</script>

<style>
</style>
