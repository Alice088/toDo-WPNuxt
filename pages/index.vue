<script setup lang="ts"></script>

<template>
	<main class="
		w-full
		h-[100svh]
		grid
		grid-cols-1
		laptop:grid-cols-2
		grid-rows-1"
	>
		<div class="
			col-start-1
			col-end-2
			dark:bg-BlackOlive
			laptop:block
			bg-BabyPink
			transition
			duration-300
			hidden"
		></div>

		<div class="
			flex
			justify-center
			items-center
			laptop:col-start-2
			dark:bg-BlackOlive
			col-start-1
			col-end-3
			transition
			duration-300
			bg-BabyPink"
		>
			<div class="
				flex
				flex-col
				dark:bg-BabyPink
				p-3
				bg-BlackOlive
				[&_input]:placeholder:text-BabyPink
				dark:[&_input]:placeholder:text-BlackOlive
				dark:[&_input]:text-BlackOlive
				[&_input]:text-BabyPink"
			>
				<input type="email" placeholder="email">
				<input type="password" placeholder="password">
			</div>
		</div>

	</main>
</template>

<style scoped>
</style>