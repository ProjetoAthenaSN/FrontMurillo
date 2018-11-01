<template>
    <div class="listaServico"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
  <h2>Empresas</h2>  
  <h3>Lista</h3>
   <div class="listas">
      <b-table  hover :items="items"></b-table>
   </div>
  
    </div>
</template>

<script>
const items = [
  {  Nome: 'Senai',  Descrição: 'Escola de informatica' },
  {  Ordem: 'Space needle',   Descrição: 'Empresa de t.i' }
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>

<style>
#md{
    width: 25em;
    height: 5em;
    margin-top: 2%;
}

#form´s{
    width: 22em;
    top: -3em;
    left: 16em;
    position: relative;
    font-size: 1.5em;
    height: 54%;
    border-radius: 11px;
}

#car{
    width: 64em;
    left: 10em;
    top: 3em;
    border-radius: 2em;
}

#btn{
    width: 8em;
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
    top: -12em;
    left: 15em;
    position: relative;
}	

#bol3{
    width: 2.6%;
    position: relative;
    left: -11%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}


.card-title {
    font-size: 200%;
}

#car{
    width: 62em;
    left: 13em;
    top: 11em;
    border-radius: 2em;
    border-color: #17a2b8!important;
}
</style>