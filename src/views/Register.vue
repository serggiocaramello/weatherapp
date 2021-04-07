<template>
  <div>
    <div class="register-form--container">
      <Input inputType="text" placeholderText="Name" />
      <Input inputType="email" placeholderText="Email" />
      <Input inputType="password" placeholderText="Password" />
      <a class="btn btn-light btn-register">Register</a>
    </div>
  </div>
</template>

<script>
import Input from "@/components/form/Input";
export default {
  name: "Register",
  components: { Input },
};
</script>

<style lang="scss" scoped>
.register-form--container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.btn-register {
  margin-top: 1.5em;
}
</style>
