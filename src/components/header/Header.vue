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

        <div class="basket">
            <router-link :to ="{name : 'auction'}" >
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
    width: 90%;
    height: 48px;
    display: flex;
    margin-top: 5%;
    margin-left: 5%;
    justify-content: space-between;
    align-items: center;
    .logo {
        width: 22%;
        height: 100%;
        display: flex;
        align-items: center;
        &_img {
            width: 15%;
            height: auto;
            img {
                width: 100%;
            }
        }
        &_text {
            width: 70%;
            height: auto;
            margin-left: 12%;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
            font-size: 100%;
            line-height: 20px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            }
        }
    }
    .basket {
        width: 12%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        &_basket {
            p {
                margin-left: 6%;
                width: 100%;
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

@media screen and (max-width : 1445px){
    header{
        .logo{
            &_text {
                p {
                    font-size: 75%;
                }
            }
        }
    }
}

@media screen and (max-width : 1150px){
    header {
        .logo {
            width: 30%;
        }
        .basket {
            a{
                display: flex;
                justify-content: space-around;
            }
            &_basket {
                display: none;
            }
        }
    }
}

@media screen and (max-width : 800px){
    header {
        .logo {
            width: 40%;
        }
    }
}
@media screen and (max-width : 600px){
    header {
        .logo {
            width: 50%;
        }
    }
}
@media (max-width : 490px) and (min-width : 220px){
    header {
        width: 95%;
        .logo {
            width: 75%;
            &_text {
                p {
                    font-size: 65%;
                }
            }
        }
        .basket{
            width: 25%;
        }
    }
}
@media (max-width : 490px) and (min-width : 375px){
    header {
            background-color: rgba(27, 23, 23, 1);
            position: sticky;
            top : 10px;
            z-index: 999;
        
        .basket{
            position: sticky;
            top : 10px;
            z-index: 999;
        }
    }
}
</style>