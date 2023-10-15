<script setup>
const { title } = useAppConfig()

const navItems = [
	{
		link: '/blog',
		label: 'Blog'
	},
	{
		link: '/about',
		label: 'Sobre'
	},
	{
		link: '/contact',
		label: 'Contato'
	}
]
</script>

<template>
	<header class="sticky left-0 top-0 z-50 w-full py-4 shadow-md">
		<nav class="container mx-auto flex items-center justify-between">
			<UButton to="/" variant="link" class="text-lg">{{ title }}</UButton>
			<div class="flex w-1/2 items-center justify-end gap-4">
				<UButton v-for="(item, index) in navItems" :key="index" variant="link" :to="item.link">{{
					item.label
				}}</UButton>
				<TheThemeSwitcher />
			</div>
		</nav>
	</header>
</template>
