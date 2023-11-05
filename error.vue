<script setup lang="ts">
const error = useError();
const { detectAndSetTheme } = useThemeStore();

const handleError = () => clearError({ redirect: "/home" });
const isHome = () => {
	const endOfThePath = window.location.href.split("/").at(-1);
	return endOfThePath === "home" || endOfThePath === "";
};

onMounted(detectAndSetTheme);
</script>

<template>
  <main class="flex flex-col justify-center items-center gap-5 errorPage p-2 h-[100svh] font-avenir bg-no-repeat bg-cover
    dark:bg-[url('@/assets/images/backgrounds/error-dark-bg.svg')]
    bg-[url('@/assets/images/backgrounds/error-light-bg.svg')]">

    <div class="flex flex-col tablet:p-2 tablet:w-fit tablet:text-9xl dark:text-whiteBlack dark:border-whiteBlack
      dark:bg-strongBlack/30 bg-white/30 rounded-lg text-strongBlue border w-full border-strongBlue text-center
      text-[26svw] blur-bg">

      <p>{{ error.statusCode }}</p>
      <p>ERROR!</p>
    </div>

    <TheButton class="text-whiteBlack" @click="handleError" v-if="!isHome()">Go to Home</TheButton>
  </main>
</template>