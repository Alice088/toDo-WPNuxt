<script setup lang="ts">
const props = defineProps<{
	size: number
	rounded: number,
}>();

const bigCub = ref<HTMLDivElement | null>(null);
const littleCub = ref<HTMLDivElement | null>(null);

onMounted(() => {
	if(bigCub.value && littleCub.value) {
		bigCub.value.style.width = `${props.size}px`;
		bigCub.value.style.height = `${props.size}px`;
		bigCub.value.style.borderRadius = `${props.rounded}px`;

		littleCub.value.style.borderRadius = `${props.rounded}px`;
		littleCub.value.style.width = `${props.size/2}px`;
		littleCub.value.style.height = `${props.size/2}px`;
	}
});

</script>

<template>
	<div class="bg-BabyPink
							dark:bg-BlackOlive
							flex
							w-full
							h-full
							justify-center
							items-center
							z-[9999]"
	>
		<div ref="bigCub"
		     class="flex
								justify-center
								items-center
								animate-[spin_10s_linear_infinite]
								dark:bg-BabyPink
								bg-BlackOlive"
		>
			<div ref="littleCub"
			     class="animate-[spin_2s_linear_infinite]
									dark:bg-BlackOlive
									bg-BabyPink"
			>

			</div>
		</div>
	</div>
</template>

<style scoped>

</style>