<template>
  <div class="container">
    <div class="q-pa-md row items-start q-gutter-md" style="max-width:400px">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6 text-center text-uppercase text-no-wrap		">
            Sign Up
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-sm" style="max-width: 400px">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                outlined
                v-model="email"
                label="Email *"
                type="email"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />

              <q-input
                outlined
                v-model="name"
                label="Nombre/s *"
                hint="Como aparece en tu dni"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                outlined
                v-model="lastname"
                label="Apellido/s *"
                hint="Como aparece en tu dni"
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
              <q-input
                outlined
                type="password"
                v-model="passwordConfirm"
                label="Confirm Password *"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                outlined
                type="password"
                v-model="pin"
                label="4 Digits PIN *"
                hint="This will be your secure private key"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                outlined
                type="password"
                v-model="pinConfirmation"
                label="Confirm PIN *"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-toggle
                v-model="acceptTerms"
                label="Declaro que los datos proporcionados son verdaderos"
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
