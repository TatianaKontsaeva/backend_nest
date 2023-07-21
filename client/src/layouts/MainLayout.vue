<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-gradient flex justify-between q-pt-md q-mb-md">
      <div>
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <div class="q-px-lg q-pt-md q-mb-md">
            <div class="text-h3">Apple Store</div>
          </div>
        </q-toolbar>
      </div>
      <div>
        <q-toolbar class="header__bottom q-px-lg q-pt-md q-mb-md">
          <div class="bottom-header__container">
            <div class="bottom-header__column">
              <q-item id="auth-links">
                <q-btn
                  class="actions-header_login"
                  label="Войти"
                  icon="login"
                  type="button"
                  to="/auth"
                />
              </q-item>
              <div class="q-ml-md">
                <div id="user-button"></div>
              </div>
            </div>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-list padding>
        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Главная страница </q-item-section>
        </q-item>

        <q-item to="/catalog" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list_alt" />
          </q-item-section>
          <q-item-section>
            <q-btn-dropdown label="Каталог" outline>
              <div class="row no-wrap q-pa-md"></div>
            </q-btn-dropdown>
          </q-item-section>
        </q-item>
        <q-item to="/help" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="contact_support" />
          </q-item-section>
          <q-item-section> Если нужна помощь </q-item-section>
        </q-item>
        <q-item to="/about" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info_outline" />
          </q-item-section>
          <q-item-section> О нас </q-item-section>
        </q-item>

        <q-item to="/cart" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="shopping_basket" />
          </q-item-section>
          <q-item-section>
            Товары в корзине:
            <div>Общая стоимость:</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss">
.bg-gradient {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 27, 121, 1) 50%,
    rgba(57, 0, 255, 1) 100%
  );
}
</style>
