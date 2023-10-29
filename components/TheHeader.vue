<script setup>
const { title } = useAppConfig()

const [isVisible, toggleNavbar] = useToggle()

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
	<header class="sticky top-0 z-50 -mb-px border-b border-gray-200 bg-primary py-4 backdrop-blur">
		<nav class="container mx-auto flex items-center justify-between px-2">
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
			<ul class="hidden flex-1 justify-between gap-2 sm:flex">
				<li v-for="(item, index) in navItems" :key="index">
					<NuxtLink
						:to="item.path"
						class="text-light transition-all hover:underline"
						:class="{ underline: $route.path === item.path }"
						>{{ item.label }}</NuxtLink
					>
				</li>
			</ul>
			<ul class="flex flex-1 justify-end gap-2 sm:hidden">
				<Icon
					name="mdi:menu"
					class="h-8 w-8 text-light hover:cursor-pointer"
					@click="toggleNavbar()"
				/>
			</ul>
		</nav>
		<Transition name="slide-fade">
			<ul class="flex flex-1 flex-col justify-between gap-2 p-2 sm:hidden" v-if="isVisible">
				<li v-for="(item, index) in navItems" :key="index">
					<NuxtLink
						:to="item.path"
						class="text-light transition-all hover:underline"
						:class="{ underline: $route.path === item.path }"
						>{{ item.label }}</NuxtLink
					>
				</li>
			</ul>
		</Transition>
	</header>
</template>

<style>
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
