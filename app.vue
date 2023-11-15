<template>
	<div>
		<loading-spinner v-if="loading"/>

		<nuxtLayout v-show="!loading" >
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
