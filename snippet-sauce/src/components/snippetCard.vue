<template>
  <div key="{{key}}" class="snippet-card">
    <div class="snippet-card-thumbnail">
      <img
        src="../assets/snippetThumb.png"
        alt="Python Snippet by {Author name} {snippet sauce}"
      />
      <h2 class="snippet-card-title">{{ snippetTitle }}</h2>
    </div>
    <div class="base-flex snippet-card-data">
      <div class="base-flex snippet-card-about">
        <img src="../assets/authorPic.jpg" alt="Author Profile pi" />
        <div class="base-flex">
          <span>{{ snippetAuthor }}</span>
          <figcaption class="figure-caption">{{ snippetTime }}</figcaption>
        </div>
        <button type="button" class="btn btn-success">Visit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnippetCard",
  props: {
    key: Number,
    snippetTitle: String,
    snippetAuthor: String,
    snippetAuthorPic: String,
    snippetTime: String,
    snippetImage: String,
    snippetUrl: String,
  },
};
</script>



<style lang="scss" scoped>
.snippet-card {
  width: 22%;
  box-shadow: #808080b3 0px 3px 4px 0px;
  border-radius: 8px;
  background-color: white;
  margin: 20px 10px;
  overflow: hidden;

  transition: ease 0.4s;
  transform: scale(1);

  .snippet-card-thumbnail {
    width: auto;
    height: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
    }

    h2 {
      width: 100%;
      position: absolute;
      color: white;
      top: 0px;
      padding: 13px 10px;
      background: linear-gradient(179deg, #000000, #000000a1, transparent);
      font-size: 1.1rem;
    }
  }
}

.snippet-card:hover {
  transform: scale(0.95);
  transition: ease 0.4s;
}

.snippet-card-data {
  flex-direction: column;
  padding: 0.5rem;
  height: 50%;

  .snippet-card-about {
    width: 100%;
    justify-content: space-around;
    padding-right: 10px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    div {
      flex-direction: column;
      flex: 1;
      align-items: flex-start;
      padding-left: 0.5rem;
    }
  }
}
</style>