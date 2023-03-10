import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import AddTransactionPage from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/AddTransactionPage.vue';
import Dashboard from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/Dashboard.vue';
import EachTransactionInfo from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/EachTransactionInfo.vue';
import Login from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/LogIn.vue';
import Register from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/Register.vue';
import ViewTransactions from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/ViewTransactionsPage.vue';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: App,
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/dashboard',
			component: Dashboard,
			children: [
				{
					path: 'transaction',
					name: 'transaction',
					component: ViewTransactions,
				},
				{
					path: 'transaction/:id',
					name: 'EachTransactionInfo',
					component: EachTransactionInfo,
				},
				{
					path: 'add-transaction',
					name: 'add-transaction',
					component: AddTransactionPage,
				},
			],
		},
	],
});

export default router;
