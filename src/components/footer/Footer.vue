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
    margin-top: 230px;
    width: 1920px;
    height: 218px;
    background: url("../../imagine/img/08axbr721.png");
    display: flex;
    flex-direction: row;

    .adress{
        width: 253px;
        height: 58px;
        margin-left: 352px;
        margin-top: 90px;
        p{
            font: 400;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 150%;
        }
    }
    .registr{
        width: 238px;
        height: 27px;
        margin-left: 725px;
        margin-top: 105px;
        p{
            font: 400;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 150%;
            opacity: 0.6;
        }
    }
}
</style>