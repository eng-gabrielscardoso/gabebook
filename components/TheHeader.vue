<script setup>
const { title } = useAppConfig()
</script>

<template>
	<header class="container mx-auto">
		<nav class="flex items-center justify-between py-4">
			<NuxtLink to="/">{{ title }}</NuxtLink>
			<TheThemeSwitcher />
		</nav>
	</header>
</template>
