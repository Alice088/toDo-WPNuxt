<script setup lang="ts">
const theme = useThemeStore();
const header = ref<HTMLHeadElement | null>(null);
const headerText = ref<HTMLElement | null>(null);
const isVisibleHeader = ref(false);
let resetTime: NodeJS.Timeout | null = null;

const showHeader = () => {
	if(header.value) header.value.style.transform = "translateY(0)";
	isVisibleHeader.value = true;
	resetTime = setTimeout(hideHeader, 10000);
};

const hideHeader = () => {
	if(header.value) header.value.style.transform = "translateY(-100%)";
	if(resetTime) clearTimeout(resetTime);
	isVisibleHeader.value = false;
};

const changeSizeOfHeaderText = () => {
	if(headerText.value) {
		headerText.value.textContent = window.innerWidth <= 410 ? "TODO" : "TO-DO-WPNUXT";
	}
};

onMounted(() => {
	window.addEventListener("resize", changeSizeOfHeaderText);
});
</script>

<template>
	<div>
		<header
			ref="header"
			class="fixed
				w-full
				flex
				text-black
				justify-between
				items-center
				text-[20px]
				p-3
				bg-[url('@/assets/images/backgrounds/God2-Sistine_Chapel.png')]
				transition
				bg-center
				bg-cover
				duration-300
				translate-y-[-100%]"
		>
			<strong class="text-[40px]" ref="headerText">
				TO-DO-WPNUXT
			</strong>

			<theButton @click="theme.theme === 'Dark' ? theme.setLightTheme() : theme.setDarkTheme()"
			           class="dark:bg-BlackOlive
			            dark:text-BabyPink
			            bg-BabyPink
			            p-2
			            h-fit
			            rounded-[5px]
			            transition-[background]
									duration-300
			            text-BlackOlive">
				{{ theme.theme }}
			</theButton>

			<theButton
				@click="isVisibleHeader ? hideHeader() : showHeader()"
				class="absolute
					top-[83px]
					right-[12px]
					bg-BlackOlive
					dark:bg-BabyPink
					p-1
					z-1
					rounded-b-[5px]"
			>
				<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_105_1724)">
						<path
							d="M3 6.00098H21M3 12.001H21M3 18.001H21" :stroke="theme.theme === 'Light' ? `#F0C9C4` : `#3B3738`"
							stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						/>
					</g>
				</svg>
			</theButton>
		</header>

		<slot />
	</div>
</template>

<style scoped>

</style>