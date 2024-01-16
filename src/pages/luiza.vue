<template>
  <header>
    <nav>
      <div class="container">
        <div class="flex justify-content-between">
          <div>
            <div class="flex align-items-center">
              <img class="logo-img" src="../assets/imges/лого.svg" alt="логотип кухню">
              <div class="nav-carta">
                <img class="carta-img" src="../assets/imges/image%202.svg" alt="">
                <div>
                  <p class="carta-text">Яндекс Карты</p>
                  <div class="flex">
                    <img src="../assets/imges/Star%201.svg" alt="">
                    <img src="../assets/imges/Star%201.svg" alt="">
                    <img src="../assets/imges/Star%201.svg" alt="">
                    <img src="../assets/imges/Star%201.svg" alt="">
                    <img src="../assets/imges/Star%201.svg" alt="">
                    <p class="rating">5,0</p>
                  </div>
                  <p class="rating-text">81 отзыв • 100 оценок</p>
                </div>
              </div>
              <div class="main-address " style="margin-left: 20px;">
                <p class="nav__address-title">Производство кухонь на заказ </p>
                <p class="nav__address">Анапа, ул. Крылова, д. 27</p>
              </div>
            </div>
          </div>
          <div class="nav-info">
            <div>
              <p class="nav__address-title">Производство кухонь на заказ </p>
              <p class="nav__address">Анапа, ул. Крылова, д. 27</p>
            </div>
            <div class="flex align-items-center">
              <a class="link" href="">
                <img class="nav__whatsapp-icon" src="../assets/imges/whatsapp.svg" alt="whatsapp-icon"></a>
              <a class="link" href="">
                <img class="nav__telegram-icon" src="../assets/imges/telegram.svg" alt="telegram-icon"></a>
              <a class="nav-number" href="telto:+7 (988)-311-77-88">+7 (988)-311-77-88</a>
              <button class="nav-btn">Заказать звонок</button>
            </div>
          </div>
          <div class="burger">
            <div class="burger-menu" @click="toggleMenu">
              <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
              <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
              <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
            </div>

            <transition name="fade">
              <div v-if="isMenuOpen" class="menu">
                <!-- Здесь разместите пункты меню -->
                <div>
                  <div class="flex">
                    <a class="link" href="">
                      <img class="nav__whatsapp-icon" src="../assets/imges/whatsapp.svg" alt="whatsapp-icon"></a>
                    <a class="link" href="">
                      <img class="nav__telegram-icon" src="../assets/imges/telegram.svg" alt="telegram-icon"></a>
                  </div>
                  <div class="flex">
                    <a class="nav-number" href="telto:+7 (988)-311-77-88">+7 (988)-311-77-88</a>
                  </div>
                  <button class="nav-btn">Заказать звонок</button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </nav>
    <div class="header__bg">
      <div class="container">
        <div class="box-block__relative">
          <div class="block__relative block__relative-width1 ">
            <p class="block__relative-text">Огромный выбор
              бытовой техники</p>
            <img class="img-absolute1" src="../assets/imges/block__item-img.svg" alt="">
          </div>
        </div>
        <div class="flex align-items-center">
          <h1 class="header__title">Изготовим роскошную
            дизайнерскую кухню </h1>
          <div class="block__absolute">
            <div class="block__relative block__relative-width">
              <p class="block__relative-text">Изысканный гарнитур
                любого размера</p>
              <img class="img-absolute" src="../assets/imges/block__item-img.svg" alt="">
            </div>
          </div>
        </div>
        <div class="flex align-items-center">
          <img class="header__img-wallet" src="../assets/imges/иконка%20кошелька.svg" alt="">
          <p class="header__block-text">Цена на 12-24% ниже, <br> <span class="header__block-span">
