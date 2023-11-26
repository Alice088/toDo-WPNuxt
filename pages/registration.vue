<script setup lang="ts">
const randomQuote = await useFetchRandomQuote();
const userAccount = useUserAccountStore();
</script>

<template>
	<main class="registration">
		<section class="registration__quotesBox">
			<blockquote class="registration__quote">
				<q>{{ randomQuote.content }}</q>
				<footer>{{ randomQuote.author }}</footer>
			</blockquote>
		</section>

		<section class="registration__form">
			<form>
				<div></div>

				<div></div>
			</form>
		</section>
	</main>
</template>

<style scoped lang="scss">
@import "assets/style/global";

.registration {
	display: grid;
	grid-template-columns: 1fr;

	& section {
		height: 100dvh;
	}
}

.registration__quotesBox {
	background-image: url("@/assets/images/backgrounds/WomanWithPearlEarring.webp");
	background-size: cover;
	background-position: center;

	padding: 20px;

	display: none;
	align-items: end;

	.registration__quote {
		background-color: $babyPink;

		padding: 10px;
		text-align: center;
		border-radius: 5px;
	}

	.registration__quote.dark {
		background-color: $BlackOlive;
		color: $babyPink;
	}
}

@media screen and (min-width: $table) {
	.registration {
		grid-template-columns: 1fr 2fr;
	}

	.registration__quotesBox {
		display: flex;
	}
}

</style>