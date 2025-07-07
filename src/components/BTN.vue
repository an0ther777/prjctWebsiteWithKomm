<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btn{
    padding: 10px 10px;
    border: 3px solid rgb(102, 102, 102);
    cursor: pointer;
    transition: all ease 0.1s;
    border-radius: 5px; 
    box-shadow: 2px 2px 4px gray;
}
.btn:hover{
    transform: translateY(-3px);
}
</style>