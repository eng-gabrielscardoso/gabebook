<template>
	<div class="flex min-h-screen w-full flex-col">
		<TheHeader />

		<main class="container mx-auto w-full flex-grow">
			<slot></slot>
		</main>

		<TheFooter />
	</div>
</template>
