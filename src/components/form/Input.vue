<template>
  <div class="form-input">
    <label>
      <input
        :type="inputType"
        :name="name"
        v-model="inputValue"
        @input="changePerson(personKey)"
        required
        class="form-input--input"
        :class="{ errors: errors }"
        @invalid="invalidateForm"
      />
      <span class="placeholder">{{ placeholderText }}</span>
    </label>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Input",
  props: {
    placeholderText: String,
    inputType: String,
    name: String,
    personKey: String,
  },
  emits: ["changePerson"],
  setup(props, context) {
    const inputValue = ref("");
    const changePerson = (key) => {
      context.emit("changePerson", { key, value: inputValue.value });
    };

    let errors = ref(false);
    const invalidateForm = () => {
      errors.value = true;
    };
    return { inputValue, changePerson, errors, invalidateForm };
  },
};
</script>

<style lang="scss" scoped>
$highlight-color: #ffec65;
$placeholder-padding: 8px;
$placeholder-font-size: 16px;
$placeholder-font-size-small: 14px;
$placeholder-transition: 200ms ease-in-out;
$input-font-size: 16px;
$input-top: 15px;
$input-height: 30px;
$input-border-color: $text-color;

.form-input {
  margin: 1.5em 0;
  width: 100%;

  label {
    position: relative;
    display: block;
    width: 100%;
    min-height: $input-height + $input-top;
  }

  .placeholder {
    color: $text-color;
    position: absolute;
    display: block;
    top: ($input-height / 2) + $placeholder-padding;
    z-index: 2;
    font-size: $placeholder-font-size;
    transition: all $placeholder-transition;
    width: 100%;
    cursor: text;
  }

  // Para eliminar el borde rojo del input
  input:invalid {
    border: none;
  }

  input:required {
    box-shadow: none;
  }

  input.form-input--input {
    position: absolute;
    top: $input-top;
    z-index: 1;
    width: 100%;
    font-size: $input-font-size;
    border: 0;
    border-bottom: 1px solid $input-border-color;
    transition: border-color $placeholder-transition;
    background-color: $primary-color;
    color: $text-color;
    outline: none;
    padding: 0;
    margin: 0;
    height: $input-height;
  }

  input:focus,
  input:valid {
    & + .placeholder {
      top: 0;
      cursor: inherit;
      font-size: $placeholder-font-size-small;
      color: $highlight-color;
    }

    border-bottom: 2px solid $highlight-color;
  }
  .error-message {
    display: none;
    color: red;
  }

  /* ✨ The magic ✨ */
  input.errors {
    &:invalid {
      border: 1px solid red;
    }
  }
  .error-message.errors {
    display: block;
  }
}
</style>
