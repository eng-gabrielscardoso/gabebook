<script setup>
const { title } = useAppConfig()

const navItems = [
	{
		link: '/blog',
		label: 'Blog'
	},
	{
		link: '/sobre',
		label: 'Sobre'
	},
	{
		link: '/contato',
		label: 'Contato'
	}
]
</script>

<template>
	<header
		class="sticky top-0 z-50 -mb-px border-b border-gray-200 py-4 backdrop-blur dark:border-gray-800"
	>
		<nav class="container mx-auto flex items-center justify-between">
			<UButton to="/" variant="link" class="text-lg">{{ title }}</UButton>
			<div class="flex w-full items-center justify-center gap-4 px-2">
				<UButton v-for="(item, index) in navItems" :key="index" variant="link" :to="item.link">{{
					item.label
				}}</UButton>
			</div>
			<div class="flex items-center justify-end gap-4 px-2">
				<TheThemeSwitcher />
				<ClientOnly>
					<UButton
						icon="i-simple-icons-github"
						to="https://github.com/eng-gabrielscardoso/gabebook"
						color="gray"
						variant="ghost"
						aria-label="Github"
					/>

					<template #fallback>
						<div class="h-8 w-8"></div>
					</template>
				</ClientOnly>
			</div>
		</nav>
	</header>
</template>
