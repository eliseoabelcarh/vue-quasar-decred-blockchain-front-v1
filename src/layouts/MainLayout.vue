
<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-deep-purple-14 text-white">
      <q-toolbar>
        <q-avatar>
          <q-btn flat round dense icon="whatshot" :to="{ name: 'Home' }" />
        </q-avatar>
        <q-toolbar-title><!--tituloooooo --></q-toolbar-title>

        <CardAccount
          v-if="authenticated"
          :profile="currentUserProfile"
        ></CardAccount>

        <q-btn
          v-if="authenticated"
          dense
          flat
          round
          icon="menu"
          @click="right = !right"
        />

        <div v-else><AuthNav /></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="authenticated"
      show-if-above
      v-model="right"
      side="right"
      bordered
    >
      <!-- drawer content -->
      <RightMenu v-if="authenticated" :profile="currentUserProfile"></RightMenu>
    </q-drawer>

    <q-page-container class="container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CardAccount: () => import("../components/CardAccount"),
    RightMenu: () => import("../components/RightMenu"),
    AuthNav: () => import("../components/AuthNav")
  },
  computed: {
    ...mapState("user", ["authenticated"]),
    //...mapGetters("user", ["getCurrentUserProfile", "getAllAccounts"]),

    currentUserProfile: function() {
      if (this.authenticated) {
        return null;
        //this.getCurrentUserProfile;
      } else {
        return null;
      }
    }
  },

  data() {
    return {
      right: false
    };
  }
};
</script>

<style>
.container {
  /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
}
</style>
