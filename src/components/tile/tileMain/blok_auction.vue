<template>
    <div class="pushAuction">
            <div class="showTitle">
                <div class="pushAuction_title">    
                    <p class="title-text">{{show_auct_name}}</p>
                    <p class="title-text1">{{show_auct_title}}</p>
                </div>
                <div class="close" @click="$emit('closeBlock')">
                    <span class="close_exit"></span>
                </div>
            </div>
          <div class="pushAuction_push">
              <img src="../../../imagine/img/Frame 41.png" alt="">
              <p>Продана на аукционе</p>
          </div>
      </div>
</template>

<script>

export default {
props : {
    show_auct_name : {
        type : String,
        default() {
            return 
        }
    },
    show_auct_title : {
        type : String,
        default() {
            return 
        }
    },
}
}
</script>

<style lang="scss" scoped>
.pushAuction{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        align-content: space-between;
        padding: 20px;
        padding-right: 0px;
        opacity: 1;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        .showTitle{
            display: flex;
            width: 100%;
            flex-direction: row;

            .close{
                width: 10%;
                height: 20px;
                display: flex;
                justify-content: flex-end;
                margin-left: 10%;

                .close_exit {
                    width: 25px;
                    height: 20px;
                    opacity: 0.8;
                    margin-left: 10px;
                }
                .close_exit:hover {
                    opacity: 1;
                }
                .close_exit:hover::after,
                .close_exit:hover::before{
                    height: 19px;
                    transition: 0.3s;
                }
                .close_exit:active::after,
                .close_exit:active::before{
                    height: 17px;
                    transition: 0.3s;
                }
                .close_exit:before, .close_exit:after {
                    position: absolute;
                    content: ' ';
                    height: 18px;
                    width: 2px;
                    background-color: rgb(182, 180, 180);
                }
                .close_exit:before {
                    transform: rotate(45deg);
                }
                .close_exit:after {
                    transform: rotate(-45deg);
                }
            }
            

            .pushAuction_title{
                width: 90%;
                .title-text {
                    font-weight: 400;
                    font-size: 18px;
                }
                .title-text1 {
                    font-size: 14px;
                }
            }
        }
        &_push {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
}

@media screen and (max-width : 1245px){ 
    .pushAuction{
        .showTitle{
            .pushAuction_title {
                .title-text {
                    font-size: 100%;
                }
        }
    }
    }
}

@media screen and (max-width : 615px){ 
    .pushAuction{
        padding-top: 0px;
    }
}

@media screen and (max-width : 470px){ 
    .pushAuction {
        display: flex;
        width: 100%;
        padding: 5px;
    }
}


</style>