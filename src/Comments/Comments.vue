<template>
  <keep-alive>
  <div v-if="comments.length > 0" >
    <h3 style="display: flex;">Список комментариев: <h5 style="margin-left: 50px;">Кол-во комментариев: {{ comments.length }}</h5></h3>
    <transition-group name="user-list">
      <PostItem v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
        @remove="$emit('remove', comment)"></PostItem>
    </transition-group>
  </div>
  <!-- стр 5-8 -->
  <h2 v-else>
    Список комментариев пуст
  </h2>
  </keep-alive>
</template>
 
<script>
import PostItem from '../PostItem.vue';
export default {
  components: { PostItem, },

  props: {
      comments: {
          type: Array,
          required: true
      }
  },
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
    transition: transform 0.4s ease;
}
</style>