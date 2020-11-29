<template>
  <div class="q-pa-md">
    <q-btn
      v-if="!authenticated"
      @click="loginWithGoogle"
      flat
      label="Signin"
      icon="fas fa-sign-in-alt"
      :to="{ name: 'Signin' }"
    />
    |
    <q-btn
      v-if="!authenticated"
      @click="loginWithGoogle"
      flat
      label="Signup"
      icon="far fa-id-badge"
      :to="{ name: 'Signup' }"
    />
    <!-- <q-btn @click="logout" flat label="logout" /> -->
  </div>
</template>

<script>
//import firebase from "firebase";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      //formData: { email: "test@bluuweb.cl", password: "123123" }
    };
  },
  methods: {
    loginWithGoogle: function() {
      /*  console.log("LogiN with google");
      this.$store
        .dispatch("auth/loginWithGoogle")
        .then(response => {
          console.log("response en LOGIN", response);
          this.$store
            .dispatch("user/setUserId")
            .then(userId => {
              if (userId) {
                this.$store.dispatch("auth/setauthenticated", true);
                let id;
                if (userId !== 1) {
                  id = 1;
                } else {
                  id = userId;
                }
                this.$store.dispatch("user/setDataOfCurrentUser", id);
              }
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log("err en login", err)); */
    },
    logout() {
      console.log("logout succeess");
      this.$store.dispatch("auth/logout");
    }
  },
  computed: {
    ...mapState("user", ["authenticated"])
  }
};
</script>

<style>
</style>
