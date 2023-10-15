<script setup>
const { title } = useAppConfig()
</script>

<template>
	<footer class="container mx-auto">
		<div class="flex py-4">{{ title }}</div>
	</footer>
</template>
