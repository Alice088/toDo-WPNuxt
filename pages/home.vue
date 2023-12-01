<script setup lang="ts">
const theme =  useThemeStore();

onMounted(theme.detectAndSetTheme);
</script>

<template>
	<main class="home">

	</main>
</template>

<style lang="scss" scoped>
@import "assets/style/colors";

* {
	transition: background-color 300ms ease-in-out;
	transition-property: background-color, color;
}

.home {
	height: 100dvh;
	min-height: 100vh;
	background-color: $babyPink;

	&.dark {
		background-color: $blackOlive;
	}
}
</style>