<template>
  <div class="hello">
    <router-view/>
     <div class="formCadAdm">
       <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
       <h2>Cadastro de Administrador</h2>
       <h3>Cadastro</h3><!--@reset="onReset"-->
      <b-form @submit="onSubmit" method="post">
        <b-form-group id="exampleInputGroup2"
                      label-for="exampleInput2">
          <b-form-input type="text"
                        v-model="NomeCompleto"
                        required
                        placeholder="Nome">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup1"
                      label-for="exampleInput1">
          <b-form-input type="email"
                        v-model="email"
                        required
                        placeholder="Email">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup1"
                      label-for="exampleInput1">
          <b-form-input type="password"
                        v-model="senha"
                        required
                        placeholder="Senha">
          </b-form-input>
        </b-form-group>

        

        <b-button type="submit" variant="primary">Salvar</b-button>
      </b-form>
      </div>
      
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cadAdm",
  data() {
    return {
      NomeCompleto: "",
      email: "",
      senha: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert("Administrador Cadastrado!");
      return axios({
        method: "post",
        url: "http://localhost:51917/api/administrador",
        data: {
          NomeCompleto: this.NomeCompleto,
          Email: this.email,
          Senha: this.senha
        },
      }).then((response) => {
        console.info(response.data);
        localStorage.setItem("idAdm", response.data.id);
       this.$router.push('/cadPessoaJud');
      });
      
      
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
