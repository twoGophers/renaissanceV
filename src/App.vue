<template>
  <div id="app">
    <vHeader />
    <vTile />
    <vFooter />
  </div>
</template>

<script>

import vHeader from './components/header/Header';
import vTile from './components/tile/vTile';
import vFooter from "./components/footer/Footer";

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    vHeader,
    vTile,
    vFooter
  },
}
</script>

<style lang="scss">
h1, h2, h3, h4 h5 h6, p, span, li, a {
   font-family: 'Roboto', sans-serif;
   color : rgba(220, 206, 206, 1);
   margin: 0px;
}
h1 {
  font-size: 24px;
  line-height: 150%;
}
h2 {
  font-size: 18px;
  line-height: 150%;
}
h4 {
  font-size: 16px;
  line-height: 150%;
}
a{
  text-decoration: none;
}
input {
  outline: none;
}
button {
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px 11px;
  position: static;
  width: 111px;
  height: 44px;
  left: 106px;
  top: 0px;
  border: 1px solid #DCCECE;
  box-sizing: border-box;
  flex: none;
  order: 1;
  flex-grow: 0;
  color : rgba(220, 206, 206, 1);
  &:hover {
    background: rgba(85, 78, 78, 1);
    border: none;
    transition: 0.2s;

  }
}
html {
  box-sizing: border-box;
  background-color: rgba(27, 23, 23, 1);
}
*, *::before, *::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
}
#app {
    //height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media screen and (max-width : 1245px){ 
  button {
    width: 70px;
    height: 30px;
    order: 0;
    padding: 0px;
    
  }
}
</style>
