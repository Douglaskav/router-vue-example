<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <router-link tag="button" class="btn-cursos" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avalicao in api.avaliacoes" :key="avalicao.nome">
                <p>{{avalicao.nome}}</p>
                <p>{{avalicao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Absurd Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
};
</script>

<style>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 15px 30px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: Helvetica, Arial, sans-serif;
}
</style>