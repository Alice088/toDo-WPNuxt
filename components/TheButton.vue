<template>
  <button class="enabled:active:scale-[.93]
							   transition
							   duration-300
							   enabled:cursor-pointer
							   select-none
								 disabled:opacity-50
								 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>