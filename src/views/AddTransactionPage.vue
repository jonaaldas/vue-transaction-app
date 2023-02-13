<template>
	<div class="w-full flex align-center flex-col py-12 px-6">
		<div
			class="p-6 bg-white border border-gray-200 rounded-lg shadow w-[90%] h-fit inline-block mb-3"
		>
			<h1 class="text-2xl bold">Add A New Transaction</h1>
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
						@click="(e) => addTransaction(e)"
						:key="index"
						class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>
						{{ address.properties.formatted }}
					</li>
					<br />
				</ul>
			</div>
		</div>

		<!-- card to add transaction -->
		<div
			class="p-6 bg-white border border-gray-200 rounded-lg shadow w-[90%] h-fit inline-block"
		>
			<div class="flex flex-row justify-between">
				<h2 class="text-2xl">Info</h2>
				<button
					type="button"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Add
				</button>
			</div>
			<hr class="mb-2" />
			<!-- Transaction Type -->
			<div class="space-y-2 mb-2">
				<h2 class="text-xl bold mb-2">Type of Transaction</h2>

				<div class="flex flex-row space-x-2">
					<div class="flex items-center">
						<input
							class="hidden"
							type="radio"
							value="seller"
							v-model="transactionData.transactionType"
							name="seller"
							id="seller"
						/>
						<label
							for="seller"
							class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
							>Seller</label
						>
					</div>
					<div class="flex items-center">
						<input
							class="hidden"
							type="radio"
							value="buyer"
							v-model="transactionData.transactionType"
							name="buyer"
							id="buyer"
						/>
						<label
							for="buyer"
							class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
							>Buyer</label
						>
					</div>
					<div class="flex items-center">
						<input
							class="hidden"
							type="radio"
							value="both"
							v-model="transactionData.transactionType"
							name="both"
							id="both"
						/>
						<label
							for="both"
							class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
							>Both</label
						>
					</div>
				</div>
			</div>
			<!-- Client Info -->
			<div class="space-y-2 mb-2">
				<h2 class="text-xl bold">Client Info</h2>
				<div
					class="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row"
				>
					<div class="w-full md:w-1/2">
						<label
							for="last_name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>First name</label
						>
						<input
							type="text"
							id="first_name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="John"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="last_name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last Name</label
						>
						<input
							type="text"
							id="last_name"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Last Name"
							required
						/>
					</div>
				</div>
				<div class="flex flex-col md:flex-row md:space-x-2">
					<div class="w-full md:w-1/2">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email</label
						>
						<input
							type="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="john@gmail.com"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="phoneNumber"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone Number</label
						>
						<input
							type="tel"
							id="phoneNumber"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="732 485 2890"
							required
						/>
					</div>
				</div>
			</div>
			<!-- Transaction Info -->
			<div class="space-y-2 mb-2">
				<h2 class="text-xl bold">Tranasaction Info</h2>
				<div
					class="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2"
				>
					<div class="w-full md:w-1/2">
						<label
							for="address"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Address</label
						>
						<input
							type="text"
							id="address"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="123 Main St"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="saleAmount"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Sale Number</label
						>
						<input
							type="number"
							id="saleAmount"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="$300,000"
							required
						/>
					</div>
				</div>
				<div
					class="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2"
				>
					<div class="w-full md:w-1/2">
						<label
							for="comission"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Your Comission</label
						>
						<input
							type="comission"
							id="number"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="3%"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<div class="relative max-w-sm">
							<div
								class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<input
								ref="date-picker"
								datepicker
								type="text"
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
								placeholder="Select date"
							/>
						</div>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="comission"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Your Comission</label
						>
						<input
							type="comission"
							id="number"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="3%"
							required
						/>
					</div>
				</div>
			</div>
			<!-- Agent Information -->
			<div class="space-y-2 mb-2">
				<h2 class="text-xl bold">Agent Information</h2>
				<div
					class="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between md: space-x-1"
				>
					<div class="w-full md:w-1/2">
						<label
							for="agentFirstName"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>First name</label
						>
						<input
							type="text"
							id="agentFirstName"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Agent First Name"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="agent"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last name</label
						>
						<input
							type="text"
							id="agentLastName"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Agent Last Name"
							required
						/>
					</div>
				</div>
				<div class="flex flex-col md:flex-row justify-between md: space-x-1">
					<div class="w-full md:w-1/2">
						<label
							for="agentPhoneNumber"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Phone Number</label
						>
						<input
							type="tel"
							id="agentPhoneNumber"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Agent Phone Number"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="agentEmail"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Agent Email</label
						>
						<input
							type="email"
							id="agentEmail"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Agent Email"
							required
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import Datepicker from 'flowbite-datepicker/Datepicker';
	import axios from 'axios';
	import { ref } from 'vue';
	const addresses = ref([]);
	const searchAddressQuery = ref('');
	const addressPicked = ref('');

	// form data
	const transactionData = ref({
		transactionType: '',
		transactionDate: '',
		transactionPrice: '',
		agentFirstName: '',
		agentLastName: '',
		agentPhoneNumber: '',
		agentEmail: '',
		comission: '',
	});
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
	const addTransaction = (e) => {
		addressPicked.value = addresses.value.find(
			(address) => address.properties.formatted === e.target.innerText
		);

		console.log(addressPicked.value);
	};

	const datepickerEl = document.getElementById('datepickerId');
	new Datepicker(datepickerEl, {});
</script>

<style></style>
