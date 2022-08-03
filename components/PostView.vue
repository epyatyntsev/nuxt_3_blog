<template>
  <NuxtLink
    :to="`/posts/${props.post.id}`"
    class="card text-bg-dark"
    v-if="props.post"
  >
    <img src="https://loremflickr.com/320/240" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title">{{ props.post.title }}</h5>
      <p class="card-text">by {{ author.name }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useUsersStore } from "~~/store/users.js";

interface Props {
  post: Post | null;
}

const props = defineProps<Props>();

const { getUserById } = useUsersStore();

const author = computed(() => getUserById(props.post.userId));
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  &-img-overlay {
    background: #000000b4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-title {
    text-align: center;
  }

  &-text {
    margin-top: 40px;
  }
}
</style>
