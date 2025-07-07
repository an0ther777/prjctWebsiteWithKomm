<template>
    <div v-if="show" class="dialog" @click="handleClickOutside">
        <div class="modulDialog" @click.stop>
            <BTN class="btn" @click="close">X</BTN>
            <CreateComment @add-comment="addComment"></CreateComment>
            <Comments :comments="comments" 
                @remove="removeComment">
            </Comments>
        </div>
    </div>
</template>

<script>
import CreateComment from './CreateComment.vue';
import Comments from '../Comments/Comments.vue';
import { v4 as uuidv4 } from 'uuid';
import BTN from '../components/BTN.vue';

export default {
    components: { BTN, Comments, CreateComment }, 

    props: {
        show: {
            type: Boolean,
            required: true,
        },
        comments: {
            type: Array,
            required: true
        }
},
    methods: {
        close() {
            this.$emit('update:show', false);
        },
        removeComment(comment) {
          this.$emit('remove', comment)
        },
        handleClickOutside(){
            // Закрытие модульного окна при клике не на него
            const modal = this.$el.querySelector('.modulDialog')
            if (modal && !modal.contains(event.target)){
                this.close();
            }//Посмотреть///////////////////////
        },
        addComment(newComment) {
            newComment.id = uuidv4();
            this.comments.unshift(newComment);
        }
    },
}
</script>

<style  scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.modulDialog{
    background-color: white;
    border-radius: 12px;
    max-height: 90vh;
    width: 800px;
    padding: 20px;
    margin: auto;
    overflow-y: auto;
}
.btn{
    display: flex;
    width: 5px;
    height: 5px;
    justify-content: center;
    align-items: center;
    position:relative;
    display: flex;
}
</style>