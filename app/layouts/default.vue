<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}
</style>
