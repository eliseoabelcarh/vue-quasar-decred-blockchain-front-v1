<template>
  <div class="container">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="max-width:350px">
        <q-card-section>
          <div
            class="text-h6 text-center text-uppercase"
            style="margin-bottom:-50px"
          >
            Carga la foto de tu DNI
          </div>
        </q-card-section>

        <q-card-section>
          <q-img
            src="~assets/photoIdFront.jpg"
            style="max-width: 300px; height: 140px;"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Foto DNI - Front
            </div>
          </q-img>
        </q-card-section>

        <q-card-section>
          <div
            class="text-caption text-blue-grey-10"
            style="width:300px; text-align:center;margin:-20px auto"
            caption
          >
            La foto se guardará en la blockchain de DECRED, garantizando la
            inmutabilidad del archivo.
          </div>
        </q-card-section>
        <q-card-section>
          <div style="max-width: 300px">
            <q-file
              clearable
              outlined
              color="deep-purple-14"
              standout
              bottom-slots
              v-model="file"
              label="Cargar Nueva Imagen"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
              <template v-slot:append>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </div>

          <div class="text-caption text-blue-grey-10">
            <p
              class="text-caption text-blue-grey-10"
              style="width:300px; text-align:center;margin:-10px auto 10px auto"
            >
              Si cargas una foto nueva, deberás solicitar nuevamente la
              verificación de datos
            </p>

            <q-input
              style="max-width:200px; text-align:center;margin:0 auto"
              outlined
              type="password"
              v-model="pin"
              label="Confirm 4 Digits PIN *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />
            <div style="min-width:300px; text-align:center;margin:0 auto">
              <q-btn
                style="min-width:100%"
                class="btn-fixed-width"
                outline
                color="deep-purple-14"
                label="GUARDAR"
                icon="save"
              />
            </div>
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
      file: null,
      pin: null
    };
  },

  methods: {
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    },
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
      this.file = null;
    }
  }
};
</script>
<style>
.container {
  margin: 0 auto;
}
</style>
