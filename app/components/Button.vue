<template>
  <a :href="href" :target="target" :rel="rel" :class="classes">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string;
    variant?: "default" | "outline";
    target?: "_blank" | "_self";
    rel?: string;
  }>(),
  {
    variant: "default",
  }
);

const $style = useCssModule();

const classes = computed(() => {
  return {
    [$style.button]: true,
    [$style.default]: props.variant === "default",
    [$style.outline]: props.variant === "outline",
  };
});
</script>

<style module>
.button {
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-width: 1px;
  border-style: solid;
  text-wrap: nowrap;
}

@media (max-width: 768px) {
  .button {
    width: 100%;
  }
}

.default {
  border-color: var(--gray-12);
  background-color: var(--gray-12);
  color: var(--gray-00);
}

.default:hover {
  background-color: var(--gray-12);
  border-color: var(--gray-12);
}

.outline {
  border-color: var(--gray-10);
  background-color: transparent;
  color: var(--gray-11);
}

.outline:hover {
  border-color: var(--gray-11);
  color: var(--gray-11);
}
</style>
