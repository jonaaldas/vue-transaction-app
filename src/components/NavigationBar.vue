<template>
	<header className="bg-gray-900">
		<div
			className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8 justify-around"
		>
			<a
				className="block text-slate-50"
				href="/"
			>
				<span className="sr-only">Home</span>
				<h1>REFERAL.IO</h1>
			</a>

			<div className="flex items-center justify-end ">
				<h3 className=" text-slate-50 flex items-center gap-4 px-2"></h3>
				<button
					className="inline-flex mr-2 items-center justify-center px-3 py-1 bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
				>
					Log In
				</button>
				<button
					className="inline-flex items-center justify-center px-3 py-1 bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
				>
					Log Out
				</button>
			</div>
		</div>
	</header>
</template>

<script setup></script>

<style></style>
