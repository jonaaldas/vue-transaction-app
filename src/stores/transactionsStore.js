import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTransactionStore = defineStore('transactions', () => {
	const transactions = ref([
		{
			address: '3417 Ravens Crest Drive',
			agentEmail: 'jas@gmail.com',
			agentFirstName: 'Ja',
			agentLastName: 'steven',
			agentPhoneNumber: '7324852784',
			city: 'Plainsboro Township',
			clientEmail: 'ac@gmail.com',
			clientFirstName: 'Alex',
			clientLastName: 'Costa',
			clientPhoneNumber: '7324852784',
			comission: 5,
			postalCode: '08536',
			saleAmount: 400000,
			transactionType: ['seller', 'buyer'],
			transactionClosingDate: '2023-12-22',
		},
		{
			address: '649 Nassau Street',
			agentEmail: 'ka@gmail.com',
			agentFirstName: 'k',
			agentLastName: 'Jay',
			agentPhoneNumber: '7324852784',
			city: 'North Brunswick Township',
			clientEmail: 'ls@gmail.com',
			clientFirstName: 'Stefanie',
			clientLastName: 'Prettyman',
			clientPhoneNumber: '7324852784',
			comission: 2,
			postalCode: '08901',
			saleAmount: 285000,
			transactionType: ['seller'],
			transactionClosingDate: '2023-04-22',
		},
		{
			address: '649 Nassau Street',
			agentEmail: 'ka@gmail.com',
			agentFirstName: 'k',
			agentLastName: 'Jay',
			agentPhoneNumber: '7324852784',
			city: 'North Brunswick Township',
			clientEmail: 'ls@gmail.com',
			clientFirstName: 'Stefanie',
			clientLastName: 'Prettyman',
			clientPhoneNumber: '7324852784',
			comission: 2,
			postalCode: '08901',
			saleAmount: 285000,
			transactionType: ['seller'],
			transactionClosingDate: '2023-04-22',
		},
		{
			address: '649 Nassau Street',
			agentEmail: 'ka@gmail.com',
			agentFirstName: 'k',
			agentLastName: 'Jay',
			agentPhoneNumber: '7324852784',
			city: 'North Brunswick Township',
			clientEmail: 'ls@gmail.com',
			clientFirstName: 'Stefanie',
			clientLastName: 'Prettyman',
			clientPhoneNumber: '7324852784',
			comission: 2,
			postalCode: '08901',
			saleAmount: 285000,
			transactionType: ['seller'],
			transactionClosingDate: '2023-04-22',
		},
	]);

	return { transactions };

	// const count = ref(0)
	// const doubleCount = computed(() => count.value * 2)
	// function increment() {
	//   count.value++
	// }

	// return { count, doubleCount, increment }

	// state: () => ({
	//   blogPosts: [],
	//   singleBlogPostId: "",
	//   isLoading: false,
	//   random: "I am coming from the the use store",
	// }),
	// actions: {
	//   async getBlogPosts() {
	//     this.isLoading = true;
	//     const pageTable = await getPageTable("0cef7ec8e56442d087ee621dadef614f");
	//     let data = pageTable
	//       .filter((page) => page.public)
	//       .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
	//     // localStorage.setItem("posts", data);
	//     this.blogPosts = data;
	//     this.isLoading = false;
	//   },
	//   async getASinglePost(slug) {
	//     this.isLoading = true;
	//     const pageTable = await getPageTable("0cef7ec8e56442d087ee621dadef614f");
	//     let data = pageTable
	//       .filter((page) => page.public)
	//       .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
	//     let post = data.filter((p) => p.slug === slug);
	//     this.singleBlogPostId = await getPageBlocks(post[0].id);
	//     this.isLoading = false;
	//   },
	// },
});
