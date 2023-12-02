<script setup lang="ts">
type toDo = {
	header: string,
	content: string,
	dateStamp: number,
}

const theme =  useThemeStore();
const userStore = useUserAccountStore();

const toDoHeader = ref("");
const toDoContent = ref("");

const createToDoConstructor = () => {
	let counterID = 1;

	return () => {
		if(userStore.toDo === null) {
			console.log("цщу");
			userStore.toDo = new Map<number, toDo>();
			userStore.toDo.set(counterID, { header: toDoHeader.value, content: toDoContent.value, dateStamp: Date.now()});
		} else {
			console.log("флфлфлф", counterID);
			userStore.toDo.set(counterID, { header: toDoHeader.value, content: toDoContent.value, dateStamp: Date.now()});
		}

		++counterID;
	};
};
const createToDo = createToDoConstructor();


onMounted(theme.detectAndSetTheme);
</script>

<template>
	<main class="home">
		<header class="home__header">
			<img src="@/assets/images/backgrounds/CatsPicturedInFamousArt7.jpg" alt="cat" />
			{{ userStore.nickname ?? "Nickname" }} ( {{ userStore.id ?? Date.now() }} )
		</header>

		<h1 class="home__welcome"> Welcome to Home, {{  userStore.nickname ?? "Nickname" }}! </h1>

		<section class="home__todoListBox">
			<TheModalButton>
				<template v-slot:button>
					<TheButton class="home__createToDoButton"> create ToDo </TheButton>
				</template>

				<template v-slot:popUpContent>
					<div class="home__toDoModal">
						<TheInput placeholder="Header Text"
						          v-model="toDoHeader"
						          @update:model-value="newValue => toDoHeader = newValue"
						/>

						<TheInput placeholder="Main Text"
						          v-model="toDoContent"
						          @update:model-value="newValue => toDoContent = newValue"
						/>

						<TheButton @click="createToDo()" class="home-toDoModal__createButton"> CreateButton </TheButton>
					</div>
				</template>
			</TheModalButton>

			<div class="home__todoList">
				<TheToDo v-for="[id, toDo] in userStore.toDo"
				         :key="id"
				         :class="{ 'dark': theme.theme === 'Dark' }"
				>
					<template v-slot:header>
						{{ toDo.header }}
					</template>

					<template v-slot:content>
						{{ toDo.content }}
					</template>

					<template v-slot:date>
						{{ new Date(toDo.dateStamp).toDateString() }}
					</template>
				</TheToDo>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
@import "assets/style/colors";

* {
	transition: all 300ms ease-in-out;
}

.home {
	display: flex;
	flex-direction: column;
	row-gap: 100px;
	padding: 20px;

	height: fit-content;
	min-height: 100vh;
	background-color: $babyPink;

	&.dark {
		background-color: $blackOlive;
	}
}

.home__header {
	display: flex;
	color: $blackOlive;
	align-items: center;
	column-gap: 20px;

	img {
		width: 50px;
		height: 50px;
		border-radius: 5px;
	}

	&.dark {
		color: $babyPink;
	}
}

.home__welcome {
	color: $blackOlive;

	text-align: center;
	font-size: 50px;

	&.dark {
		color: $babyPink;
	}
}

.home__todoListBox {
	display: flex;
	flex-direction: column;
	row-gap: 10px;

	background-color: $blackOlive;

	height: fit-content;
	min-height: 300px;
	max-height: 600px;
	border-radius: 5px;
	padding: 10px;

	overflow: scroll;

	&.dark {
		background-color: $babyPink;
	}
}

.home__todoList {
	display: flex;
	flex-direction: column;
	row-gap: 10px;

	background-color: $babyPink;

	height: fit-content;
	min-height: 300px;
	max-height: 600px;
	border-radius: 5px;
	padding: 10px;
	border: $babyPink 3px solid;

	overflow: scroll;

	&.dark {
		background-color: $blackOlive;
		border-color: $blackOlive;
	}
}

.home__createToDoButton {
	border-radius: 5px;
	padding: 3px;
	width: 100%;
	font-size: 20px;

	color: $blackOlive;
	background-color: $babyPink;

	&.dark {
		background-color: $blackOlive;
		color: $babyPink;
	}
}

.home__toDoModal {
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	width: 100%;
}

.home-toDoModal__createButton {
	background-color: $blackOlive;
	color: $babyPink;

	border-radius: 5px;
	height: 40px;

	&.dark {
		background-color: $babyPink;
		color: $blackOlive;
	}
}
</style>