<template>
  <Navbar></Navbar>

  <div>
    <router-view></router-view>
  </div>

  <div class="a" >
    <a class="a1" href="https://github.com">Спонсоры</a>  
    |
    <a class="a2" href="https://github.com">ТехПоддержка</a>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

  export default {
    components: { Navbar },

    
  }
</script>

<style scoped>
.a{
  text-decoration: none;
  margin-top: auto;
  bottom: 20px;
  right: 20px;
  display: flex;
  position: fixed;
  color: black;
}
.a1{
  text-decoration: none;
  margin-right: 5px;
  transition: all ease 0.1s;
  color: black;
}
.a2{
  text-decoration: none;
  margin-left: 5px;
  transition: all ease 0.1s;
  color: black;
}
.a1:hover{
  transform: translateY(-3px);
}
.a2:hover{
  transform: translateY(-3px);
}
</style>
