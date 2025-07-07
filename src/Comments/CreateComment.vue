<template>
    <div class="input">
        <h4>Написать комментарий</h4>
            <input type="text" v-model="name" placeholder="Введите ваше имя....">
            <input type="text" v-model="body" placeholder="Напишите свой комментарий....">
        <BTN style="margin-left: 30px;" @click="submitComment">Создать</BTN>
    </div>
</template>

<script>
import BTN from '../components/BTN.vue';

export default {
    components: { BTN },
        data() {
            return {
                name: '',
                body: ''
            }
    },
    methods: {
        submitComment() {
            if (this.name && this.body) {////////////////////////
                const newComment = {
                    name: this.name,
                    body: this.body
                };
                this.$emit('add-comment', newComment);
                this.name = '';
                this.body = '';
            } else {
                alert('Пожалуйста, заполните оба поля.');
            }
        }
    }
}
</script>

<style scoped>
.input{
    margin: 20px 0;
    border-radius: 10px;
}
input{
    padding: 15px;
    width: 400px;
    margin-top: 7px;
    border: 3px solid gray;
    box-shadow: 3px 3px 3px gray;
    border-radius: 10px;
}
</style>