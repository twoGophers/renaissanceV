<template>
  <footer >
      <div class="adress">
          <p>+7 (495) 555-55-55</p>
          <p>Москва, Красная площадь, 52</p>
      </div>

      <div class="registr">
          <p>© Эпоха возрождения, 2021</p>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    margin-top: 8%;
    width: 100%;
    background: url("../../imagine/img/08axbr721.png");
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .adress{
        width: 30%;
        height: 50%;
        margin: 5%;
        p{
            font: 400;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 100%;
            line-height: 150%;
        }
    }
    .registr{
        width: 238px;
        height: 27px;
        p{
            font: 400;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            //font-size: 95%;
            line-height: 150%;
            opacity: 0.6;
        }
    }
}

@media screen and (max-width : 1245px){ 
    footer{
        .adress{
            margin: 3%;
            p{
                font-size: 90%;
            }
        }
    }
}
@media screen and (max-width : 693px){ 
    footer {
        margin-top: 14%;
        flex-direction: column;
        .adress{
            width: 50%;
        }
    }
}

@media screen and (max-width : 422px){
    footer {
        margin-top: 14%;
        flex-direction: column;
        .adress{
            width: 80%;
        }
        .registr {
            width: 80%;
        }
    }
 }
</style>