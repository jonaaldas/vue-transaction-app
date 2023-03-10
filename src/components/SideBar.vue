<template>
	<div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
		<div
			class="bg-white border-r-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded"
		>
			<div
				class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
			>
				<a
					href="https://flowbite.com/"
					class="flex items-center"
				>
					<span class="self-center text-xl font-semibold whitespace-nowrap"
						>Referer.io</span
					>
				</a>
				<button
					class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
				>
					<svg
						fill="currentColor"
						viewBox="0 0 20 20"
						class="w-6 h-6"
						@click="open = !open"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>

			<nav
				class="h-[650px] flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto md:space-y-6"
			>
				<router-link
					to="/dashboard/transaction"
					class="block px-4 py-2 mt-2 text-xs font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
					href="#"
					>View Transactions</router-link
				>
				<router-link
					to="/dashboard/add-transaction"
					class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
					href="#"
					>Add Transactions</router-link
				>
				<div class="flex justify-center">
					<button
						className="inline-flex items-center justify-center px-3 py-1 bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
					>
						Log out
					</button>
				</div>
			</nav>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
