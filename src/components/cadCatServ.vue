<template>
  <div class="hello">
    <router-view/>
     <div class="formCadServico">
       <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
       <h2>Categoria de Serviço</h2>
       <h3>Cadastro</h3>
      <b-form @submit="onSubmit" method="post">
      <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="name"
                      required
                      placeholder="Nome">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup1"
                    
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="descricao"
                      required
                      placeholder="Descrição">
        </b-form-input>
      </b-form-group>
      </b-form>
      <b-button type="submit" variant="primary">Salvar</b-button>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'cadCatServ',
  data() {
    return {
      idAdm: localStorage.getItem("idAdm"),
        name:"",
        descricao:""
      };
  },
   methods: {
    onSubmit (evt) {
      evt.preventDefault();
      return axios({
        method: "post",
        url: "http://localhost:51917/api/categoria/" + this.idAdm,
        data: {
          name: this.name,
          descricao: this.descricao
        },
      })
    }
  }
};
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
