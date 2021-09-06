<template>
  <div 
  class="catalog-item" 
  :style="{'background-image': 'url(' + require('../../../imagine/img/'+ catalog_item.image) + ')' }" 
  >
      <div v-show="testShoew"  class="context">
         <div class="context_title">
             <p class="title-text">{{catalog_item.name}}</p>
             <p class="title-text1">{{catalog_item.title}}</p>
         </div>
         <div class="context_price">
            <div class="priceValut">
                <p class="priceValut_p1">{{catalog_item.price}}</p>
                <p class="priceValut_p2">{{catalog_item.newPrice}}</p>
            </div>
            <button @click="addToCart">Купить</button>
         </div>
      </div>

    <blockAuction 
    :show_auct_name="catalog_item.name"
    :show_auct_title="catalog_item.title"
    @closeBlock="closeBlock1"
    v-show="showBlock" />


  </div>
</template>

<script>
import blockAuction from "./blok_auction";
import {mapGetters, mapActions} from  "vuex";

export default {
     props : {
        catalog_item : {
            type : Object,
            default () {
                return {}
            }
        },

    },
    data() {
        return {
            testShoew : true,
            showBlock : false,
            arrDeleteCatalog : '',
            testShowBlock : 0,

        }
    },

    methods : {
        ...mapActions ([
            "GET_DELETE_ITEM_FROM_AUCTION"
        ]),
        addToCart() {
            this.$emit("addToCart", this.catalog_item);
            this.testShoew = false;
            this.showBlock = true;
        },

        closeBlock1() {
            this.testShoew = true;
            this.showBlock = false;
            this.GET_DELETE_ITEM_FROM_AUCTION(this.catalog_item.id)
        },

        showItem(value) {
            this.testShowBlock = value;
            if(this.catalog_item.id == value) {
                this.testShoew = true;
                this.showBlock = false;
            } 
         },

    },


    components : {
        blockAuction
    },

    computed : {
        ...mapGetters ([
            "DELETE_BLOCK_FROM_CATALOG"
        ])
    },


    watch : {
        DELETE_BLOCK_FROM_CATALOG() {
        this.showItem(this.DELETE_BLOCK_FROM_CATALOG);
      }
    }

}
</script>

<style lang="scss" scoped>
.catalog-item{
    width: 280px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: contain; 
    background-size: cover;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.2s;
    }

    .context{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        opacity: 0;
        &:hover {
            opacity: 1;
            overflow: hidden;
            background-color: rgba(0, 0, 0, 0.5);
            transition: 0.3s;
        }
        &_title{
            width: 100%;
            .title-text {
                font-weight: 400;
                font-size: 18px;
            }
            .title-text1 {
                font-size: 14px;
            }
        }
        &_price {
            width: 100%;
            height: 45px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 0px;
            margin-top: auto;
            .priceValut{
                &_p1 {
                    font-size: 14px;
                    text-decoration: line-through;
                }
                &_p2 {
                    font-size: 16px;
                    font-weight: 600;
                }
            }
            button {
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
    &:nth-child(3) {
    grid-column: span 2;
    grid-row: span 2;
    width: 100%;
    height: auto;
  }
}
</style>