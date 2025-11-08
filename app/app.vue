<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />

    <main>
      <article
        :class="$style.content"
        itemscope
        itemtype="https://schema.org/Person"
      >
        <Path>~/</Path>
        <Name itemprop="name">Guilherme Souza</Name>
        <Title itemprop="jobTitle"
          >Frontend Software Engineer from Brazil 🇧🇷</Title
        >

        <nav :class="$style.buttons" aria-label="Contact and social links">
          <Button href="mailto:dev.guih@gmail.com" aria-label="Send email"
            >Get in touch</Button
          >
          <Button
            href="https://github.com/gmdsdev"
            variant="outline"
            aria-label="Visit GitHub profile"
            rel="noopener noreferrer"
            target="_blank"
            >GitHub</Button
          >
          <Button
            href="https://linkedin.com/in/gmdsdev"
            variant="outline"
            aria-label="Visit LinkedIn profile"
            rel="noopener noreferrer"
            target="_blank"
            >LinkedIn</Button
          >
        </nav>
      </article>
    </main>
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
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 12rem;
}

@media (max-width: 768px) {
  .buttons {
    flex-direction: column;
  }
}
</style>
