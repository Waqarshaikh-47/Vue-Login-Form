<template>
  <div class="container p-5">
    <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10 mb-3">
      <input type="email" class="form-control" v-model="email" id="inputEmail3" placeholder="Email"  required>
    </div>
  </div>
  <div class="form-group row mb-3">
    <label for="inputPassword3"  class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" v-model="password" class="form-control" id="inputPassword3" placeholder="Password" required>
    </div>
  </div>
  <div class="form-group row mb-3">
    <div class="col-sm-10">
      <div class="form-check ">
        <input class="col-sm-1" type="checkbox" id="gridCheck1" >
        <label for="gridCheck1">
          Remember me !
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" @click="addEmployee" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  @Prop() private msg!: string;
  $router: any;
  $store:any;
  email:any = ''
  password:any = ''
  validate:any = false

  addEmployee(){
    if(this.email && this.password){
    let emp ={
      email : this.email,
      password : this.password
    }
    this.$store.commit('setEmployee',emp);
      this.$router.push('/registration')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
}</style>
