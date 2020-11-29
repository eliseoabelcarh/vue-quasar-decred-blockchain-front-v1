<template>
  <div class="container">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="min-width:330px">
        <q-card-section>
          <div class="text-h6 text-center text-uppercase text-no-wrap		">
            Sign In
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-sm" style="max-width: 400px">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                v-model="email"
                label="Email *"
                outlined
                type="email"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />

              <q-input
                 outlined
                type="password"
                v-model="password"
                label="Password *"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />

              <div>
                <q-btn label="Enviar" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
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
