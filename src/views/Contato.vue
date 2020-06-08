<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>

    <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <ul>
          <li v-for="(dados, key) in api.contato" :key="dados.id">
            <b>{{key}}:</b>
            {{dados}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
};
</script>

<style>
</style>