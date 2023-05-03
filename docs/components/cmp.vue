<template>
  {{ msg }}
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref("Hola. Mensaje desde un componente VUE");
</script>
