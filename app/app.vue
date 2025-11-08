<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />

    <div :class="$style.content">
      <Path>~/</Path>
      <Name>Guilherme Souza</Name>
      <Title>Frontend Software Engineer from Brazil 🇧🇷</Title>

      <div :class="$style.buttons">
        <Button href="mailto:dev.guih@gmail.com">Get in touch</Button>
        <Button href="https://github.com/gmdsdev" variant="outline"
          >GitHub</Button
        >
        <Button href="https://linkedin.com/in/gmdsdev" variant="outline"
          >LinkedIn</Button
        >
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Path from "@/components/Path.vue";
import Name from "@/components/Name.vue";
import Title from "@/components/Title.vue";
import Button from "@/components/Button.vue";
</script>

<style module>
.content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  min-height: 100vh;
}

.buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 12rem;
}
</style>
