<template>
  <q-page class="q-pa-md flex-center column">
    <div>
      <q-btn>
        <router-link to="/">На Главную</router-link>
      </q-btn>
    </div>
    <div>
      <h5>Вход</h5>
      <q-form @submit="Submit()" @reset="EnterReset">
        <q-input
          rounded
          v-model="email"
          label="Введите вашу почту"
          type="email"
          lazy-rules
          :rules="[required]"
        >
        </q-input>
        <q-input
          rounded
          v-model="password"
          label="Введите ваш пароль"
          type="password"
          lazy-rules
          :rules="[required]"
        >
        </q-input>
        <div class="q-mt-md">
          <q-btn label="Отправить" type="submit" color="primary" />
          <q-btn
            label="Сбросить"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
        <p class="q-pt-md">
          Не зарегистрированы?
          <router-link to="/signup">Зарегистрируйтесь</router-link>
        </p>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import useValidators from "src/use/formValidation";
import { authentication } from "src/services/authentication";
import { useRouter } from "vue-router";

const { required } = useValidators();
const error = ref("");
const router = useRouter();

const email = ref("");
const password = ref("");

const EnterReset = () => {
  email.value = "";
  password.value = "";
};

const Submit = () => {
  console.log("email", email.value);
  console.log("password", password.value);

  let resAuth = null;

  authentication({
    email: email.value,
    password: password.value,
  })
    .then((res) => {
      resAuth = res;
      console.log(resAuth);

      localStorage.setItem("token", resAuth.accessToken);
      localStorage.setItem("refreshToken", resAuth.refreshToken);

      router.push("/");
    })
    .catch((err) => {
      console.log("Ошибка: ", err);
      error.value = "Неверный логин или пароль";
    });
};
</script>
