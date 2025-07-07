<template>
    <div class="navbar">
        <h1 class="thirdprjct"  @click="$router.push('/')">Thirdprjct</h1>
        <div class="BTN">
            <BTN @click="$router.push('/about')" style="margin-right: 10px;">О нас</BTN>
            <BTN @click="$router.push('/projects')" style="margin-right: 10px;">Наши проекты</BTN>
            <BTN @click="$router.push('/store')">Магазин</BTN>
        </div>
    </div>
</template>

<script>
import BTN from './BTN.vue';
    export default {
        components: { BTN, }
    }
</script>

<style scoped>
.navbar{
    padding: 20px;
    margin: 10px;
    height: 50px;
    align-items: center;
    background-color: rgb(214, 214, 214);
    display: flex;
    box-shadow: 2px 2px 4px gray;
    border: 3px solid  rgb(148, 148, 175);
    border-radius: 10px;
}
.BTN{
    display: flex;
    margin-left: auto;
    font-size: 17px;
}
.thirdprjct{
    transition: all ease 0.1s;
    cursor: pointer;
    font-size: 25px;
}
.thirdprjct:hover{
    transform: translateY(-3px);
}
</style>