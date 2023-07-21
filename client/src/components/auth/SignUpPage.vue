<template>
  <q-page class="q-pa-md flex-center" style="width: 60%; margin: 0 auto">
    <div>
      <q-btn>
        <router-link to="/">На Главную</router-link>
      </q-btn>
    </div>
    <div>
      <h5>Регистрация</h5>
      <q-form @submit="Submit()">
        <q-input
          outlined
          v-model="form.name"
          label="Имя"
          type="text"
          lazy-rules
          :rules="[required]"
        >
        </q-input>
        <q-input
          outlined
          v-model="form.surname"
          label="Фамилия"
          type="text"
          lazy-rules
          :rules="[required]"
        >
        </q-input>

        <q-input
          outlined
          v-model="form.email"
          label="Введите вашу почту"
          type="email"
          lazy-rules
          :rules="[required]"
        >
        </q-input>
        <q-input
          outlined
          v-model="form.password"
          label="Введите ваш пароль"
          type="text"
          lazy-rules
          :rules="[required, passwordValid]"
        >
        </q-input>

        <div class="q-mt-md">
          <q-btn label="Отправить" type="submit" color="primary" />
        </div>
        <p class="q-pt-md">
          Уже есть аккаунт? <router-link to="/login">Войдите</router-link>
        </p>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import useValidators from "src/use/formValidation";
import { registration } from "src/services/registration";
import { useRouter } from "vue-router";

const { required } = useValidators();
const { passwordValid } = useValidators();
const router = useRouter();

const form = ref({
  email: "",
  name: "",
  surname: "",
  password: "",
});

const Submit = () => {
  registration(form.value);
  router.push("/login");
};
</script>
