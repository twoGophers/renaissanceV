<template>
  <div class="tileMain">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {

  methods : {

  },
  computed : {

  },
}




</script>

<style lang="scss" scoped>
.tileMain {
  // width: 1216px;
  // height: 935px;
  // margin-top: 90px;
  width: 80%;
}
@media screen and (max-width : 1100px){
  .tileMain {
   width: 90%;
 }
}

@media screen and (max-width : 955px){
 .tileMain {
   width: 95%;
 }
}

@media screen and (max-width : 500px) {
  .tileMain {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

</style>