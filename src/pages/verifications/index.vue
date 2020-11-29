<template>
  <q-page style="padding-top: 80px">
    <div class="container">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="max-width:330px">
          <q-card-section>
            <div class="text-h6 text-center text-uppercase 		">
              Solicitar Verificación de tus datos
            </div>
          </q-card-section>

          <q-card-section>
            <div class="q-gutter-sm">
              <q-list bordered>
                <q-item
                  tag="label"
                  v-ripple
                  class="q-pa-sm flat-borders q-ma-sm "
                >
                  <q-item-section>
                    <q-item-label caption>Name/s</q-item-label>
                    <q-item-label>JAMIE FALKLAND</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption
                      ><q-chip
                        square
                        class="bg-white"
                        style="border:1px solid #BDBDBD"
                      >
                        <q-avatar
                          icon="verified_user"
                          color="green-13"
                          text-color="white"
                        />
                        <div class="text-caption">Name Verified</div>
                      </q-chip></q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-item
                  tag="label"
                  v-ripple
                  class="q-pa-sm flat-borders q-ma-sm "
                >
                  <q-item-section>
                    <q-item-label caption>Lastname/s</q-item-label>
                    <q-item-label>ANDERSON</q-item-label>
                  </q-item-section>

                  <q-item-section avatar>
                    <q-btn
                      outline
                      color="deep-purple-14"
                      label="Apply now"
                      size="sm"
                    />
                  </q-item-section>
                </q-item>
                <q-separator />
              </q-list>

              <q-item class="q-pa-sm flat-borders q-ma-sm " align="center">
                <q-item-section>
                  <q-item-label caption
                    >Leeremos automáticamente la foto del DNI guardado en la
                    blockchain de DECRED y verificaremos si los datos de la foto
                    correspoden con los que registraste</q-item-label
                  >
                </q-item-section>
              </q-item>
            </div>

            <!-- <div class="q-px-sm q-mt-sm">
              Your selection is: <strong>{{ color }}</strong>
            </div> -->
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-page-sticky position="top" expand class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="map" />
        <q-toolbar-title>Share your Identity</q-toolbar-title>
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
      datos: ["nombres", "apellidos"],
      pin: null
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