чем у посредников</span></p>
          <div class="header__box">
            <div class="block__relative block__relative-width1">
              <p class="block__relative-text">Выдающиеся
                сорта древесины</p>
              <img class="img-absolute1" src="../assets/imges/block__item-img.svg" alt="">
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="header__block__item">
            <p class="block__item-text">Рассчитаем стоимость кухни-мечты</p>
            <button class="block__item-btn">Заказать расчёт</button>
          </div>
          <div>
            <img class="header__img-arrow" src="../assets/imges/cтрелка.svg" alt="">
          </div>
        </div>
      </div>
    </div>


  </header>


  <div class="grid second__col" >
    <div class="col-fixed" >
      <div class="text-center p-3 border-round-sm  font-bold">
        <img class="grid__img"  src="../assets/img/image%2048.png" alt="" >
      </div>
    </div>
    <div class="col bloc__col "  >
      <div class="text-center p-3 border-round-sm  font-bold">
        <div class="item">
          <h1 class="item__title">Наши преимущества  </h1>
          <div class="link"> </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="text-center p-3 border-round-sm font-bold">
              <div class="flex">
                <img class="col__imges" src="../assets/img/иконка%20кухни.svg" alt="">
                <div class="ml-2">
                  <p class="col__text">C 2000 г на рынке</p>
                  <p class="col_-text-two">наши кухни выбрали   10 000+ семей</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="text-center p-3 border-round-sm  font-bold ">
              <div class="flex">
                <img class="col__imges" src="../assets/img/иконка%20сроки.svg" alt="">
                <div class="ml-2">
                  <p class="col__text">Сжатые сроки </p>
                  <p class="col_-text-two">изготовление кухни от 20 дней </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="text-center p-3 border-round-sm  font-bold ">
              <div class="flex">
                <img class="col__imges" src="../assets/img/иконка%20дизайн%20проект.svg" alt="">
                <div class="ml-2">
                  <p class="col__text">Дизайн проект </p>
                  <p class="col_-text-two">бесплатно за 30 минут</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style>
