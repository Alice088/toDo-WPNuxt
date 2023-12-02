<script setup lang="ts">

</script>

<template>
	<div class="toDo">
		<header class="toDo__header"> <h2> <slot name="header" /> </h2> </header>
		<main class="toDo__content"> <slot name="content" /> </main>
		<footer class="toDo__time"> <time> <slot name="date" /> </time> </footer>
	</div>
</template>

<style scoped lang="scss">
@import "assets/style/colors";

.toDo {
	display: flex;
	flex-direction: column;
	text-align: center;

	color: $babyPink;
	background-color: $blackOlive;

	border-radius: 5px;
	height: fit-content;

	&.dark {
		color: $blackOlive;
		background-color: $babyPink;
	}
}

.toDo__header {
	font-size: 40px;
}

.toDo__content {
	font-size: 25px;
}
</style>