<template>
  <div>
    <section id="footer">
      <div class="main-footer">
        <div class="logoinfo" data-aos="fade-up">
          <div class="contact-details">
            <h1>Контакти</h1>
            <ul class="details-list">
              <li class="contacts-item">
                <div class="fa fa-location"></div>
                <i
                  class="pi pi-map-marker"
                  style="color: white; font-size: 1rem"
                ></i>
                <a
                  class="contacts-link"
                  href="https://www.google.com.ua/maps/place/%D0%94%D0%B5%D1%82%D0%B5%D0%B9%D0%BB%D1%96%D0%BD%D0%B3+%D1%81%D1%82%D1%83%D0%B4%D1%96%D1%8F+%C2%ABDestup%C2%BB/@49.5369738,25.5192715,17z/data=!3m1!4b1!4m6!3m5!1s0x473037c4aa60da59:0xe17025d4708c2ee4!8m2!3d49.5369703!4d25.5218464!16s%2Fg%2F11vs977h3w?hl=ru&entry=ttu"
                  ><strong>м.Тернопіль, Підгороднє,</strong>
                  <p>вул. Тараса Шевченка</p></a
                >
              </li>
              <li class="contacts-item">
                <div class="fa fa-phone"></div>
                <i
                  class="pi pi-phone"
                  style="color: white; font-size: 1rem"
                ></i>
                <a class="contacts-link" href="tel:+380 98 459 70 64"
                  >+380 98 459 70 64</a
                >
              </li>
              <li>
                <div class="fa fa-envelope"></div>
                <i
                  class="pi pi-envelope"
                  style="color: white; font-size: 1rem"
                ></i>
                <a class="contacts-link" href="stup@gmail.com "
                  >stup@gmail.com</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="com" data-aos="fade-up">
          <ul>
            <li><a href="#about-us">Про нас</a></li>
            <li><a href="#services">Наші послуги</a></li>
            <li><a href="#portfolio">Портфоліо</a></li>
            <li><a href="#contacts">Контакти</a></li>
          </ul>
        </div>
        <div class="info" data-aos="fade-up">
          <h1>Соціальні мережі</h1>
          <div class="sociallogos">
            <div class="logobox">
              <a href="https://www.instagram.com/de_stup?igsh=N21wc3g2cHFid3Jh">
                <i
                  class="pi pi-instagram"
                  style="font-size: 2rem; color: white"
                ></i
              ></a>
              <a href="https://t.me/stup44">
                <i
                  class="pi pi-telegram"
                  style="font-size: 2rem; color: white"
                ></i>
              </a>

              <a href="https://www.tiktok.com/@de_stup?_t=8lvesgA2XB7">
                <i
                  class="pi pi-tiktok"
                  style="color: white; font-size: 2rem"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.main-footer {
  padding: 70px 0;
  display: flex;
  justify-content: space-evenly;
  background-color: black;
}

.main-footer ul {
  list-style: none;
}

.main-footer h1 {
  font-size: 22px;
  line-height: 117%;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 500;
}

.main-footer h2 {
  color: #ffffff;
  font-weight: 500;
}

.main-footer ul li a {
  color: #ffffffcc;
  text-decoration: none;
}

footer {
  background-color: #19302e;
  border-top: 1px solid #6eb981;
  font-size: 17px;
  padding: 15px 5px;
  color: #ffffff;
  text-align: center;
}

footer a {
  text-decoration: none;
  color: #ffffff;
}

.logoinfo p {
  font-size: 17px;
  margin-top: 5px;
  padding-left: 22px;
}

.contact-details {
  margin-top: 20px;
}

.contact-details li {
  list-style: none;
  margin: 10px 0;
}

.contact-details li a {
  text-decoration: none;
  color: #f1f1f1;
}

.contact-details .fa {
  color: #f1f1f1;
  margin-right: 10px;
}

.sociallogos {
  padding: 20px 0;
}

.sociallogos .logobox {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  text-decoration: none;
  color: white;
  font-size: 22px;
}

.com ul li {
  padding: 5px 0;
}

.contacts-link {
  margin-left: 8px;
}

@media only screen and (max-width: 749px) {
  .main-footer {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    padding: 20px 0;
  }
}

@media (max-width: 480px) {
  .main-footer {
    grid-template-columns: 1fr;
  }
  .sociallogos {
    padding: 20px 0;
  }
  .com {
    padding: 20px 0;
  }
}
</style>
