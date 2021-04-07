<template>
  <div>
    <form action="#" @submit.prevent="login" class="login-form--container">
      <Input
        inputType="email"
        placeholderText="Email"
        name="email"
        personKey="email"
        @changePerson="updatePerson($event)"
      />
      <Input
        inputType="password"
        placeholderText="Password"
        name="password"
        personKey="password"
        @changePerson="updatePerson($event)"
      />
      <button type="submit" class="btn btn-light btn-login">Login</button>
    </form>
    <pre>{{ person }}</pre>
  </div>
</template>

<script>
import { ref } from "vue";
import Input from "@/components/form/Input";
export default {
  name: "Login",
  components: { Input },
  setup() {
    const person = ref({
      email: null,
      password: null,
    });
    const updatePerson = (e) => {
      person.value[e.key] = e.value;
    };

    const login = () => console.log("logueado!");

    return { person, updatePerson, login };
  },
};
</script>

<style lang="scss" scoped>
.login-form--container {
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.btn-login {
  margin-top: 1.5em;
}
</style>
