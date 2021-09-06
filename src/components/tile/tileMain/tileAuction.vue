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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px;
  grid-auto-flow: dense;
  position: relative;

  .titleAuction{
    width: 100%;
    position:absolute ;
    text-align: center;
    h2 {
      font-weight: 400;
      opacity: 0.5;
    }
  }
}
</style>