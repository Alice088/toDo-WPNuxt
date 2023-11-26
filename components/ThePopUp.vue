<script setup lang="ts">
const props = defineProps<{
	show: boolean
}>();

const show = ref(props.show);
</script>

<template>
	<transition name="fadeAnimation" appear>
		<div v-if="show"
		     @click="show = false"
		     class="fixed
		            flex
		            flex-col
		            justify-center
		            items-center
							  z-999
								top-0
								bottom-0
								right-0
								left-0"
		>
			<div class="flex
							  flex-col
							  rounded-[5px]
							  bg-red-300
							  text-white
							  text-center
							  w-fit
							  gap-y-4
							  py-2
								px-8">
				<slot />

			<TheButton class="bg-BlackOlive rounded-[5px]"
			           @click="show = false"
			>
				Close
			</TheButton>
			</div>

		</div>
	</transition>
</template>

<style scoped>
.fadeAnimation-enter-active, .fadeAnimation-leave-active {
	transition: opacity 500ms ease-in-out;
}
.fadeAnimation-enter, .fadeAnimation-leave-to {
	opacity: 0;
}
</style>