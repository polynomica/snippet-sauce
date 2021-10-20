<template>
  <div>
    <NavBar />
    <!-- <HomeScreen /> -->
    <SnippetPage />
  </div>
</template>

<script>
import NavBar from "../src/components/navBar.vue";
// import HomeScreen from "../src/components/homeScreen.vue";
import SnippetPage from "../src/components/snippetPage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    // HomeScreen,
    SnippetPage,
  },
};
</script>


