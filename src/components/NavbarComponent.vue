<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="../assets/img/logo.svg" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        About
      </a>

      <a class="navbar-item">
        Store
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">

        <div class="navbar-item" style="margin-right: 30px;">
          <span class="info-icon mx-lg-3"><i class="fas fa-phone"></i></span>
          <p class="mb-0">+ 123 456 789</p>
        </div>
        <div class="buttons">
          <div class="dropdown is-right is-dark" :class="{'is-active ': activeDropdown}" @click="activeDropdown = !activeDropdown">
            <div class="dropdown-trigger">
              <button class="button is-dark is-outlined cart-info" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span class="icon cart-info__icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <p><span id="item-count">{{ cartItems.length }} </span> items - $<span class="item-total">{{ cartTotal }}</span></p>
              </button>
            </div>
            <div class="dropdown-menu width-20" id="dropdown-menu2" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item" v-for="(item, index) in cartItems" :key="index">
                  <div class="cart-item is-flex space-between">
                    <div class="item-img image is-32x32">
                      <img class="is-rounded" :src="item.img" alt="">
                    </div>
                    <div class="item-text">
                      <strong class="is-size-6">{{ item.name }}</strong> - ${{ item.price }}
                    </div>
                    <div class="cart-item-remove icon" @click="deleteItem(index)">
                      <i class="fas fa-trash is-size-6"></i>
                    </div>
                  </div>
                </div>
                <div class="dropdown-item" v-if="!cartItems[0]">
                  <strong class="is-size-6">Cart Empty</strong>
                </div>
                <hr class="dropdown-divider">
                <div class="dropdown-item is-flex space-between is-size-6">
                  <strong>Total:</strong> <span>$ {{ cartTotal }}</span>
                </div>
                <hr class="dropdown-divider">
                <div class="buttons dropdown-item is-flex space-between cart-buttons-container">
                  <button class="button is-danger is-outlined f-family" @click="clearCart">
                    Clear Cart
                  </button>

                  <button class="button is-outlined f-family btn-black">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      activeDropdown: false
    }
  },
  methods: {
    deleteItem(item) {
      this.$store.commit('deleteCartItem', item);
    },
    clearCart() {
      this.$store.commit('clearCart');
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems'
    }),
    cartTotal() {
      const total = [];
      this.cartItems.forEach(item => {
        total.push(item.price);
      });

      const totalMoney = total.reduce((total, item) => {
        total += item;
        return total;
      },0).toFixed(2);
      return totalMoney || "0.00";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* nav links */
.width-20 {
  min-width: 20rem !important;
}
.space-between {
  justify-content: space-between;
}
.navbar-burger {
  outline: none !important;
}
.navbar-burger span {
  font-size: 2.5rem;
  color: var(--mainPink);
}
.navbar-brand a img {
  max-height: 3rem !important;
}
.navbar-item {
  color: var(--mainPink);
  font-size: 1.5rem;
  transition: all 0.1s;
}
.navbar-item:hover {
  color: var(--mainBlack);
  background-color: var(--mainWhite);
}
/* end of nav links */

.f-family {
  font-family: "Kaushan Script", cursive !important;
}

/* info icons */
.cart-info__icon {
  color: var(--mainBlack);
  cursor: pointer;
}

.cart-info {
  border: 0.1rem solid var(--mainBlack) !important;
  color: var(--mainBlack) !important;
  border-radius: 0.25rem !important;
  font-family: "Kaushan Script", cursive;
  cursor: pointer !important;
}
.cart-info:hover {
  background: var(--mainPink) !important;
  border-color: var(--mainPink) !important;
  color: var(--mainWhite) !important;
}
.cart-info:hover .cart-info__icon {
  color: var(--mainWhite) !important;
}
/* end of info icons */
</style>
