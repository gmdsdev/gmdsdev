<template>
  <h1 :class="$style.name">
    <slot />
  </h1>
</template>

<style module>
.name {
  font-size: 2rem;
  line-height: 1;
  color: var(--gray-13);
  margin-bottom: 0;
}
</style>
