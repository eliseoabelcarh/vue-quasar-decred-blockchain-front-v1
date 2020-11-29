<template>
  <q-page style="padding-top: 80px">
    <div class="container">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="max-width:350px">
          <q-card-section>
            <div class="text-subtitle2 text-center text-uppercase">
              Esta información ha sido compartida contigo de forma confidencial
            </div>
          </q-card-section>

          <q-card-section>
            <q-banner flat style="padding:10px" class="bg-indigo-1">
              <template v-slot:avatar>
                <img
                  src="~assets/photoIdFrontThumb.jpg"
                  style="width: 100px; height: 64px"
                />
              </template>
              <div class="text-caption">
                Los datos acá mostrados fueron extraídos de la foto del DNI que
                se nos entregó
              </div>
            </q-banner>
          </q-card-section>
          <q-card-section>
            <div style="max-width: 400px">
              <q-list bordered padding>
                <q-item>
                  <q-item-section>
                    <q-item-label caption>Name/s</q-item-label>
                    <q-item-label overline>JAMIE FALKLAND</q-item-label>
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

                <q-separator spaced />
                <q-item>
                  <q-item-section>
                    <q-item-label caption>Lastname/s</q-item-label>
                    <q-item-label overline>ANDERSON</q-item-label>
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
                        <div class="text-caption">Lastname Verified</div>
                      </q-chip></q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="q-pa-sm" style="max-width: 300px">
              <div
                class="text-caption text-blue-grey-10"
                style="max-width:300px; margin:-10px; text-align:center"
              >
                Datos protegidos para ser vistos una sola vez, si actualiza la
                página no volverá a ver el contenido.
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-page-sticky position="top" expand class="bg-blue-grey-10 text-white">
      <q-toolbar>
        <q-btn flat round dense icon="fingerprint" />
        <!--   <q-toolbar-title>Uploads</q-toolbar-title>-->

        <div class="q-pa-md">
          <q-btn-dropdown flat color="white" label="About Verification">
            <q-list padding class="text-deep-purple-14">
              <q-item
                clickable
                v-close-popup
                :to="{ name: 'Signin' }"
                active-class="text-blue-grey-9"
              >
                <q-item-section>
                  <q-item-label>How it works</q-item-label>
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
      name: "FALKLAND ANDERSON",
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
