<template>
	<div>
		<SideBarVue />
		<!-- components -->
		<!-- <ViewTransactionPage v-show="tab === 'transactions'" />
		<AddTransactionPage v-show="tab === 'addTransaction'" /> -->
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { defineAsyncComponent } from 'vue';
	const ViewTransactionPage = defineAsyncComponent(() =>
		import(
			'/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/ViewTransactionsPage.vue'
		)
	);
	const AddTransactionPage = defineAsyncComponent(() =>
		import(
			'/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/AddTransactionPage.vue'
		)
	);
	const SideBarVue = defineAsyncComponent(() =>
		import(
			'/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/components/SideBar.vue'
		)
	);
	const open = ref(false);
	const tab = ref('addTransaction');
	const changeTab = (tabName) => {
		tab.value = tabName;
	};
</script>

<style scoped></style>
