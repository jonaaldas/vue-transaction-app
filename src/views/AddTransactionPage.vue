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
						placeholder="Search for Address"
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
						@click="(e) => addAddressToTransactionForm(e)"
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
							class="peer hidden"
							type="radio"
							:value="['seller']"
							v-model="transactionData.transactionType"
							name="seller"
							id="seller"
						/>
						<label
							for="seller"
							class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-blue-300 cursor-pointer peer-checked:bg-blue-400"
							>Seller</label
						>
					</div>
					<div class="flex items-center">
						<input
							class="hidden peer"
							type="radio"
							:value="['buyer']"
							v-model="transactionData.transactionType"
							name="buyer"
							id="buyer"
						/>
						<label
							for="buyer"
							class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-blue-300 cursor-pointer peer-checked:bg-blue-400"
							>Buyer</label
						>
					</div>
					<div class="flex items-center">
						<input
							class="peer hidden"
							type="radio"
							:value="['buyer', 'seller']"
							v-model="transactionData.transactionType"
							name="both"
							id="both"
						/>
						<label
							for="both"
							class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-blue-300 cursor-pointer peer-checked:bg-blue-400"
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
							v-model="transactionData.clientFirstName"
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
							v-model="transactionData.clientLastName"
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
							v-model="transactionData.clientEmail"
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
							v-model="transactionData.clientPhoneNumber"
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
							v-model="transactionData.address"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="123 Main St"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="city"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>City</label
						>
						<input
							type="text"
							id="city"
							v-model="transactionData.city"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="City"
							required
						/>
					</div>
					<div class="w-full md:w-1/2">
						<label
							for="zipCode"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Zip Code</label
						>
						<input
							type="text"
							id="zipCode"
							v-model="transactionData.postalCode"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Zip Code"
							required
						/>
					</div>
				</div>

				<div
					class="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2"
				>
					<div class="w-full md:w-1/2">
						<label
							for="saleAmount"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Sale Number</label
						>
						<input
							type="number"
							id="saleAmount"
							v-model="transactionData.saleAmount"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="$300,000"
							required
						/>
					</div>
					<div class="relative w-full md:w-1/2">
						<div
							class="absolute inset-y-0 left-0 top-[22px] flex items-center pl-3 pointer-events-none"
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
						<div class="max-w-sm">
							<label
								for="saleAmount"
								class="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
								>Estimate Closing Date
							</label>
							<input
								monthpicker
								monthpicker-autohide
								type="text"
								v-model="transactionData.transactionClosingDate"
								class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-[32px]"
								placeholder="Select date"
								id="datepickerId"
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
							v-model="transactionData.comission"
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
							v-model="transactionData.agentFirstName"
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
							v-model="transactionData.agentLastName"
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
							v-model="transactionData.agentPhoneNumber"
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
							v-model="transactionData.agentEmail"
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
	import EachTransactionInfo from './EachTransactionInfo.vue';
	import axios from 'axios';
	import { onMounted, ref } from 'vue';

	const addressPicked = ref('');

	// form data
	const transactionData = ref({
		transactionType: [],
		transactionClosingDate: '',
		agentFirstName: '',
		agentLastName: '',
		agentPhoneNumber: '',
		agentEmail: '',
		comission: '',
		address: '',
		city: '',
		postalCode: '',
		clientFirstName: '',
		clientLastName: '',
		clientEmail: '',
		clientPhoneNumber: '',
		saleAmount: '',
	});

	// picking type of transaction
	const typeOfTransaction = (transaction) => {
		if (transactionType.value.has(transaction)) {
			transactionType.value.delete(transaction);
		} else {
			transactionType.value.set(transaction, transaction);
		}
		transactionData.value.transactionType = Array.from(
			transactionType.value.keys()
		);
	};

	// store transaction picked
	const transactionType = ref(new Map());

	const closeDropdown = () => {
		addresses.value = [];
		searchAddressQuery.value = '';
	};
	const addAddressToTransactionForm = (e) => {
		addressPicked.value = addresses.value.filter((address) => {
			if (address.properties.formatted === e.target.innerText) {
				return address;
			}
		});

		transactionData.value.address =
			addressPicked.value[0]?.properties.address_line1;
		transactionData.value.city = addressPicked.value[0]?.properties.city;
		transactionData.value.postalCode =
			addressPicked.value[0]?.properties.postcode;
		closeDropdown();
	};

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

	onMounted(() => {
		const datepickerEl = document?.getElementById('datepickerId');
		new Datepicker(datepickerEl, {});
	});
</script>

<style></style>
