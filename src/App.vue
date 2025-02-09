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

<style lang="scss">
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #ebebeb;
  -webkit-border-radius: 20px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #626466;
}
</style>
