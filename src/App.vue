<template>
  <div id="app">
    <header>
      <NavbarComponent />
      <BannerComponent />
    </header>
    <AboutComponent />
    <StoreComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import StoreComponent from './components/StoreComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    StoreComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css");
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Kaushan+Script");

:root {
  --mainPink: #ef7998;
  --mainYellow: rgb(249, 228, 148);
  --mainWhite: #fff;
  --mainBlack: #353535;
  --yellowTrans: rgba(249, 228, 148, 0.5);
  --mainGrey: rgb(238, 238, 238);
}

body {
  font-family: "Kaushan Script", cursive;
  background: var(--mainWhite);
  color: var(--mainBlack);
}

.padding-tb-60 {
  padding-top: 60px !important;
  padding-bottom: 60px !important;
}

.banner-title {
  color: var(--mainPink) !important;
  font-size: 4rem !important;
}

/* cart  */
.cart {
  position: absolute;
  min-height: 10rem;
  background: var(--mainWhite);
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.5);
  width: 0;
  overflow: hidden;
  opacity: 0;
}
.show-cart {
  width: 18rem;
  padding: 2rem 1.5rem;
  opacity: 1;
}
.cart-item {
  transition: all 2s ease-in-out;
}

/* end of cart */
/* cart item */
.cart-item-remove {
  color: var(--mainPink);
  transition: all .2s ease;
  cursor: pointer;
}
.cart-item-remove:hover {
  transform: scale(1.1);
  color: var(--mainBlack);
}
#cart-item-price {
  font-size: 0.8rem;
}
/* cart item */
/* cart buttons */
.btn-pink {
  background-color: var(--mainPink) !important;
}
.btn-black {
  color: var(--mainBlack) !important;
  border-color: var(--mainBlack) !important;
}
.btn-black:hover {
  color: var(--mainPink) !important;
  background: var(--mainBlack) !important;
}
.btn-pink:hover {
  background: var(--mainPink) !important;
  color: var(--mainBlack) !important;
}
/* end of cart buttons */

.search-box {
  background: var(--mainPink);
  color: var(--mainBlack);
}

/* ligthbox */

.lightbox-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6) !important;
  display: none;
}
.show {
  display: block;
}

.lightbox-holder {
  position: relative;
}
.lightbox-item {
  min-height: 80vh;
  background: url("./assets/img/cake-1.jpeg") center/cover fixed no-repeat;
  border-radius: 0.3rem;
}
.lightbox-close {
  color: var(--mainPink);
  font-size: 3rem;
  transition: all 1s ease-in-out;
  cursor: pointer;
}
.lightbox-close:hover {
  color: var(--mainYellow);
}

.lightbox-control {
  position: absolute;
  font-size: 4rem;
  color: var(--mainPink);
  transition: all 1s linear;
  cursor: pointer;
}
.lightbox-control:hover {
  color: var(--mainYellow);
}
.btnLeft {
  top: 50%;
  left: 0;
  transform: translateX(-60%);
}
.btnRight {
  top: 50%;
  right: 0;
  transform: translateX(60%);
}

</style>
