<template>
  <div>
    <NavBar />
    <HomeScreen />
  </div>
</template>

<script>
import NavBar from "../src/components/navBar.vue";
import HomeScreen from "../src/components/homeScreen.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HomeScreen,
  },
};
</script>


