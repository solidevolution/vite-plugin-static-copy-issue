<template>
  <button
    class="lib-button"
    type="button"
    :class="classes"
    :disabled="state === 'disabled' ? true : undefined"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    state?: 'default' | 'disabled'
  }>(),
  {
    state: 'default',
  },
)

const emit = defineEmits<{
  (e: 'onClick', event: MouseEvent): void
}>()

const classes = computed(() => ({
  [`${props.state || 'default'}`]: true,
}))

const onClick = ($emit: MouseEvent) => {
  emit('onClick', $emit)
}
</script>

<style lang="postcss" scoped>
.lib-button {
  cursor: pointer;
  display: flex;
  min-width: 345px;
  height: 48px;

  border-radius: 16px;
  background: black;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: var(--semantics-color-text-white, #fff);
  text-align: center;
  /* label */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  letter-spacing: 1.2px;
  text-transform: uppercase;

  &.disabled {
    background: grey
  }
}
</style>
