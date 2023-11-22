<template>
  <div>
    <LibButton text="text" @click="clicked = !clicked"></LibButton>
    <div v-if="clicked">Button clicked</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LibButton } from 'lib'

const clicked = ref(false)
</script>
