<script setup>
const { author } = useAppConfig()
</script>

<template>
	<footer class="container mx-auto">
		<div class="flex justify-end py-4">
			<span class="flex items-center gap-2"
				>Made with <UIcon name="i-heroicons-heart-20-solid" class="text-red-600" /> by {{ author }}
			</span>
		</div>
	</footer>
</template>
