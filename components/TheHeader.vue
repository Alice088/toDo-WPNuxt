<script setup lang="ts">
const themeStore = useThemeStore();

const header = ref<HTMLElement | null>(null);
const isVisibleHeader = ref(false);
const headerText = ref("TODO");
let resetTime: NodeJS.Timeout | null = null;

const headerAdaptation = () => headerText.value = window.innerWidth <= 410 ? "TODO" : "TO-DO-WPNUXT";

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

onMounted(() => {
	window.addEventListener("resize", headerAdaptation);
});
</script>

<template>
	<header ref="header" class="headerBar">
		<strong> {{ headerText }} </strong>

		<TheButton class="header__themeButton"
		           @click="themeStore.theme === 'Dark' ? themeStore.setLightTheme() : themeStore.setDarkTheme()"
		>
			{{ themeStore.theme }}
		</TheButton>

		<TheButton @click="isVisibleHeader ? hideHeader() : showHeader()" class="header__openButton">
			<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_105_1724)">
					<path
						d="M3 6.00098H21M3 12.001H21M3 18.001H21" :stroke="themeStore.theme === 'Light' ? `#F0C9C4` : `#3B3738`"
						stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					/>
				</g>
			</svg>
		</TheButton>
	</header>
</template>

<style scoped lang="scss">
@import "assets/style/colors";

.headerBar {
	z-index: 9999;
	position: fixed;

	display: flex;
	justify-content: space-between;

	padding: 5px;
	height: fit-content;
	width: 100%;

	transform: translateY(-100%);
	transition: transform 300ms ease-in-out;

	background-image: url("assets/images/backgrounds/God2-Sistine_Chapel.png");
	background-size: cover;
	background-position: center;

	strong {
		font-size: 40px;
		color: black;
	}
}

.header__openButton {
	position: absolute;
	top: 70px;
	right: 12px;
	z-index: 9999;

	padding: 4px;
	border-radius: 0 0 5px 5px;

	background-color: $blackOlive;

	&.dark {
		background-color: $babyPink;
	}
}

.header__themeButton {
	background-color: $babyPink;
	color: $blackOlive;

	padding: 10px;
	height: fit-content;
	width: fit-content;
	border-radius: 5px;

	align-self: center;

	&.dark {
		background-color: $blackOlive;
		color: $babyPink;
	}
}
</style>