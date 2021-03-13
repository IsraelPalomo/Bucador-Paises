<template>
	<div class="container">
		<h1 class="text-center">Paises API</h1>
		<Continentes />
		<Buscador />
		<Tarjeta />
	</div>
</template>

<script>
import Buscador from "./components/Buscador";
import Continentes from "./components/Continentes";
import Tarjeta from "./components/Tarjeta";
export default {
	name: "App",
	components: { Tarjeta, Continentes, Buscador },
};
</script>

<style></style>
