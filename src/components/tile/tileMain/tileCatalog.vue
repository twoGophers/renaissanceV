<template>
  <div class="catalog">
    <vCatagogItem 
    v-for="item in arrayCatalog"
    :key="item.id"
    :catalog_item='item'
    @addToCart="addToCart"
    />
  </div>
</template>

<script>
import vCatagogItem from "./tileCatalog-item";

import { mapGetters, mapActions } from "vuex";


export default {
  data() {
    return {
      arrayCatalog: [],
    }
  },
  
  components : {
    vCatagogItem
  },

  methods : {
    ...mapActions([
      'GET_CATALOG_ANTIC',
      "GET_ADD_TO_CART",
    ]),

    addToCart(paints) {
      this.GET_ADD_TO_CART(paints);
    },

    sortProductsBySearchValue(value) {
      if(value) {
        this.arrayCatalog = [...this.CATALOG];
        this.arrayCatalog = this.arrayCatalog.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        }) 
      } else {
          this.arrayCatalog = this.CATALOG;
      }
    },

    tovar_all(value) {
      if(value) {
        setInterval(this.arrayCatalog = [...this.CATALOG], 1000)
      } 
    },

  },

  computed : {
    ...mapGetters([
      'CATALOG',
      "ADD_CART",
      "SEARCH_VALUE",
      "TOVAR_ALL",
    ]),

  },

  mounted() {
      this.GET_CATALOG_ANTIC()
      .then(response => {
        if(response.data) {
          this.sortProductsBySearchValue(this.SEARCH_VALUE);
        }
      })
  },

   watch : {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      },
      TOVAR_ALL() {
         this.tovar_all(this.TOVAR_ALL);
      },
   }
}
</script>

<style lang="scss" scoped>
.catalog {
  width: 1216px;
  height: 935px;
  // display: flex;
  // flex-wrap: wrap;
  // flex-flow: wrap;
  // position: relative;
  // align-content: space-between;
  // justify-content: space-between;
  // flex-basis: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px;
  grid-auto-flow: dense;
  counter-reset: item;
}

</style>