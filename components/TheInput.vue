<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

</script>

<template>
 <input :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
	      class="text-center
							 rounded-[5px]
							 w-full
							 transition
							 duration-300
							 h-[40px]"

 />
</template>

<style scoped>

</style>