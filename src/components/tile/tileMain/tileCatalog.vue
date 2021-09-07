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
        this.arrayCatalog = [...this.CATALOG]
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
  // width: 1216px;
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
  grid-gap: 2%;
  grid-auto-flow: dense;
  counter-reset: item;
}

@media screen and (max-width : 1245px){ 
  .catalog {
    height: 700px;
    display: grid;
    grid-gap: 1%;
    grid-auto-flow: dense;
    counter-reset: item;
  }
}


@media screen and (max-width : 812px){
 .catalog {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1%;
    grid-auto-flow: dense;
    counter-reset: item;
    height: 900px;
    float: left;
 }
}
@media screen and (max-width : 730px){ 
 .catalog {
   height: 920px;
 }
}
@media screen and (max-width : 615px){
 .catalog {
   position: relative;
    min-height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1%;
    grid-auto-flow: dense;
    counter-reset: item;
    height: 1200px;
 }
}

@media screen and (max-width : 470px){
 .catalog {
   display: flex;
   flex-direction: column;
   height: max-content;
   align-items: center;
   justify-content: center;
   width: 100%;
 }
}


</style>