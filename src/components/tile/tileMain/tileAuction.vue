<template>
  <div class="auction">

    <div v-if="!ADD_CART.length" class="titleAuction">
      <h2>Каталог аукциона пуст...</h2>
    </div>
  
    <vAuction 
    v-for="(item, index) in ADD_CART"
    :key="index"
    :auction_item="item"
    @closeBlock="closeBlock(index, item.id)"
    v-else/>

  </div>
</template>

<script>
import vAuction from "./tileAuction-item.vue"
import {mapGetters, mapActions} from 'vuex';

export default {

  components : {
    vAuction
  },
  methods : {
    ...mapActions ([
      "GET_ADD_TO_CART",
      "GET_DELETE_PICT",
      "GET_DELETE_PICT_ITEM"
    ]),
    closeBlock(a, b) {
      this.GET_DELETE_PICT(a);
      this.GET_DELETE_PICT_ITEM(b)
    }
  },
  computed : {
    ...mapGetters([
      "ADD_CART"
    ])
  },

}
</script>

<style lang="scss" scoped>
.auction{
  min-height: 250px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2%;
  grid-auto-flow: dense;
  position: relative;

  .titleAuction{
    width: 100%;
    position:absolute ;
    text-align: center;
    margin-top: 5%;
    h2 {
      font-weight: 400;
      opacity: 0.5;
    }
  }
}

@media screen and (max-width : 1245px){  
  .auction {
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1%;
    grid-auto-flow: dense;
    position: relative;
  }
}

@media screen and (max-width : 1100px){
  .auction {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width : 800px){
  .auction {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2%;
  }
}
@media screen and (max-width : 500px){
  .auction {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4%;
  }
}

@media screen and (max-width : 375px){
  .auction {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
}
</style>