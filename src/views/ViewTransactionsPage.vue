<template>
	<div class="w-full flex justify-center align-center flex-col py-12 px-6">
		<div
			class="p-6 bg-white border border-gray-200 rounded-lg shadow w-[90%] h-fit inline-block"
		>
			<h1 class="text-2xl bold">Serach Transaction</h1>
			<hr class="pb-3" />

			<form @submit.prevent>
				<label
					for="default-search"
					class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>Search</label
				>
				<div class="relative">
					<div
						class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
					>
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						v-model="searchAddressQuery"
						class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for Transaction"
						required
					/>
					<button
						type="submit"
						@click="loadAddresses"
						class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>
			<!-- dropdwon -->
			<div
				v-show="addresses.length > 0"
				class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-full transition-all"
			>
				<button
					@click="closeDropdown"
					type="button"
					class="top-3 ml-auto right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					data-modal-hide="popup-modal"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span class="sr-only">Close modal</span>
				</button>
				<ul
					class="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdown-button"
				>
					<li
						v-for="(address, index) in addresses"
						:key="index"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						{{ address.properties.formatted }}
					</li>
					<br />
				</ul>
			</div>
			<div class="mt-3">
				<span class="mr-3">Filter</span>
				<span
					class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
					>Seller</span
				>
				<span
					class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
					>Buyer</span
				>
			</div>
		</div>

		<!-- Display component -->
		<div
			class="md:grid md:grid-cols-2 md:grid-flow-row lg:grid-cols-3 2xl:grid-cols-4"
		>
			<TransactionDisplayCard
				v-for="(transaction, index) in store.transactions"
				:key="index"
				:transactionAddress="transaction.address"
				:transactionType="transaction.transactionType"
				:clientFirstName="transaction.clientFirstName"
				:clientLastName="transaction.clientLastName"
				:transactionAmount="transaction.saleAmount"
				:index="index"
			/>
		</div>
	</div>
</template>

<script setup>
	import axios from 'axios';
	import { useTransactionStore } from '@/stores/transactionsStore';
	import { ref } from 'vue';
	import { defineAsyncComponent } from 'vue';

	const store = useTransactionStore();
	const TransactionDisplayCard = defineAsyncComponent(() =>
		import('../components/TransactionDisplayCard.vue')
	);
	const open = ref(false);
	function openModal() {
		open.value = !open.value;
	}

	// Address API
	const addresses = ref([]);
	const searchAddressQuery = ref('');
	const loadAddresses = async () => {
		const params = {
			text: searchAddressQuery.value,
			apiKey: '52ab2805aa3644c5a735f9b40faa03df',
		};
		try {
			const res = await axios.get(
				'https://api.geoapify.com/v1/geocode/autocomplete',
				{
					params,
				}
			);
			addresses.value = res.data.features;
		} catch (err) {
			console.log(err);
		}
	};
	const closeDropdown = () => {
		addresses.value = [];
		searchAddressQuery.value = '';
	};
</script>

<style scoped></style>
