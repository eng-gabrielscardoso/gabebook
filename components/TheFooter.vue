<script setup>
const { author } = useAppConfig()
</script>

<template>
	<footer
		class="mx-auto -mb-px w-full border-t border-gray-200 py-4 backdrop-blur dark:border-gray-800"
	>
		<div class="flex justify-center py-1">
			<span class="flex items-center gap-2">Made with Love by {{ author }} </span>
		</div>
	</footer>
</template>
