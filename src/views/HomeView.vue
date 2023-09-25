<template>
  <div class="home">
    <login-form/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '../components/LoginForm.vue'; // @ is an alias to /src

@Component({
  components: {
    LoginForm,
  },
})
export default class HomeView extends Vue {}
</script>
