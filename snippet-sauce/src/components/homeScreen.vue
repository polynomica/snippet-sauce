<template>
  <section class="base-flex snippet-grid">
    <h3 class="snippet-grid-head">Home</h3>
    <div class="base-flex snippet-grid-wrapper">
      <SnippetCard
        v-for="(item, index) in snippetData"
        :key="index"
        :snippetTitle="item.snippetTitle"
        :snippetAuthor="item.snippetAuthor"
        :snippetTime="item.snippetTime"
      />
    </div>
  </section>
</template>

<script>
import SnippetCard from "./snippetCard.vue";

export default {
  name: "HomeScreen",
  components: {
    SnippetCard,
  },
  data() {
    return {
      snippetData: [],
    };
  },

  created() {
    this.snippetData = [
      {
        snippetTitle: "Java Swift",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python Djangio",
        snippetAuthor: "Suyash Vashishtha",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Laravel Php",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Laravel Php",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Java Swift",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python Djangio",
        snippetAuthor: "Suyash Vashishtha",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Laravel Php",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Laravel Php",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
    ];
  },
};
</script>



<style lang="scss" scoped >
.snippet-grid {
  width: 100%;
  flex-direction: column;
  background-color: whitesmoke;

  .snippet-grid-head {
    width: 90%;
    margin-top: 2rem;
  }

  .snippet-grid-wrapper {
    width: 100%;
    align-items: center;
    justify-content: center;

    padding: 10px;
    padding-bottom: 20px;
  }
}
</style>
