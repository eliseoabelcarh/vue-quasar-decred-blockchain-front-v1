<template>
  <q-page style="padding-top: 80px">
    <div class="container">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" style="max-width:330px">
          <q-card-section>
            <div class="text-h6 text-center text-uppercase 		">
              Selecciona sólo los datos que vas a compartir
            </div>
          </q-card-section>

          <q-card-section>
            <div class="q-gutter-sm">
              <q-list bordered>
                <!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
      -->

                <q-item
                  tag="label"
                  v-ripple
                  class="q-pa-sm flat-borders q-ma-sm "
                >
                  <q-item-section avatar>
                    <q-checkbox
                      v-model="datos"
                      val="nombres"
                      color="deep-purple-14"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>Name/s</q-item-label>
                    <q-item-label>JAMIE FALKLAND</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  tag="label"
                  v-ripple
                  class="q-pa-sm flat-borders q-ma-sm "
                >
                  <q-item-section avatar>
                    <q-checkbox
                      v-model="datos"
                      val="apellidos"
                      color="deep-purple-14"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>Lastname/s</q-item-label>
                    <q-item-label>ANDERSON</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator />
                <!--
                <q-item
                  tag="label"
                  v-ripple
                  class="q-pa-sm flat-borders q-ma-sm "
                >
                  <q-item-section avatar top>
                    <q-checkbox
                      v-model="datos"
                      val="fotoDniFront"
                      color="deep-purple-14"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label caption>Front with Watermark</q-item-label>
                    <q-item-label>Photo ID</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-avatar rounded size="xl">
                      <img src="~assets/photoIdFront.jpg" />
                    </q-avatar>
                  </q-item-section>
                </q-item>

-->
              </q-list>

              <div
                class="text-caption text-blue-grey-10"
                style="max-width:200px; text-align:center;margin:20px auto -20px auto"
              >
                <q-input
                  style="max-width:200px"
                  outlined
                  type="password"
                  v-model="pin"
                  label="Confirm 4 Digits PIN *"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Please type something'
                  ]"
                />
              </div>
              <div
                class="text-caption text-blue-grey-10"
                style="max-width:300px; text-align:center ;margin:20px auto;"
              >
                <q-btn
                  style="min-width:100%"
                  class="btn-fixed-width"
                  outline
                  color="deep-purple-14"
                  label="generar link para compartir"
                  icon="share"
                />
                <div
                  class="text-caption text-blue-grey-10"
                  style="max-width:300px; text-align:center"
                >
                  Los datos mostrados serán visibles una única vez
                </div>
              </div>
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
      datos: ["nombres"],
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
