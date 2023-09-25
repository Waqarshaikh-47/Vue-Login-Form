<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee,index) in empList" :key="index">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{employee.firstName}}</td>
                    <td>{{ employee.lastName }}</td>
                    <td><button class="btn btn-info"  @click="viewEmp(employee)">View</button></td>
                    <td><button class="btn btn-danger"  @click="deleteEmp(employee)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Employees extends Vue {
    @Prop() private msg!: string;
    $store:any;
    $router:any
    empList:any = [];

    mounted(){
        this.getEmployeeList()
    }

    getEmployeeList(){
        let employees = this.$store.state.employeeList
        this.empList = employees.filter((emp:any)=>{
            let isEmpRegistred = emp.firstName
            if(isEmpRegistred){
                isEmpRegistred = true
            }else{
                isEmpRegistred = false
            }
            return isEmpRegistred
        })
    }

    viewEmp(employee:any){
        this.$store.commit('viewEmployee',employee)
        this.$router.push(`/employee/${employee.id}`)
    }
    deleteEmp(employee:any){
        this.$store.commit('deleteEmployee',employee)
        this.getEmployeeList()
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
}
</style>
    