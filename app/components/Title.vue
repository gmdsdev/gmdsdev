<template>
  <h2 :class="$style.title">
    <slot />
  </h2>
</template>

<style module>
.title {
  font-size: 0.875rem;
  line-height: 1.25;
  color: var(--gray-11);
  margin-bottom: 0.5rem;
}
</style>
