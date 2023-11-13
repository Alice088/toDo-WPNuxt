<script setup lang="ts">
const error = useError();
const { detectAndSetTheme } = useThemeStore();

onMounted(detectAndSetTheme);
</script>

<template>
  <main class="
    flex
    flex-col
    dark:bg-BlackOlive
    justify-center
    items-center
    gap-5
    p-2
    h-[100svh]"
    >

    <div class="
	    flex
	    flex-col
	    tablet:p-2
	    tablet:w-fit
	    tablet:text-9xl
	    dark:text-BabyPink
	    text-BlackOlive
	    w-full
	    text-center
	    text-[26svw]"
      >

      <p> {{ error.statusCode }} </p>
      <p> ERROR! </p>
    </div>

    <TheButton class="dark:text-BabyPink text-BlackOlive">
	    Go to Back
    </TheButton>
  </main>
</template>