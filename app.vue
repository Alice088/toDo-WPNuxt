<script setup lang="ts">
const { detectAndSetTheme } = useThemeStore();
let loading = ref(true);

onMounted(() => {
	detectAndSetTheme();

	setTimeout(() => {
		loading.value = false;
	}, 1000);
});
</script>

<template>
	<TheLoadingSpinner v-if="loading"
	                   class="fixed h-[100svh] top-0 left-0"
	                   :size="100"
										 :rounded="5"/>

	<nuxtLayout>
		<NuxtPage />
	</nuxtLayout>
</template>

