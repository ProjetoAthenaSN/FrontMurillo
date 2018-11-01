<template>
  <div class="formCadServ"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
   <h2>Serviços</h2> 
  <h3>Cadastro</h3>
  <b-form @submit="onSubmit" @reset="onReset">
  <b-form-group>
  <b-form-input v-model="text1" type="text" placeholder="Nome:" id="form´s"></b-form-input>
  <b-form-input v-model="text1" type="text" placeholder="Descrição:" id="form´s"></b-form-input>
  <b-form-select v-model="selected" :options="options" class="mb-3" id="form´s"></b-form-select>
  </b-form-group>
  </b-form>
  	<b-button href="#" variant="primary" id="">Cadastrar</b-button>
   <p>
   <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
   </p>

    </div>
</template>

<script>
/*import "./assets/stylesheets/main.css";*/
export default {
  name: 'Servico',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Empresa:' }
      ]
    }
  }
}
</script>

<style>
#md{
    width: 30em;
    height: 8em;
    left: 35%;
}



#btn{
    width: 7em;
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
    top: -266px;
    left: 36.8em;
    
    font-weight: 500;
    text-decoration: none;
}	

.card-title {
    font-size: 200%;
}

#bol3{
    width: 2.6%;
    position: relative;
    left: -15%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}

#bol3{
    width: 2.6%;
    position: relative;
    left: -15%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}
</style>