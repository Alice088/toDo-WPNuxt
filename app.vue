<template>
  <div class="font-avenir">
    <NuxtPage/>
  </div>
</template>

<script setup>
const { detectAndSetTheme } = useThemeStore();

onMounted(detectAndSetTheme);
</script>
