<template>
  <div class="tileTop">

    <div class="tileTop_title">
        <p>Картины эпохи Возрождения</p>
    </div>

    <div class="tileTop_img">
        <img src="../../../imagine/img/FFf.png" alt="">
    </div>

<div class="filter-search">
    <div class="filter-search_filter">
        <span @click="allTovar()"><router-link to="/"  exact-active-class="exact-active">Все</router-link></span>
        <router-link to="/auction" exact-active-class="exact-active">Проданные на аукционе</router-link>
    </div>

    <div class="filter-search_search">
            <input type="text" @keyup.enter="inputValueSeacrh()" v-model="inputValue" placeholder="Поиск по названию картины">
            <div class="btn">
                <p @click="inputValueSeacrh()">Найти</p>
                <img @click="inputValueSeacrh()" src="../../../imagine/img/Icon.png" alt="" srcset="">
            </div>
        <hr>
    </div>
</div>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "tileTop",
    data() {
        return {
            inputValue : '',
            countAll : 1
        }
    },
    methods : {

        inputValueSeacrh () {
            let valInp = this.inputValue.trim()
            this.GET_SEARCH_VALUE(valInp);
            this.inputValue = ""
        },
        ...mapActions([
            "GET_SEARCH_VALUE",
            "GET_TOVAR_ALL"
        ]),

        allTovar() {
            
            return this.GET_TOVAR_ALL(this.countAll);
        }
    }
}
</script>

<style lang="scss" scoped>
.tileTop{
    width: 80%;
    margin-top: 5%;
    margin-bottom: 3%;
    position: relative;

///////
    &_title{
        width: 100%;
        margin-top: 10%;
        display: flex;
        align-items: center;
        p{
            margin-bottom: 5%;
            // outline: 1px solid white;
            height: 70%;
            font-family: 'Lora', serif;
            //font-style: italic;
            font-weight: normal;
            font-size: 96px;
            line-height: 100%;
            text-align: center;
            letter-spacing: 0.02em;
            //text-transform: uppercase;
            color: #DCCECE;
        }
    }
////
    &_img {
        position: absolute;
        left: 30%;
        top : 20%;
        img {
            width: 100%;
        }
    }
////
.filter-search {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &_filter{
        width: 30%;
        height: 34px;
        margin-top: 7%;
        a {
            padding: 5px 16.3px;
            opacity: 0.5;
            transition: 0.2s;
            &:hover {
                color: rgba(220, 206, 206, 1);
                opacity: 1;
            }

            &.exact-active{
                color: rgba(196, 196, 196, 1);
                opacity: 1;
            }
        }

    }
    &_search {
        width: 40%;
        height: 42px;
        display: flex;
        flex-wrap: wrap;

        input {
            margin-left: 4%;
            width: 70%;
            height: 24px;
            font-size: 16px;
            line-height: 150%;
            display: flex;
            align-items: center;
            color: rgb(245, 244, 244);
            opacity: 0.5;
            background: none;
            border: none;
            &:hover {
                opacity: 0.8;
                transition: 0.2s;
            }
            &:active {
                opacity: 0.9;
            }
            &::-ms-clear { display: none; }
        }
        .btn{
            width: 20%;
            height: 20px;
            display: flex;
            flex-direction: row;
            p {
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: #DCCECE;
                cursor: pointer;
                &:hover{
                    color: rgb(240, 233, 233);
                }
            }
            img {
                cursor: pointer;
                width: 16px;
                height: 16px;
                margin-left: 12px;
            }
        }
        hr {
            width: 100%;
            height: 1px;
            opacity: 0.5;
            box-sizing: border-box;
            margin-bottom: 0px;
            margin-top: 17px;
        }
    }
}

}

@media screen and (max-width : 1164px){ 
    .tileTop {
        width: 90%;
        &_title{
            width: 100%;
            p{
                font-size: 450%;
            }
        }
         &_img {
             img {
                 width: 80%;
             }
         }
         .filter-search{
              &_filter {
                  width: 50%;
              }
              &_search{
                  width: 30%;
                  p {
                      display: none;
                  }
              }
         }
    }
}

@media screen and (max-width : 635px){ 
    .tileTop {
        &_title {
            p{
                font-size: 330%;
            }
        }
        &_img{
            img {
                width: 60%;
            }
        }
        .filter-search {
            width: 100%;
            flex-direction: column;
            justify-content: center;
             &_filter{
                 width: 100%;
                 justify-content: center;
                 display: flex;
                 align-items: center;
             }
             &_search {
                margin-top: 10%;
                margin-bottom: 2%;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                input {
                    width: 40%;
                }
             }
        }
    }
}

@media screen and (max-width : 470px){
    .tileTop {
        &_title {
            p{
                font-size: 270%;
            }
        }
        &_img{
            top: 8%;
            img {
                width: 80%;
            }
        }
        .filter-search{
            margin-top: 10%;
        }
    }
}
@media screen and (max-width : 387px){
    .tileTop {
        &_title {
            p{
                font-size: 240%;
            }
        }
        &_img{
            top: 8%;
            img {
                width: 85%;
            }
        }
        .filter-search{
            margin-top: 10%;
        }
    }
}
</style>