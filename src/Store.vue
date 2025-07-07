<template>
    <div style="margin-left: 15px;">
        <h3 style="margin: 20px;">Магазин:</h3>
        <p style="margin: 10px; ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum dolores modi.</p>
    
      <div style="margin: 20px;">
        

        <div style="display: flex;">
            <img class="photo" src="../src/img/1636810920_1-hdpic-club-p-krutie-mototsikli-sportivnie-3.jpg">
        <div style="margin: 15px;">
            <h4 style="margin-bottom: 15px;">Кол-во товара: {{ productMotos1 }}</h4>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minima odio molestias corporis ducimus sapiente vitae vel dolorum nihil cum omnis, maxime non unde architecto dignissimos porro corrupti assumenda eveniet iure harum! Iure, at diacta?</h5>
        </div>
    

        </div>
        <div style="display: flex; margin: 15px 0;">
            <img class="photo" src="../src/img/Buell 1125R  4.jpg">
        <div style="margin: 15px;">
            <h4 style="margin-bottom: 15px;">Кол-во товара: {{ productMotos2 }}</h4>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minima odio molestias corporis ducimus sapiente vitae vel dolorum nihil cum omnis, maxime non unde architecto dignissimos porro corrupti assumenda eveniet iure harum! Iure, at diacta?</h5>
        </div>


        </div>
        <div style="display: flex;">
            <img class="photo" src="../src/img/32b31bc1ecfcecb32eeb5bf2fb50c352.jpg">
        <div style="margin: 15px;">
            <h4 style="margin-bottom: 15px;">Кол-во товара: {{ productMotos3 }}</h4>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus minima odio molestias corporis ducimus sapiente vitae vel dolorum nihil cum omnis, maxime non unde architecto dignissimos porro corrupti assumenda eveniet iure harum! Iure, at diacta?</h5>
        </div>

        </div>
      </div> 
     
    <div>
        <BTN @click="showComment" style="margin: 10px 0 20px 30px;">Открыть комментарии</BTN>
        <ModulComments v-model:show="commentVisible" 
            :comments="comments" @remove="removeComment" 
            @load-more="loadMoreComments"
        ></ModulComments>
    </div>
    </div>
</template>

<script>
import ModulComments from './Comments/ModulComments.vue';
import axios from 'axios';
import BTN from './components/BTN.vue';

export default {
components: { BTN,ModulComments, },

    data(){
        return {
            productMotos1: 54,
            productMotos2: 73,
            productMotos3: 23,

            comments: [
                // {id:1, name: 'ааа', body: 'rrrw'},
                // {id:2, name: 'ааа', body: 'rrrw'},
                // {id:3, name: 'ааа', body: 'rrdsdsrsddsdsdsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddw'}
            ],
            commentVisible: false,
        }
    },
    methods: {
        showComment() {
            this.commentVisible = true
        },
        removeComment(comment) {
            this.comments = this.comments.filter(c => c.id !== comment.id);///////////////////////////////////
        },
        async loadMoreComments() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments',);
                this.comments = [...this.comments, ...response.data];
            } catch (e) {
                console.log('Ошибка');
            }
      }
    },
    mounted() {
        this.loadMoreComments()
    }
}
</script>

<style scoped>
.photo{
    height: 220px; 
    width: 220px;
    border-radius: 20px;
    box-shadow: 2px 2px 4px gray;
}
</style>