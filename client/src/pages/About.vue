<template>
  <q-page>
    <div class="q-pa-lg">
      <h3>О нас</h3>
      <h4 class="q-pa-md">О компании</h4>
      <p class="q-pa-md">
        Lorem ipsum dolor sit amet. Non sint tempore qui corrupti optio sed enim
        nulla qui sapiente eius qui nesciunt doloribus et mollitia dolorum non
        itaque facilis. In repellat voluptatibus aut perferendis aliquid eos
        rerum quis ut laborum provident et illo fugiat in labore mollitia. Aut
        eius deleniti eos esse architecto eos accusantium mollitia eos
        consequatur earum in officiis inventore a iste maiores! Non quos esse
        qui voluptatem dolor ab fugiat expedita. Eos velit atque ut labore
        asperiores non accusamus delectus sed porro officia et dolor aliquid vel
        voluptatem illum? Sit deleniti aperiam qui aliquam maxime et sint
        voluptatem qui rerum quaerat. Eos rerum praesentium 33 autem nihil id
        quasi distinctio vel debitis dolorem ut rerum neque est ratione neque ab
        eius autem. Est laborum dignissimos eos internos sint in saepe
        asperiores. Aut quas sunt non omnis ratione At internos possimus ea nemo
        odit est quaerat eveniet. Sed temporibus omnis id eius repellendus nam
        sequi asperiores est dolor ducimus ea quidem aliquam!
      </p>
      <div class="q-pa-md">
        <div class="flex">
          <div>
            <p class="text-h5">График работы:</p>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="watch_later" />
                </q-item-section>
                <q-item-section>Понедельник 08:00 - 18:00.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="watch_later" />
                </q-item-section>
                <q-item-section>Вторник 08:00 - 18:00.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="watch_later" />
                </q-item-section>
                <q-item-section>Среда 08:00 - 18:00.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="watch_later" />
                </q-item-section>
                <q-item-section>Четверг 10:00 - 20:00.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="watch_later" />
                </q-item-section>
                <q-item-section>Пятница 08:00 - 18:00.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="secondary" name="watch_later" />
                </q-item-section>
                <q-item-section>Суббота 09:00 - 15:00.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="accent" name="watch_later" />
                </q-item-section>
                <q-item-section>Воскресенье Выходной</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </div>
          <div>
            <p class="text-h5">Наши контакты</p>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="phone" />
                </q-item-section>
                <q-item-section>8 923 999 99 99</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="dark" name="mail" />
                </q-item-section>
                <q-item-section>store@store.com</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <p class="q-pa-md text-h6">Вы можете найти нас по адресу:</p>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad9bdd618fdda1239d7739b8a77bb0ed37f467fcd738949532e79461b49109eec&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "contacts",
});
</script>
<style lang="scss"></style>
