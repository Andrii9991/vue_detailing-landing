export default {
  namespaced: true,
  state: {
    allServices: [
      {
        image: require("@/assets/servicesvg/1.svg"),
        title: "Полірування авто",
        active: false,
        description:
          " Процес відновлення та покращення зовнішнього вигляду автомобіля шляхом видалення дрібних подряпин, потертостей, і надання кузову блиску.",
      },

      {
        image: require("@/assets/servicesvg/Мийка-підкапотного-простору.jpg"),
        title: "Мийка підкапотного простору",
        active: false,
        description:
          " Процес очищення внутрішньої частини капота та двигуна автомобіля від бруду, пилу та інших забруднень. Наша мийка підкапотного простору включає в себе використання спеціалізованих засобів та обладнання для ефективного видалення бруду та жиру з моторного відділення. ",
      },
      {
        image: require("@/assets/servicesvg/3.svg"),
        title: "Керамічне покриття",
        active: false,
        description:
          "Інноваційний продукт, який наносять на поверхню автомобіля для захисту від негативних впливів навколишнього середовища, таких як сонячні промені, усіляких реагентів, хімічних речовин та забруднення. Воно забезпечує автомобіль глибоким блиском, полегшує очищення та зберігання його вигляду.",
      },

      {
        image: require("@/assets/servicesvg/4.svg"),
        title: "Антидощ",
        active: false,
        description:
          "Cпеціальне захисне покриття для скла автомобіля, яке відштовхує воду і зменшує утворення крапель та слизької плівки на вікнах під час дощу. Це полегшує очищення скла, покращує видимість та забезпечує безпеку під час водіння в дощову погоду.",
      },
      {
        image: require("@/assets/servicesvg/5.svg"),
        title: "Детейлінг мийка",
        active: false,
        description:
          "Високоякісна мийка автомобіля, що включає в себе ретельне очищення всіх поверхонь та деталей, включаючи кузов, салон, диски, вікна та оптику. Ми використовуємо спеціальні засоби та техніки для досягнення бездоганного результату, забезпечуючи максимальну чистоту, блиск та охайність вашого авто.",
      },
      {
        image: require("@/assets/servicesvg/6.svg"),
        title: "Відновлення оптики",
        active: false,
        description:
          "Процес видалення жовклості та дефектів з фар автомобіля для покращення їх яскравості та безпеки під час водіння.",
      },
      {
        image: require("@/assets/servicesvg/7.svg"),
        title: "Детейлинг хімчистка",
        active: false,
        description:
          "Включає очищення салону автомобіля, включаючи сидіння, килими, панелі, підлогу, стелю, люк, багажне відділення та всі інші елементи інтерʼєру.",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
};
