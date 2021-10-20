<template>
  <div class="base-flex snippet-page">
    <div class="base-flex snippet-page-wrapper">
      <div class="base-flex snippet-about">
        <div class="base-flex snippet-code-holder">
          <h2>JavaScript Snippet</h2>
          <pre>
            <code >
  addEventListener('load', () => {
  const code = document.querySelector('#code');
  const worker = new Worker('worker.js');
  worker.onmessage = (event) => { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
});
            </code>
          </pre>
          <span class="desc-timestamp">Posted on - 12 Oct 2021</span>
        </div>

        <div class="area-div base-flex snippet-description-holder">
          <h2>Snippet Description</h2>
          <p>
            This snippet is a test snippet in JavaSvript if else stuff. This
            snippet is a test snippet in JavaSvript if else stuff. This snippet
            is a test snippet in JavaSvript if else stuff. This snippet is a
            test snippet in JavaSvript if else stuff. This snippet is a test
            snippet in JavaSvript if else stuff. This snippet is a test snippet
            in JavaSvript if else stuff.
          </p>
        </div>
      </div>

      <div class="area-div base-flex snippet-author-info">
        <h2>Snippet Author</h2>
        <div class="base-flex author-holder">
          <img src="../assets/authorPic.jpg" alt="Author Image" />
          <h2 class="author-name">Suyash Vashishtha</h2>
          <p class="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>
          <button type="button" class="btn btn-outline-dark">
            Visit Github
          </button>
        </div>
      </div>
    </div>

    <div class="base-flex suggested-snippet-holder">
      <div class="area-div base-flex suggest-head">
        <h2>Similar Snippet</h2>
        <div class="slide-btn-holder">
          <button
            @click="scrollCards('Prev')"
            type="button"
            class="btn btn-dark"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="white"
                stroke-width="2"
                points="7 2 17 12 7 22"
                transform="matrix(-1 0 0 1 24 0)"
              ></polyline>
            </svg>
          </button>
          <button
            type="button"
            class="btn btn-dark"
            @click="scrollCards('Next')"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="white"
                stroke-width="2"
                points="7 2 17 12 7 22"
              ></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div class="snippet-scroller-div" ref="scrollerDiv">
        <SnippetCard
          v-for="(item, index) in snippetData"
          :key="index"
          :snippetTitle="item.snippetTitle"
          :snippetAuthor="item.snippetAuthor"
          :snippetTime="item.snippetTime"
        />
      </div>
    </div>
  </div>
</template>


<script>
import SnippetCard from "./snippetCard.vue";

export default {
  name: "SnippetPage",
  components: {
    SnippetCard,
  },
  data() {
    return {
      snippetData: [],
    };
  },
  methods: {
    scrollCards(direction) {
      const slideAmount = 350;
      if (direction === "Next") {
        this.$refs.scrollerDiv.scrollLeft += slideAmount;
      }
      if (direction === "Prev") {
        this.$refs.scrollerDiv.scrollLeft -= slideAmount;
      }
    },
  },

  created() {
    this.snippetData = [
      {
        snippetTitle: "Python 1",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python 0",
        snippetAuthor: "Suyash Vashishtha",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python 2",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python 3",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python ",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python 4",
        snippetAuthor: "Suyash Vashishtha",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python 5",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
      {
        snippetTitle: "Python 6",
        snippetAuthor: "Hetarth Shah",
        snippetTime: "12 Oct 2021",
      },
    ];
  },
};
</script>


<style lang="scss" scoped>
$sucess: #198754;

.base-flex {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: flex-start;
}

.area-div {
  padding: 30px 0px;
  h2 {
    font-size: 1.4rem;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 600;
  }
}

.snippet-page {
  width: 100%;
  margin: 15px 0px;
  padding: 15px;
  background-color: whitesmoke;

  .snippet-page-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }

  .snippet-about {
    justify-content: space-between;
    align-items: center;
    width: 70%;
  }

  .snippet-author-info {
    width: 30%;
    text-align: center;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-left: 3px solid $sucess;
    padding: 30px 0px;
    height: 100%;

    .author-holder {
      align-items: center;
      margin-top: 30px;

      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }

      h2.author-name {
        font-size: 1.4rem;
      }

      p {
        font-size: 1rem;
        width: 80%;
      }
    }
  }

  .snippet-code-holder,
  .snippet-description-holder {
    width: 100%;

    h2 {
      font-size: 1.4rem;
      margin-top: 40px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    p {
      width: 95%;
      border: 1px solid #ddd;
      border-left: 3px solid $sucess;
      padding: 1em 1.5em;
      display: block;
      word-wrap: break-word;
    }

    pre {
      border: 1px solid #ddd;
      border-left: 3px solid $sucess;
      page-break-inside: avoid;
      font-family: monospace;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 1.6em;
      width: 95%;
      word-wrap: break-word;
      background-color: #272822;
      color: white;
    }

    span {
      margin: 0px;
    }
  }

  .suggested-snippet-holder {
    margin-top: 0px;
    width: 100%;

    .suggest-head {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;

      .slide-btn-holder {
        button {
          margin: 0px 5px;
        }
      }
    }

    .snippet-scroller-div {
      width: 98%;
      overflow: scroll;
      flex-direction: row;

      white-space: nowrap;

      scroll-behavior: smooth;
    }

    .snippet-scroller-div::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>