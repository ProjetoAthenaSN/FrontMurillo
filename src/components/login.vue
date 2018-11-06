<template>
  
  <div class="formCadAdm">
    
         <div>
            <form>
                <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
                <h2>Login</h2>
                <label for="inputLive" >Email:</label>
                <b-form-input v-model="email" type="email" name="emailAdm" placeholder="Digite seu email:"></b-form-input>
                <br/>
                <label for="inputLive" >Senha:</label>
                <b-form-input v-model="password" type="password" placeholder="Digite sua senha:"></b-form-input>
                <b-btn class="mt-3" variant="outline-danger" block @click="login">Logar</b-btn>
             <template v-if="erro != null">{{erro}}</template>
            </form>
        </div>
        <router-view/>
  </div>
</template>

<script>
    
    import axios from "axios";
    export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
   login() {
     axios({
       url: "http://localhost:51917/api/token",
       method: "POST",
       data: {
         Email: this.email,
         Senha: this.password
       }
     })
      .then(response =>{
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token)
        this.$router.push("/menu");
      })
      .catch(err => {
        this.erro = 'E-mail ou senha inválidos';
      });
    }
  }
    }
</script>


<style >
#mt-3{
    background-color: #2CBBBB;
    border: 1px solid #27A0A0;
}
</style>


<>
import "@/assets/stylesheets/main.css";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      erro: ''
    };
  },
  methods: {
    login() {
      axios({
        url: "http://localhost:51917/api/token",
        method: "POST",
        data: {
          Email: this.email,
          Senha: this.password
        }
      })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem("token", response.data.token);
          // resolve(response)
          this.$router.push("/Home");
        })
        .catch(err => {
          // localStorage.removeItem("token");
          // reject(err);
          this.erro = 'E-mail ou senha inválidos';
        });
    }
  }
};
/*axios
        .post("http://localhost:51917/api/token", {
          Email: this.email,
          Senha: this.password,
        })
        .then(response => 
          localStorage.setItem("token", response.data.token) 
          ,this.$router.push('/Home')
        .catch(err => console.log(err.response))
        )}*/
</>


