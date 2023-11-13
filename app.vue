<template>
	<nuxtLayout>
    <NuxtPage />
	</nuxtLayout>
</template>

<script setup>
const { detectAndSetTheme } = useThemeStore();

onMounted(detectAndSetTheme);
</script>
