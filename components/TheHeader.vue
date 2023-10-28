<script setup>
const { title } = useAppConfig()

const navItems = [
	{
		label: 'Blog',
		path: '/blog'
	},
	{
		label: 'Contato',
		path: '/contato'
	},
	{
		label: 'Sobre',
		path: '/sobre'
	}
]
</script>

<template>
	<header
		class="sticky top-0 z-50 -mb-px border-b border-gray-200 bg-primary/75 py-4 backdrop-blur"
	>
		<nav class="container mx-auto flex items-center justify-between">
			<ul class="w-2/3">
				<li>
					<NuxtLink
						to="/"
						class="text-bold text-lg text-light transition-colors hover:text-light/75"
					>
						{{ title }}
					</NuxtLink>
				</li>
			</ul>
			<ul class="flex flex-1 justify-between gap-2">
				<li v-for="(item, index) in navItems" :key="index">
					<NuxtLink :to="item.path" class="text-light transition-all hover:underline">{{
						item.label
					}}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
