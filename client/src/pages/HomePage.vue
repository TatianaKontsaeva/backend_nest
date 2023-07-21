<template>
  <q-page class="flex flex-center q-px-lg q-pt-md q-mb-md">
    <h3 class="main-title">Магазин электронной техники фирмы Apple</h3>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="blue"
          navigation
          padding
          arrows
          height="500px"
          class="text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap bg1">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap bg2">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap bg3">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap bg4">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
});
</script>
<style>
.bg1 {
  background-image: url(../assets/img/main.webp);
  background-repeat: no-repeat;
}
.bg2 {
  background-image: url(../assets/img/apple-products.webp);
  background-repeat: no-repeat;
}
.bg3 {
  background-image: url(../assets/img/bg2.jpeg);
  background-repeat: no-repeat;
}
.bg4 {
  background-image: url(../assets/img/Appledev.webp);
  background-repeat: no-repeat;
}
@media (max-width: 768px) {
  .main-title {
    font-size: 28px;
    line-height: 1.2;
    text-align: center;
  }
}
</style>
