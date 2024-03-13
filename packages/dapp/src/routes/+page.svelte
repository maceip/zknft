<script lang="ts">
	import Seg from '$lib/components/Seg.svelte';
	import Typewriter from 'svelte-typewriter';
	import Logo from '$lib/assets/Logo.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	let showButton = false;
	let showForm = false;
	let email: string;

	onMount(() => {
		setTimeout(() => {
			showButton = true;
		}, 4000);
	});

	const ntfy = () => {
		fetch('https://ntfy.sh/zknft-taipei', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: email
		});
		showForm = false;
		email = '';
	};
</script>

<div class="w-[100px] p-3 ml-4 absolute">
	<Logo />
</div>

<div class="grid h-full sm:place-items-center justify-center">
	<div class="mx-auto flex flex-col flex-col-reverse justify-end sm:flex-row">
		<div class=" m-6 -mt-1 sm:mt-20">
			<div class="h-32 w-64 font-bold italic">
				<Typewriter mode="cascade" delay={0}>
					<p class="sm:mt-10">Introducing zkNFT...</p>
				</Typewriter>
				<Typewriter delay={1500}>
					<p class="mt-3">zkNFTs provide verifiable partial ownership of NFTs using tlsnotary</p>
				</Typewriter>
			</div>
			{#if showButton}
				<button
					on:click={() => {
						showForm = true;
					}}
					transition:fade={{ duration: 2000 }}
					class="w-full rounded-sm border border-black p-1 px-3 transition-all duration-500 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
				>
					Notify me at launch
				</button>
			{/if}
		</div>
		<div class="relative mt-10 h-[400px] w-full max-w-[400px] p-4 sm:mt-0">
			<img src="/img/ape.png" alt="bored ape" class="opacity-70" />
			<div class="absolute top-[15%] right-[15%] z-10">
				<Seg />
			</div>
		</div>
	</div>
</div>

{#if showForm}
	<div
		transition:slide
		class="fixed bottom-0 left-[calc(100vw-50vw-200px)] z-50 mx-auto w-[400px] bg-neutral-200 p-6 dark:bg-black"
	>
		<form>
			<input
				bind:value={email}
				placeholder="email"
				type="text"
				id="email"
				name="email"
				required
				class="my-3 w-full"
			/>
			<button
				type="submit"
				on:click={ntfy}
				class="w-full rounded-sm border border-black p-1 px-3 transition-all duration-500 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
				>Let me know</button
			>
		</form>
		<button
			class="absolute top-0 right-0 p-3 px-6"
			on:click={() => {
				showForm = false;
			}}>X</button
		>
	</div>
{/if}

<style>
	input {
		outline: none;
		border: none;
		background-image: none;
		background-color: transparent;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}
</style>
