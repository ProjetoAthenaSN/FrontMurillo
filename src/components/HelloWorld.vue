<template>
  <div class="hello">
    <router-view/>
     <div class="formCadServico">
       <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
       <h2>Categoria de Serviço</h2>
       <h3>Cadastro</h3>
      <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Nome">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup1"
                    
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.descricao"
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
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      form:{
        name:'',
        descricao:''
      },
      methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '';
      this.form.email = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
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
