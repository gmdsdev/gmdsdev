<template>
  <span :class="$style.path">
    <slot />
  </span>
</template>

<style module>
.path {
  font-size: 1.5rem;
  line-height: 1;
  color: var(--gray-10);
}
</style>
