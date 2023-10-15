<template>
	<div class="flex h-full min-h-screen w-full flex-col">
		<TheHeader />
		<main class="container mx-auto w-full">
			<slot></slot>
		</main>

		<TheFooter />
	</div>
</template>
