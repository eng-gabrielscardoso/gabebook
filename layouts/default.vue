<template>
	<div class="flex h-[2000px] min-h-screen w-full flex-col">
		<TheHeader />

		<main class="bg-background container mx-auto w-full flex-grow p-2">
			<slot></slot>
		</main>

		<TheFooter />
	</div>
</template>
