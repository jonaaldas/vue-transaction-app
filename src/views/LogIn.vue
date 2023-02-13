<template>
	<body>
		<div class="bg-indigo-50 h-screen">
			<div
				class="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center"
			>
				<div class="md:hidden sm:mb-8 mb-6">
					<img
						src="../assets/img/logo.svg"
						alt=""
					/>
				</div>
				<div
					class="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6"
				>
					<p
						tabindex="0"
						class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
					>
						Login to your account
					</p>
					<p
						tabindex="0"
						class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
					>
						Dont have account?
						<router-link
							to="/register"
							class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
						>
							Sign up here</router-link
						>
					</p>
					<div>
						<label
							for="email"
							class="text-sm font-medium leading-none text-gray-800"
						>
							Email
						</label>
						<input
							id="email"
							aria-labelledby="email"
							type="email"
							class="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
							placeholder="e.g: john@gmail.com "
						/>
					</div>
					<div class="mt-6 w-full">
						<label
							for="pass"
							class="text-sm font-medium leading-none text-gray-800"
						>
							Password
						</label>
						<div class="relative flex items-center justify-center">
							<input
								id="myInput"
								:type="inputType"
								class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
								v-model="password"
							/>
							<div
								class="absolute right-0 mt-2 mr-3 cursor-pointer"
								@click="changeInputType"
							>
								<div v-if="show === false">
									<!-- open eye -->
									<img
										src="../assets/img/open-eye.svg"
										alt=""
									/>
								</div>
								<div v-if="show === true">
									<!-- close eye -->
									<img
										src="../assets/img/close-eye.svg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-8">
						<button
							role="button"
							class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
						>
							Log In
						</button>
					</div>
				</div>
				<div class="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
					<div class="pl-8 md:block hidden">
						<img
							src="../assets/img/logo.svg"
							alt=""
						/>
					</div>
					<div class="flex items-start mt-8">
						<div>
							<img
								class="w-[132px]"
								src="../assets/img/quote.svg"
								alt=""
							/>
						</div>
						<p class="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">
							Generating random paragraphs can be an excellent way for writers
							to get their creative flow going at the beginning of the day. The
							writer has no idea what topic the random paragraph will be about
							when it appears
						</p>
					</div>
					<div class="flex items-center pl-8 mt-10">
						<div class="w-8 h-8">
							<img
								src="https://i.ibb.co/xLtZCRT/Mask-Group.png"
								alt="profile picture"
								class="w-full h-full"
							/>
						</div>
						<div class="ml-2">
							<p class="text-sm font-medium leading-none text-gray-800">
								Stefanie Prettyman
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>

<script setup>
	import { ref } from 'vue';
	const show = ref(false);
	const password = ref('');
	const inputType = ref('password');
	function changeInputType() {
		if (password.value !== '' && inputType.value === 'password') {
			show.value = !show.value;
			inputType.value = 'text';
		} else {
			show.value = !show.value;
			inputType.value = 'password';
		}
	}
</script>

<style scoped></style>
