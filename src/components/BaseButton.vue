<template>
  <a
    v-if="href"
    :href="href"
    :class="['base-button', styleButton, size]"
    :disabled="isDisabled"
  >
    {{ label }}
  </a>
  <button
    v-else
    :class="['base-button', styleButton, size]"
    :disabled="isDisabled"
  >
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
    href: {
      default: "",
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
  text-align: center;
  border-radius: 8px;
  transition: 0.5s;

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

.small {
  font-size: 14px;
  line-height: 16px;
  padding: 6px 12px;
  margin: 6px;
  border-radius: 6px;
}

.margin {
  background-color: $orange;
  margin: 0;
}
</style>
