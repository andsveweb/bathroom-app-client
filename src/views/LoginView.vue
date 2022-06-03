<template>
  <main class="login">
    <h1>
      För att komma in på sidan "Räkna" samt "Min sida" behöver du registrera
      dig eller logga in om du redan har ett konto.
    </h1>
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Registrera dig</h2>

        <input type="email" placeholder="Epost" v-model="register_form.email" />
        <input
          type="password"
          placeholder="Lösenord"
          v-model="register_form.password"
        />
        <input type="submit" value="Registrera" />
      </form>

      <form class="login" @submit.prevent="login">
        <h2>Logga in</h2>
        <input type="email" placeholder="Epost" v-model="login_form.email" />
        <input
          type="password"
          placeholder="Lösenord"
          v-model="login_form.password"
        />
        <input type="submit" value="Logga in" />
      </form>
    </section>
  </main>
</template>

<script>
// import the ref function from vue and import usestore from vuex
import { ref } from "vue"; 
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});  //
    const register_form = ref({});
    const store = useStore();

// value of the loginform
    const login = () => {
      store.dispatch("login", login_form.value); 
    };
// value of the registerform
    const register = () => {
      store.dispatch("register", register_form.value); 
    };

    return {
      login_form,
      register_form, 
      login,
      register,
    };
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
}

form.register {
  color: black;
}

h2 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  color: black;
}

h1 {
  color: rgb(197, 46, 46);
  font-size: 1.5rem;
  padding: 1rem 1rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #070707;
  border-bottom: 2px solid #0a0a0a;
}

form.login input:not([type="submit"]) {
  color: #0c0c0c;
  border-bottom: 2px solid #070707;
}

form.login input[type="submit"] {
  background-color: rgb(10, 10, 10);
  color: #fff;
  font-weight: 700;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

form.register input[type="submit"] {
  background-color: rgb(7, 7, 7);
  color: #fff;
  font-weight: 700;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
