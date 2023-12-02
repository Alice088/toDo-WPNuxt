<script setup lang="ts">
const props = defineProps<{
	modelValue: string | number,
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
 <input :value="props.modelValue"
        @input.stop="$emit('update:modelValue', $event.target.value)"
	      class="input"
 />
</template>

<style scoped lang="scss">
@import "assets/style/colors.scss";

.input {
	width: 100%;
	height: fit-content;
	border-radius: 5px;
	padding: 3px;
	text-align: center;
	font-size: 17px;

	outline: none !important;
	background-color: $blackOlive;
	color: $babyPink;

	&::placeholder {
		color: $babyPink;
		text-align: center;
	}

	&.dark {
		background-color: $babyPink;
		color: $blackOlive;

		&::placeholder {
			color: $blackOlive;
		}
	}
}
</style>