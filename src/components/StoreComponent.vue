<template>
  <section id="store" class="store padding-tb-60">
    <div class="container">
      <!-- section title -->
      <div class="columns">
        <div class="column is-12 has-text-centered">
          <h1 class="is-capitalized is-size-1">our <strong class="banner-title ">store</strong></h1>
        </div>
      </div>
      <!-- end of section title -->
      <!--filter buttons -->
      <div class="columns">
        <div class=" column is-12 is-flex my-2 sortBtn justify-around">
          <div class="buttons are-medium">
            <a href="#" class="button is-outlined is-dark is-uppercase filter-btn is-medium" @click="filter = ''"> all</a>
            <a href="#" class="button is-outlined is-dark is-uppercase filter-btn is-medium" @click="filter = 'cakes'">cakes</a>
            <a href="#" class="button is-outlined is-dark is-uppercase filter-btn is-medium" @click="filter = 'cupcakes'">cupcakes</a>
            <a href="#" class="button is-outlined is-dark is-uppercase filter-btn is-medium" @click="filter = 'sweets'">sweets</a>
            <a href="#" class="button is-outlined is-dark is-uppercase filter-btn is-medium" @click="filter = 'doughnuts'">doughnuts</a>
          </div>
        </div>
      </div>
      <!-- search box -->
      <div class="columns">

        <div class="column is-12 is-flex justify-center">
          <div class="field has-addons">
            <div class="control">
              <a class="button is-info is-medium search-btn" disabled>
                <span class="icon" id="search-icon"><i class="fas fa-search"></i></span>
              </a>
            </div>
            <div class="control is-expanded">
              <input class="input is-medium" id="search-item" type="text" placeholder="item...." v-model="search">
            </div>
          </div>
        </div>
      </div>
      <!--end of filter buttons -->
      <!-- store  items-->
      <div class="columns is-multiline store-items" id="store-items">
        <!-- single item -->
        <div class="column is-4" v-for="(item, index) in searchItems" :key="index">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3 img-container">
                <img class="card-img-top store-img" :src="item.img" alt="">
                <span class="store-item-icon" @click="addCartItem(item)">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content is-flex justify-between">
                  <h5 class="is-capitalized title is-5 is-marginless has-text-weight-normal" id="store-item-name">
                    {{ item.name }}
                  </h5>
                  <h5 class="store-item-value title is-5">
                    $ <strong id="store-item-price" class="font-weight-bold">{{ item.price }}</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end of single store item-->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      filter: '',
      search: ''
    }
  },
  methods: {
    addCartItem(item) {
      this.$store.commit('addCartItem', item);
    }
  },
  computed: {
    ...mapGetters({
      items: 'getItems'
    }),
    searchItems() {
      const dataResult = this.items.filter(item => item.name.toLowerCase() === this.search.toLowerCase());
      return dataResult[0] ? dataResult : this.items;
    }
  }
}
</script>


<style scoped>
/* store items */
.card {
  border-radius: 4px;
}
.card img {
  border-radius: 4px 0;
}
.search-btn {
  background-color: var(--mainPink) !important;
  color: var(--mainWhite) !important;
}
.justify-center {
  justify-content: center !important;
}
.justify-between {
  justify-content: space-between !important;
}
.justify-around {
  justify-content: space-around !important;
}
.store {
  background: var(--mainGrey);
}
.img-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.store-img {
  transition: all .3s ease-in-out;
}
.img-container:hover .store-img {
  transform: scale(1.2);
}
.store-item-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.75rem;
  background: var(--mainYellow);
  border-top-left-radius: 1rem;
  transition: all .3s ease;
}
.img-container:hover .store-item-icon {
  transform: translate(0, 0);
}
.store-item-icon:hover {
  color: var(--mainPink);
}
.store-item-value {
  color: --mainYellow;
}
/*end of  store items */
</style>
