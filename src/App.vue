<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToElement() {
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
              });
            }
          });
        });
      });
    },
  },

  mounted() {
    this.scrollToElement();
  },
};
</script>

<style lang="scss"></style>
