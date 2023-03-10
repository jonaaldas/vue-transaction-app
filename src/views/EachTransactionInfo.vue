<template>
	{{ tran }}
</template>

<script setup>
	import { useTransactionStore } from '@/stores/transactionsStore';
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const store = useTransactionStore();

	const tran = ref({});
  
	tran.value = store.transactions.filter(
		(tran, index) => index == route.params.id
	);
</script>

<style></style>
