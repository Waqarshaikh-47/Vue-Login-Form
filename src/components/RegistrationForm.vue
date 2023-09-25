<template>
<div class="container">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6 mt-4">
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
  <button type="submit" class="btn btn-primary mb-4" @click="signUp">Submit</button>
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


  mounted(){
    let empList = this.$store.state.employeeList
    this.email = empList[empList.length - 1].email
    this.password = empList[empList.length - 1].password
  }

  signUp(){
    let id = this.$store.state.employeeList.length 
    let email = this.email
    let empDetails = {
      email : email,
      password : this.password,
      firstName : this.firstName,
      middleName : this.middleName,
      lastName : this.lastName,
      city : this.city,
      address : this.address,
      id : id
    }
    if(this.address != ""){
    this.$store.commit('setEmployee',empDetails);
    this.$router.push('/employees')}
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
