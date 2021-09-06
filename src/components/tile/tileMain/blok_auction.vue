<template>
    <div class="pushAuction">
          <div class="pushAuction_title">
              <div class="close" @click="$emit('closeBlock')">
                  <span class="close_exit"></span>
              </div>
              <p class="title-text">{{show_auct_name}}</p>
              <p class="title-text1">{{show_auct_title}}</p>
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
        padding-top: 0px;
        opacity: 1;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        .close{
            height: 20px;
            display: flex;
            justify-content: flex-end;

            .close_exit {
                width: 25px;
                height: 20px;
                opacity: 0.8;
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
                margin-top: 0.4%;
                margin-left: 0.4%;
                background-color: rgb(182, 180, 180);
            }
            .close_exit:before {
                transform: rotate(45deg);
            }
            .close_exit:after {
                transform: rotate(-45deg);
            }
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
        &_push {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
}    
</style>