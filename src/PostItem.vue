<template>
    <div class="comm_base">
        <div class="comm">
            <div class="id">ID: {{ comment.id }}</div>
            <div class="name">Имя: {{ comment.name }}</div>
            <div class="body">{{ comment.body }}</div>
        </div>
        <BTN class="btn" @click="removeComment" >
            X
        </BTN>
    <div>
    </div>
  </div>
</template>

<script>
import BTN from './components/BTN.vue';
export default {
    components: { BTN, },
    
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    methods: {
        close() {
            this.$emit('update:show', false);
        },
        removeComment() {
            this.$emit('remove', this.comment)
        }
    },
} 
</script>

<style scoped>
.comm_base{
    position: relative;
    border: 3px solid rgb(102, 102, 102);
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 2px 2px 4px gray;
}
.btn{
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3px;
    width: 3px;
}
.id{
    margin: 15px;
}
.body{
    margin: 0 15px 15px 15px;
    overflow-wrap: break-word;
    white-space: normal;
}
.name{
    margin: 0 15px 5px 15px;  
}
</style>