<template>
  <div class="formCadProf"> 
      <p>
        <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
    </p>
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png" width="100em" height="50em"/>
   <h2>Pessoa Juridica</h2> 
    <h3>Cadastro</h3>
    <b-form @submit="onSubmit" method="post">
      <b-form-group>
        <b-form-input v-model="cnpj" type="text" placeholder="CNPJ:" id="form´s"></b-form-input>
        <b-form-input v-model="nomeFantasia" type="text" placeholder="Nome Fantasia:" id="form´s"></b-form-input>
        <label  for="appt-time">Horario de Abertura:</label>
            <input v-model="horarioInicial" type="time" id="appt-time" name="appt-time"
                  min="9:00" max="18:00" required />
                  <label for="appt-time">Horario Termino:</label>
            <input  v-model="horarioFinal" type="time" id="appt-time" name="appt-time"
                  min="9:00" max="18:00" required />
      
        <b-form-input v-model="endereco" type="text" placeholder="Endereço:" id="form´s"></b-form-input>
      
        <b-form-select  :required="true" v-model="tiposJuridico">
          <option :selected="true">Selecione uma opção</option>
          <option v-for="option in options" v-bihnd:value="option.value">
                {{ option.text }}
            </option>
        </b-form-select>
    
    </b-form-group>
    

    <b-button href="#" type="submit" variant="primary" id="">Cadastrar</b-button>
    
  </b-form>
  </div> 
</template>


<script>
import axios from "axios"
export default {
  name: "cadPessoaJud",
  data() {
    return {
      idAdm: localStorage.getItem("idAdm"),
      cnpj: "",
      nomeFantasia:"",
      horarioInicial: "",
      horarioFinal: "",
      endereco: "",
      tiposJuridico: 'Selecione uma opção',
      options: [
        {
          text: "Empresa",
          value: "0"
        },
        {
          text: "Móvel",
          value: "1"
        },
        {
          text: "Fixo",
          value: "2"
        },

      ]
    };
  },
  created(){
    //alert("Pessoa Juridica Cadastrada!")
  },
  methods:{
    onSubmit(evt){
      evt.preventDefault();
      
      return axios({
        method: "post",
        url: "localhost:51917/api/pessoaJuridica/",
        data: {
          cnpj: this.cnpj,
          nomeFantasia: this.nomeFantasia,
          horarioInicial: this.horarioInicial,
          horarioFinal: this.horarioFinal,
          endereco: this.endereco,
          tiposJuridico: this.tiposJuridico
        },
      });
    }
  }
};
</script>



<style>
#md {
  width: 25em;
  height: 5em;
  margin-left: 35%;
  margin-top: 2%;
}

#form´s {
  width: 22em;
  top: -3em;
  left: 16em;
  position: relative;
  font-size: 1.5em;
  height: 54%;
  border-radius: 11px;
}

#car {
  width: 64em;
  left: 10em;
  top: 3em;
  border-radius: 2em;
}

#btn {
  width: 8em;
  /* height: 2em; */
  left: 12em;
  position: relative;
  font-size: 1.2em;
}

#x {
  width: 5em;
  top: -16em;
  left: 37.5em;
  position: relative;
  font-weight: 500;
  text-decoration: none;
}
</style