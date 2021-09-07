<template>
  <div class="main">
      <tileTop />
      <tileMain />
  </div>
</template>

<script>
import tileTop from "./tileTop/tileTop";
import tileMain from "./tileMain/tileMain";

export default {
  components : {
    tileTop,
    tileMain
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
</style>