<template>
  <div class="author-modal" v-if="author">
    <div class="author-modal__content">
      <h3 class="text-center">{{ author.name }}</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="me-auto">
            <div class="fw-bold">Username</div>
            {{ author.username }}
          </div>
        </li>
        <li class="list-group-item">
          <div class="me-auto">
            <div class="fw-bold">Email</div>
            {{ author.email }}
          </div>
        </li>
        <li class="list-group-item">
          <div class="me-auto">
            <div class="fw-bold">Phone</div>
            {{ author.phone }}
          </div>
        </li>
        <li class="list-group-item">
          <div class="me-auto">
            <div class="fw-bold">Adresss</div>
            {{ author.address.city }}, {{ author.address.street }},
            {{ author.address.suite }}, {{ author.address.zipcode }}
          </div>
        </li>
        <li class="list-group-item">
          <div class="me-auto">
            <div class="fw-bold">Company</div>
            {{ author.company.name }} <br />
            {{ author.company.bs }}
          </div>
        </li>
      </ul>

      <div class="text-center mt-4">
        <button class="btn btn-primary m-a" @click="emit('close')">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  author: User | null;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<style lang="scss">
.author-modal {
  width: 100%;
  height: 100%;
  background: #000000b4;
  position: fixed;
  z-index: 9999999;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  justify-content: center;

  &__content {
    max-width: 400px;
    width: 100%;
    margin: auto;
    padding: 20px;
    background: #fff;
  }
}
</style>
