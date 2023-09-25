<template>
    <div class="container">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">First Name</label>
      <input required  type="text" v-model="firstName" class="form-control" id="inputCity">
      <label for="inputCity">Middle Name</label>
      <input required  type="text" v-model="middleName" class="form-control" id="inputCity">
      <label for="inputCity">Last Name</label>
      <input required  type="text" v-model="lastName" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input required  type="text" v-model="city" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input required  type="email" class="form-control" v-model="email" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input required  type="password" class="form-control" v-model="password" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group pb-3">
    <label for="inputAddress">Address</label>
    <input required  type="text" class="form-control" v-model="address" id="inputAddress" placeholder="1234 Main St">
  </div>
  <button type="submit" class="btn btn-success mb-4" @click="save">Save</button>
</form>
</div>
    </template>
    
    <script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    
    @Component
    export default class RegistrationForm extends Vue {
      @Prop() private msg!: string;
      $router: any;
      $store:any;
      email:any = ''
      password:any = ''
      firstName:any = ''
      middleName:any = ''
      lastName:any = ''
      city:any = ''
      address:any = ''
      id:any = ''
    
    
      mounted(){
        let employee = this.$store.state.employee
        this.email = employee.email
        this.password = employee.password
        this.firstName = employee.firstName
        this.middleName = employee.middleName
        this.lastName = employee.lastName
        this.city = employee.city
        this.address = employee.address
        this.id = employee.id

      }
    
      save(){
        let empDetails = {
          email : this.email,
          password : this.password,
          firstName : this.firstName,
          middleName : this.middleName,
          lastName : this.lastName,
          city : this.city,
          address : this.address,
          id : this.id
        }
        this.$store.commit('updateEmployee',empDetails);
        this.$router.push('/employees')
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
    