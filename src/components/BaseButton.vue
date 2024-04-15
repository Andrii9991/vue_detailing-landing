<template>
  <button :class="['base-button', styleButton, size]" :disabled="isDisabled">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      required: false,
      default: "Кнопка",
    },
    isDisabled: {
      require: false,
      type: Boolean,
    },
    styleButton: {
      default: "",
    },

    size: {
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  color: $white;
  background: none;
  padding: 8px 16px;
  margin: 8px;
  box-shadow: 0 0 0 1px $white inset;
  border-radius: 8px;

  &:hover {
    background-color: $orange;
    cursor: pointer;
  }

  &:disabled {
    background-color: $grey-lite;
    box-shadow: inset 0 0 0 2px $grey-lite;
    color: $white;
  }
}

.orange {
  background-color: $orange;
}

.big {
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  padding: 16px;
}

.margin {
  background-color: $orange;
  margin: 0;
}
</style>
