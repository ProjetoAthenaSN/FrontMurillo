<template>
  <div class="formCadProf"> 
      
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png" width="100em" height="50em"/>
   <h2>Pessoa Juridica</h2> 
    <h3>Cadastro</h3>
    <b-form @submit="onSubmit" method="post">
      <div class="listas">
      <b-form-group>
        <b-form-input v-model="cnpj" type="text" placeholder="CNPJ:" id="form´s"></b-form-input>
       
        <b-form-input v-model="nomeFantasia" type="text" placeholder="Nome Fantasia:" id="form´s"></b-form-input>
        
        <label  for="appt-time">Horario de Abertura:</label>
            <input v-model="horarioInicial" type="time" id="appt-time" name="appt-time"
                  min="9:00" max="18:00" required />
                  <label for="appt-time">Horario Termino:</label>
            <input  v-model="horarioFinal" type="time" id="appt-time" name="appt-time"
                  min="9:00" max="18:00" required />
          <div class="form-row">
            <div class="form-group col-md-5">
              <b-form-input type="text" v-model="logradouro" placeholder="Logradouro:"  id="form´s"></b-form-input>
            </div>
            <div class="form-group col-md-5">
              <b-form-input type="text" v-model="numero" placeholder="Número:" id="form´s"></b-form-input>
            </div>
          </div>
          <b-form-input type="text" v-model="complemento" placeholder="Complemento:" id="form´s"></b-form-input>
          <div class="form-row">
            <div class="form-group col-md-5">
              <b-form-input type="text" v-model="cep" placeholder="CEP:" id="form´s"></b-form-input>
            </div>
            <div class="form-group col-md-5">
              <b-form-input type="text" v-model="bairro" placeholder="Bairro:" id="form´s"></b-form-input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5"> 
              <b-form-input type="text" v-model="cidade" placeholder="Cidade:" id="form´s"></b-form-input>
            </div>
            <div class="form-group col-md-5">
              <b-form-input type="text" v-model="uf" placeholder="UF:" id="form´s"></b-form-input>
            </div>
          </div>  

        <b-form-select  :required="true" v-model="tiposJuridico">
          <option :selected="true">Selecione uma opção</option>
          <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </b-form-select>
    
    </b-form-group>
      </div>

    <b-button type="submit" variant="primary">Cadastrar</b-button>
    
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
      endereco: {
        cep: '',
        bairro: '',
        cidade: '',
        uf: '',
        logradouro: '',
        numero: '',
        complemento: ''
       },
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
      console.log('ei');
      evt.preventDefault();
      
      return axios({
        method: "post",
        url: "http://localhost:51917/api/pessoaJuridica/" + this.idAdm,
        data: {
          cnpj: this.cnpj,
          nomeFantasia: this.nomeFantasia,
          horarioInicial: this.horarioInicial,
          horarioFinal: this.horarioFinal,
           endereco: [{
           cep: this.cep,
           bairro: this.bairro,
           cidade: this.cidade,
           uf: this.uf,
           logradouro: this.logradouro,
           numero: this.numero,
           complemento: this.complemento
           }],
          tiposJuridico: this.tiposJuridico
        },
      });
      this.$router.push('/menu');
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