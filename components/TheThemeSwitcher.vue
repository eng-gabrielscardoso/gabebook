<script setup>
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})
</script>

<template>
	<button title="Toggle Theme" class="btn btn-circle btn-ghost dark:text-white" @click="!!isDark">
		<Icon
			:name="colorMode.preference === 'light' ? 'ph:moon-fill' : 'ph:sun-fill'"
			class="h-4 w-4 text-black dark:text-orange-400 md:h-6 md:w-6 xl:h-8 xl:w-8"
		/>
	</button>
</template>
