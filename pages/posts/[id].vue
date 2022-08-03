<template>
  <div class="article" v-if="post">
    <div class="article__heading">
      <h1 class="text-center my-5 pt-5">{{ post.title }}</h1>
      <p class="text-center" @click="open = true">
        by <span class="article__author">{{ author.name }}</span>
      </p>
    </div>
    <div class="article__body">
      <p v-for="i in 10" :key="i">
        {{ post.body.repeat(10) }}
      </p>
    </div>
    <Teleport to="body">
      <AuthorModal v-if="open" :author="author" @close="open = false" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useUsersStore } from "~~/store/users.js";

const { params } = useRoute();
const { getUserById } = useUsersStore();
const nuxtApp = useNuxtApp();

// Reset scroll position on page load
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

const { data: post } = await useAsyncData<Post>(`post-${params.id}`, () =>
  $fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
);

const author = computed(() => getUserById(post.value.userId));

const open = ref(false);
</script>

<style scoped lang="scss">
h1 {
  text-transform: capitalize;
}

.article {
  &__author {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
