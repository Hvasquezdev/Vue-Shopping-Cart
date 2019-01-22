<template>
  <div class="columns max-height justify-content-center align-items-center">
    <div class="column is-10 banner has-text-centered">
      <h1 class="is-capitalized	title is-1">welcome to <strong class="banner-title ">grandma's</strong></h1>
      <a href="#store" class="button banner-link is-upppercase">explore</a>

    </div>
    <div id="cart" class="cart">
      <!-- cart total -->
      <div class="cart-total-container d-flex justify-content-around is-capitalized mt-5">
        <h5>total</h5>
        <h5> $ <strong id="cart-total" class="font-weight-bold">0.00</strong> </h5>
      </div>
      <!--end cart total -->
      <!-- cart buttons -->
      <div class="cart-buttons-container mt-3 d-flex justify-content-between">
        <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
        <a href="#" class="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
      </div>
      <!--end of  cart buttons -->
      <!--  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* banner */
.columns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.max-height {
  min-height: calc(100vh - 76px);
  background: linear-gradient(var(--yellowTrans), var(--yellowTrans)),
    url("../assets/img/headerBcg.jpeg") center/cover fixed no-repeat;
  position: relative;
}
.banner {
  color: var(--mainWhite);
  margin-top: -4rem;
}
.banner-title {
  color: var(--mainPink) !important;
  font-size: 4rem !important;
}
.banner-link {
  font-size: 1.5rem !important;
  color: var(--mainBlack) !important;
  border: 0.2rem solid var(--mainBlack) !important;
  text-transform: uppercase;
  background-color: transparent !important;
  transition: all .2s;
}
.banner-link:hover {
  background: var(--mainBlack) !important;
  color: var(--mainPink) !important;
}
/* endo of banner */
</style>
