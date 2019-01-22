<template>
  <section class="section about padding-tb-60" id="about">
    <div class="container">

      <div class="columns">
        <div class="column is-6">
          <h1 class="is-capitalized title about-title mt-5" style="font-size: 2.5rem !important;">
            about <strong class="title is-1" style="font-size: 4rem !important; color: #ef7998 !important;">us</strong>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
            beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
            porro at dolorum! Ad!</p>
          <a href="#" class="button is-dark is-outlined is-uppercase is-medium">explore</a>

        </div>
        <div class="column is-6">
          <div id="about-img__container">
            <img src="../assets/img/sweets-1.jpeg" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style lang="css" scoped>
/* about */
.mt-5 {
  margin-top: 25px;
}

.section {
  padding-top: 60px !important;
}

#about-img__container {
  position: relative;
}

p {
  margin-bottom: 24px !important;
  color: #6c757d!important;
}

#about-img__container::before {
  content: "";
  position: absolute;
  top: -1.5rem;
  left: -1.7rem;
  width: 100%;
  height: 100%;
  outline: 0.5rem solid var(--mainYellow);
  z-index: -1;
  transition: all 1s ease-in-out;
}
#about-img__container:hover:before {
  top: 0;
  left: 0;
}

/*end of  about */
</style>
