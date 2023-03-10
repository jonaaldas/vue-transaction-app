<template>
	<div
		class="p-6 bg-white border border-gray-200 rounded-lg shadow w-[90%] mt-2"
	>
		<a href="#">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				alt=""
			/>
		</a>
		<div class="p-5">
			<a href="#">
				<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
					{{ transactionAddress }}
				</h5>
			</a>
			<div class="mb-2">
				<span
					class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
					v-for="(type, index) in transactionType"
					:key="index"
					>{{ type }}</span
				>
			</div>
			<p class="mb-3 font-normal text-gray-700">
				<strong>Name</strong>: {{ clientFirstName }}
				{{ clientLastName }}
			</p>
			<p class="mb-3 font-normal text-gray-700">
				<strong>Amount</strong>: {{ transactionAmount }}
			</p>

			<RouterLink
				:to="{ name: 'EachTransactionInfo', params: { id: index } }"
				class="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
				>View Transaction</RouterLink
			>
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';
	import { RouterLink } from 'vue-router';

	const props = defineProps([
		'transactionAddress',
		'transactionType',
		'clientFirstName',
		'clientLastName',
		'transactionAmount',
		'index',
	]);
</script>

<style></style>
