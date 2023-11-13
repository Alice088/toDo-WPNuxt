<script setup lang="ts">
const theme = useThemeStore();
const header = ref<HTMLHeadElement | null>(null);
const headerMainText = ref<HTMLElement | null>(null);
let isVisibleHeader = false;

function showOrHideHeader() {
	if(isVisibleHeader) {
		(header.value as HTMLHeadElement).style.transform = "translateY(0)";
		isVisibleHeader = false;
	} else {
		(header.value as HTMLHeadElement).style.transform = "translateY(-100%)";
		isVisibleHeader = true;
	}
}

onMounted(() => {
	window.addEventListener("resize", () => {
		let text = headerMainText.value;
		text ? text.innerHTML = window.innerWidth <= 410 ? "TODO" : "TO-DO-WPNUXT" : null;
	});
});
</script>

<template>
	<div>
		<header ref="header"
			class="
			fixed
			w-full
			flex
			text-BabyPink
			dark:text-BlackOlive
			justify-between
			text-[20px]
			p-3
			bg-BlackOlive
			dark:bg-BabyPink
			transition
			duration-300
			translate-y-[-100%]"
		>
			<strong class="text-[40px]" ref="headerMainText">
				TO-DO-WPNUXT
			</strong>

			<theButton @click="theme.theme === 'Dark' ? theme.setLightTheme() : theme.setDarkTheme()">
				{{ theme.theme }}
			</theButton>

			<theButton @click="showOrHideHeader"
				class="
				absolute
				top-[84px]
				right-[12px]
				bg-BlackOlive
				dark:bg-BabyPink
				p-1
				rounded-b-[20px]"
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