nav{
  background-color: #002B45E5;
  padding: 36px 0 35px 0;
}
.logo-img{
  width: 170px;
  height: 50px;
}
.nav-carta{
  display: flex;
}
.carta-img{
  margin-left: 30px;
}
.carta-text{
  color: #FFF;
  font-family: Yandex Sans Display;
  font-size: 13.826px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.rating{
  color: #827F7F;
  font-family: Yandex Sans Display;
  font-size: 21.653px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.rating-text{
  color: #FFF;
  font-family: Yandex Sans Display;
  font-size: 8.752px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2px;
}
.nav__whatsapp-icon{
  width: 36px;
  height: 36px;
  margin-left: 17px;
  margin-right: 10px;
}
.nav__telegram-icon{
  width: 36px;
  height: 36px;
}
.nav-number{
  color: #FFF;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 20px;
}
.nav-btn{
  cursor: pointer;
  color: #FFF;
  background-color: transparent;
  border: 0.836px solid #FFF;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 15px 25px;
}
.nav__address{
  color: #FFF;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}
.nav__address-title{
  color: #FFF;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 4px;
}
.link{
  width: auto !important;
}

.main-address{
  display: none;
}
.nav-info{
  display: flex;
  align-items: center;

}
.burger{
  margin-right: 10px;
  display: none;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
}
.burger-menu {
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  left: 5px;
  top: 3px;
}
.bar {
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  margin: 4px 0;
  transition: transform 0.3s ease-in-out;
}
.menu {
  position: absolute;
  top: 70px;
  right: 30px;
  padding: 10px;
  background-color: #002B45E5;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
.header__bg{
  position: relative;
  background-image: url("../assets/imges/photo_5271663934971170676_y.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.header__box{
  margin-left: 250px;
  margin-top: 40px
}
.box-block__relative{
  padding-top: 53px;
  margin-left: 350px;
}
.block__relative{
  padding: 18px 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 15px;
  background-color: #002B45E5;
}
.block__relative-width1{
  position: relative;
  width: 205px;
}
.block__relative-width{
  position: relative;
  width: 240px;
}
.block__relative-text{
  color: #FFF;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.img-absolute{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 25px;
  right: -15px;
}
.img-absolute1{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 25px;
  right: -15px;
}
.header__title{
  width: 720px;
  color: #FFF;
  font-family: Lora;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.header__block-text{
  color: #FFF;
  font-family: Open Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 30px;
}
.header__block-span{
  color: #FFF;
  font-family: Open Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.header__img-wallet{
  width: 70px;
  height: 70px;
}
.header__img-arrow{
  margin-top: 40px;
  width: 34px;
  height: 64px;

}
.block__item-text{
  margin-top: 30px;
  color: #FFF;
  text-align: center;
  font-family: Open Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.block__item-btn{
  margin-bottom: 130px;
  margin-top: 15px;
  padding: 15px 28px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #FFF;
  color: #FFF;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: uppercase;
}





body{
  background: none !important;
}
.second__col{
  background: #FBF6EF;
  height: 430px;
  padding-top: 0px;
}
.link{
  width: 60%;
  height: 2px;
  background:  #002B45;
  margin-left: 30px;
}
.item{
  display: flex;
  align-items: center;
  justify-content: center;
}
.item__title{
  color: #002B45;
  font-family: "Lora";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}
.col__text{
  color: #002B45;
  font-family: "Open Sans";
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
  padding-left: 10px;
}
.col_-text-two{
  color: #002B45;
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  padding-left: 10px;

}
.col__imges{
  width: 90px;
  height: 60px;
}
.bloc__col{
   display: flex;
  justify-content: center;
  margin-top: 100px
}
@media screen and (max-width: 1115px) {
  .second__col{
    height: 510px ;
  }
}
@media screen and (max-width: 980px) {

  .bloc__col {
    margin-top: 0;
  }
}
@media screen and (max-width: 781px) {
  .second__col{
    background: none;
  }

}
@media screen and (max-width: 488px) {
  .grid__img{
    width: 300px;
  }

}
@media screen and (max-width: 365px) {
  .grid__img{
    width: 200px;
  }

}

@media screen and (max-width: 1140px) {
  .logo-img {
    width: 165px;
    height: 45px;
  }
  .carta-img {
    margin-left: 20px;
  }
  .carta-text{
    font-size: 11px;
  }
  .rating {
    font-size: 20px;
  }
  .rating-text {
    font-size: 8px;;
  }
  .nav__address-title {
    font-size: 12px;
  }
  .nav__address {
    font-size: 12px;
  }
  .nav__whatsapp-icon {
    width: 34px;
    height: 34px;
  }
  .nav__telegram-icon {
    width: 34px;
    height: 34px;
  }
  .nav-number {
    font-size: 18px;
    margin: 0 16px;
  }
  .nav-btn {
    padding: 13px 23px;
  }
  .header__block-text{
    font-size: 26px;
  }
  .header__img-wallet{
    width: 67px;
    height: 67px;
  }
}
@media screen and (max-width: 992px) {
  .logo-img {
    width: 160px;
    height: 40px;
  }
  .nav-carta {
    display: none;
  }
  .main-address {
    display: block;
    align-items: center;
  }
  .burger {
    display: block;
  }
  .nav-info {
    display: none;
  }
  .nav__address {
    font-size: 13px;

  }
  .nav__address-title {
    font-size: 13px;
  }
  .nav__whatsapp-icon {
    width: 33px;
    height: 33px;
    margin-left: 16px;
  }
  .nav__telegram-icon {
    width: 33px;
    height: 33px;
  }
  .nav-number {
    font-size: 18px;
  }
  .nav-btn {
    font-size: 13px;
    padding: 14px 24px;
  }
  .header__title {
    width: 465px;
    font-size: 57px;
  }
  .header__box{
    margin-left: 100px;
    margin-top: 40px
  }
  .header__block-text{
    font-size: 23px
  }
  .header__img-wallet{
    width: 63px;
    height: 63px;
  }
  .header__block-span{
    font-size: 25px;
  }
  .block__relative-text{
    font-size: 16px;
  }
  .box-block__relative{
    padding-top: 50px;
    margin-left: 280px;
  }
  .block__relative-width1{
    width: 190px;
  }
  .block__relative-width{
    position: relative;
    width: 220px;
  }
  .header__img-arrow{
    margin-top: 30px;
    width: 32px;
    height: 54px;

  }
  .block__item-text{
    margin-top: 20px;
    font-size: 12px;
  }
  .block__item-btn{
    margin-bottom: 120px;
    margin-top: 15px;
    padding: 13px 25px;
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  .logo-img {
    width: 155px;
    height: 35px;
  }
  .nav__whatsapp-icon {
    width: 31px;
    height: 31px;
    margin-left: 15px;
  }
  .nav__telegram-icon {
    width: 31px;
    height: 31px;
  }
  .nav-number {
    font-size: 17px;
  }
  .nav-btn {
    font-size: 12px;
    padding: 13px 23px;
  }
  .header__title {
    width: 350px;
    font-size: 52px;
  }
  .header__box{
    margin-left: 40px;
    margin-top: 40px
  }
  .header__block-text{
    font-size: 20px
  }
  .header__img-wallet{
    width: 60px;
    height: 60px;
  }
  .header__block-span{
    font-size: 23px;
  }
  .block__relative-text{
    font-size: 14px;
  }
  .box-block__relative{
    padding-top: 48px;
    margin-left: 180px;
  }
  .block__relative-width{
    width: 195px;
  }
  .block__relative-width1{
    width: 165px;
  }
  .block__relative {
    position: relative;
    padding: 15px 28px;
  }
  .img-absolute{
    width: 28px;
    height: 28px;
    top: 20px;
    right: -12px;
  }
  .img-absolute1{
    width: 28px;
    height: 28px;
    top: 20px;
    right: -12px;
  }
  .header__img-arrow{
    margin-top: 30px;
    width: 30px;
    height: 46px;

  }
  .block__item-text{
    margin-top: 20px;
    font-size: 11px;
  }
  .block__item-btn{
    margin-bottom: 110px;
    margin-top: 13px;
    padding: 11px 23px;
    font-size: 11px;
  }

}
@media screen and (max-width: 576px) {
  .logo-img {
    width: 145px;
    height: 30px;
  }
  .nav__address {
    font-size: 12px;

  }
  .nav__address-title {
    font-size: 12px;
  }
  .nav__whatsapp-icon {
    width: 29px;
    height: 29px;
  }
  .nav__telegram-icon {
    width: 29px;
    height: 29px;
  }
  .nav-number {
    font-size: 16px;
  }
  .nav-btn {
    font-size: 11px;
    padding: 13px 23px;
  }
  .header__title {
    margin-bottom: 50px;
    width: 250px;
    font-size: 40px;
  }
  .header__box {
    margin-left: -40px;
    margin-top: -90px
  }
  .header__block-text{
    margin-top: 30px;
    font-size: 17px;
    margin-left: 20px;
  }
  .header__img-wallet{
    width: 57px;
    height: 57px;
  }
  .header__block-span{
    font-size: 19px;
  }
  .block__relative-text{
    font-size: 12px;
  }
  .box-block__relative{
    padding-top: 46px;
    margin-left: 100px;
  }
  .block__relative-width{
    width: 137px;
  }
  .block__relative-width1{
    width: 137px;
  }
  .block__relative {
    position: relative;
    padding: 12px 23px;
  }
  .img-absolute{
    width: 25px;
    height: 25px;
    top: 21px;
    right: -12px;
  }
  .img-absolute1{
    width: 25px;
    height: 25px;
    top: 16px;
    right: -12px;
  }
  .header__img-arrow{
    margin-top: 30px;
    width: 28px;
    height: 40px;
  }
  .block__item-text{
    margin-top: 20px;
    font-size: 10px;
  }
  .block__item-btn{
    margin-bottom: 100px;
    margin-top: 13px;
    padding: 11px 23px;
    font-size: 10px;
  }


}
@media screen and (max-width: 414px) {
  .logo-img {
    width: 100px;
    height: 25px;
  }
  .nav__address {
    font-size: 11px;

  }
  .nav__address-title {
    font-size: 11px;
  }
  .nav__whatsapp-icon {
    width: 27px;
    height: 27px;
  }
  .nav__telegram-icon {
    width: 27px;
    height: 27px;
  }
  .nav-number {
    font-size: 15px;
  }
  .nav-btn {
    font-size: 10px;
    padding: 12px 22px;
  }
  .header__title {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 190px;
    font-size: 30px;
  }
  .header__block-text{
    font-size: 14px;
  }
  .header__img-wallet{
    width: 55px;
    height: 55px;
  }
  .header__block-span{
    font-size: 19px;
  }
  .block__relative-text{
    font-size: 10px;
  }
  .block__relative {
    position: relative;
    padding: 10px 22px;
  }
  .block__relative-width{
    width: 120px;
    margin-top: -60px;
    margin-left: -20px;
  }
  .block__relative-width1{
    width: 120px;
  }
  .img-absolute{
    width: 22px;
    height: 22px;
    top: 15px;
    right: -12px;
  }
  .img-absolute1{
    width: 22px;
    height: 22px;
    top: 10px;
    right: -12px;
  }
  .header__box {
    margin-left: -100px;
    margin-top: -100px
  }
  .header__img-arrow{
    margin-top: 50px;
    width: 26px;
    height: 36px;
  }
  .block__item-text{
    margin-top: 40px;
    font-size: 9px;
  }
  .block__item-btn{
    margin-bottom: 90px;
    margin-top: 13px;
    padding: 10px 20px;
    font-size: 9px;
  }
}
@media screen and (max-width: 320px) {
  .header__title {
    width: 150px;
    font-size: 25px;
  }
  .block__relative-width{
    width: 120px;
    margin-top: -60px;
    margin-left: 0;
  }
  .header__box {
    margin-left: -110px;
    margin-top: -100px
  }
  .header__title {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .block__item-btn{
    margin-bottom: 80px;
    margin-top: 13px;
    padding: 10px 20px;
    font-size: 9px;
  }
  .block__item-text{
    margin-top: 30px;
    font-size: 9px;
  }
  .header__img-arrow{
    margin-top: 35px;
    width: 24px;
    height: 40px;
  }
}

</style>
<script setup lang="ts">

/*
//////////////header////////////////////////
*/
import {ref} from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>