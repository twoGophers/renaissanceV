<template>
  <div 
  class="auction-item " 
  :style="{'background-image': 'url(' + require('../../../imagine/img/'+ auction_item.image) + ')' }" 
  >

    <blockAuction 
    :show_auct_name="auction_item.name"
    :show_auct_title="auction_item.title"
    @closeBlock="closeBlock"
    />

  </div>
</template>

<script>
import blockAuction from "./blok_auction";
export default {
components : {
    blockAuction
},
props : {
    auction_item : {
        type : Object,
        default() {
            return {};
        }
    }
},
methods : {
    closeBlock(data) {
        this.$emit("closeBlock", data)
    }
},


}
</script>

<style lang="scss" scoped>
.auction-item{
    width: 280px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: contain; 
    background-size: cover;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>