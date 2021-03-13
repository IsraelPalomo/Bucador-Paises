<template>
	<div class="row">
		<div class="col-12" v-for="pais in paises" :key="pais.name">
			<TarjetaPais :pais="pais" />
		</div>
	</div>
</template>

<script>
import TarjetaPais from "./TarjetaPais";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
	components: { TarjetaPais },
	setup() {
		const store = useStore();

		const paises = computed(() => {
			return store.getters.topPaisesPoblacion;
		});

		onMounted(async () => {
			await store.dispatch("getPaises");
			await store.dispatch("filtrarRegion", "Americas");
		});
		return { paises };
	},
};
</script>

<style></style>
