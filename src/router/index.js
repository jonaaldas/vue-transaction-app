import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Dashboard from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/Dashboard.vue';
import Login from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/LogIn.vue';
import Register from '/Users/incruisesja/Dropbox/JonaCode/Transaction App Vue3/transactionApp/src/views/Register.vue';
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
			name: 'dashboard',
			component: Dashboard,
		},
	],
});

export default router;
