<template>
  <div>
    <h1 class="text-center my-5 pt-5">Posts</h1>
    <div class="row equal g-2">
      <div
        class="col-12 col-sm-6 col-lg-4 col-xl-3"
        v-for="post in posts"
        :post="post.id"
      >
        <PostView :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useFetch<Post[]>(
  `https://jsonplaceholder.typicode.com/posts`
);
</script>
