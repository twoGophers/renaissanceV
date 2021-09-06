<template>
    <header>

        <div class="logo">
            <div class="logo_img">
                <img src="../../imagine/img/logo-museum2.png" alt="logo-museum">
            </div>
            <div class="logo_text">
                <p>прекрасная Работа, достойная каждого</p>
            </div>
        </div>

        <div>
            <router-link :to ="{name : 'auction'}" class="basket">
                <img src="../../imagine/img/icon.svg" alt="icon">
                <div class="basket_basket">
                    <p>КОРЗИНА</p>
                </div>
                <div class="basket_number">
                    <h4>{{ADD_CART.length}}</h4>
                </div>
            </router-link>
        </div>

    </header>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {}
    },

    computed : {
        ...mapGetters([
            'ADD_CART'
        ]),
    }
    
}
</script>

<style lang="scss" scoped>
header {
    width: 1740px;
    height: 48px;
    margin: 52px 90px 0px 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        width: 246px;
        height: 100%;
        display: flex;
        align-items: center;
        &_img {
            width: 48px;
            height: 48px;
            img {
                width: 100%;
            }
        }
        &_text {
            width: 174px;
            height: 40px;
            margin-left: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            }
        }
    }
    .basket {
        width: 127px;
        height: 23px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &_basket {
            p {
                width: 71px;
                font-size: 14px;
                line-height: 20px;
                word-break: break-all;
                letter-spacing: 0.06em;
                text-transform: uppercase;
            }
        }
        &_number{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background:rgba(220, 206, 206, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            h4{
                color: rgba(27, 23, 23, 1);
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 16px;
                letter-spacing: 0.06em;
                text-transform: uppercase;
            }
        }
    }
}


</style>