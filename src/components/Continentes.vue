<template>
	<div class="text-center">
		<h3>Filtrar Por Continentes</h3>
		<div class="btn-group mb-3">
			<button @click="filtrarRegion('Americas')" class="btn btn-dark">AM</button>
			<button @click="filtrarRegion('Europe')" class="btn btn-dark">EU</button>
			<button @click="filtrarRegion('Asia')" class="btn btn-dark">AS</button>
			<button @click="filtrarRegion('Oceania')" class="btn btn-dark">OC</button>
			<button @click="filtrarRegion('Africa')" class="btn btn-dark">AF</button>
			<button @click="filtrarRegion('')" class="btn btn-dark">ALL</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	methods: {
		...mapActions(["filtrarRegion"]),
	},
};
</script>

<style></style>
