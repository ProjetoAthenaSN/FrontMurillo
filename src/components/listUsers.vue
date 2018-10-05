<template>


  <div> 
  

<div class="listUsers">
  <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
    <h2>Clientes    </h2>
    <h3>Lista</h3>
<b-table  hover :items="items"></b-table>
</div>
    </div>
    
</template>

<>
import "./assets/css/main.css";
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Empresa:' }
      ]
    }
  }
}
</>

<script>
const items = [
  {  Ordem: 1, Serviço: 'Íris', PrimeiroAcesso: '20/08/2018', Meio: 'Facebook' },
  {  Ordem: 2, Serviço: 'Victor', PrimeiroAcesso: '14/08/2018', Meio: 'Telegram'},
  {  Ordem: 3, Serviço: 'Lucas', PrimeiroAcesso: '01/09/2018', Meio: 'Facebook'},
  {  Ordem: 4, Serviço: 'Sidnei', PrimeiroAcesso: '08/09/2018', Meio:'Telegram' }
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
    width: 30em;
    height: 8em;
    margin-left: 35%;
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
    /* height: 2em; */
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
</style