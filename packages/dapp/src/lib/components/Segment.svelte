<script lang="ts">
	export let path: string;

	const THRESHOLD = 5;

	function handleHover(e: MouseEvent) {
		const { clientX, clientY, currentTarget } = e;
		const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget as HTMLDivElement;

		if (currentTarget instanceof HTMLDivElement) {
			const horizontal = (clientX - offsetLeft) / clientWidth;
			const vertical = (clientY + scrollY - offsetTop) / clientHeight;
			const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
			const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
			currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.2, 1.2, 1.2)`;
			currentTarget.style.boxShadow = `0px 0px 171px 0px rgba(0,0,0,0.57);`;
			currentTarget.style.zIndex = `10`;
		}
	}

	function resetStyles(e: MouseEvent) {
		const { currentTarget } = e;

		if (currentTarget instanceof HTMLDivElement) {
			currentTarget.style.transform = `perspective(${currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
			currentTarget.style.boxShadow = `box-shadow: 0px 0px 171px 0px rgba(0,0,0,0.57);
                                      -webkit-box-shadow: 0px 0px 171px 0px rgba(0,0,0,0.57);
                                      -moz-box-shadow: 0px 0px 171px 0px rgba(0,0,0,0.57);`;
			setTimeout(() => {
				currentTarget.style.zIndex = `1`;
			}, 200);
		}
	}
</script>

<div on:mousemove={handleHover} on:mouseleave={resetStyles} class="segment">
	<img src={path} alt="segment" />
</div>

<style>
	.segment {
		transition: transform 0.2s ease;
		transform-style: preserve-3d;
		will-change: transform;
	}
</style>
