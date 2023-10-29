<script setup>
const { author } = useAppConfig()
</script>

<template>
	<footer class="mx-auto -mb-px w-full">
		<div class="flex justify-center bg-primary py-4">
			<span class="flex items-center gap-2 text-light"
				>Made with <Icon name="mdi:favourite" class="text-negative" />by {{ author }}
			</span>
		</div>
	</footer>
</template>
