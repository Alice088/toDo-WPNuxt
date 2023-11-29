<template>
	<div>
		<TheLoadingSpinner v-if="loading"
		                   class="fixed h-[100svh] top-0 left-0"
		                   :size="100"
											 :rounded="5"/>

		<nuxtLayout>
			<NuxtPage />
		</nuxtLayout>
	</div>

</template>

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

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s ease-in-out;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
}
</style>
