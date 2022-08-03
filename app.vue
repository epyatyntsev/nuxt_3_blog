<template>
  <main id="app">
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Nuxt Blog</NuxtLink>
      </div>
    </nav>
    <div class="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useUsersStore } from "./store/users.js";

const { setUsers } = useUsersStore();

const { data: users } = await useFetch<User[]>(
  `https://jsonplaceholder.typicode.com/users`
);

setUsers(unref(users.value));
</script>
