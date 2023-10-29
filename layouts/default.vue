<template>
	<div class="flex min-h-screen w-full flex-col bg-light">
		<TheHeader />

		<main class="container mx-auto w-full flex-grow p-2">
			<slot></slot>
		</main>

		<TheFooter />
	</div>
</template>
