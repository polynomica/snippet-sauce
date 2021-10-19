<template>
  <div class="snippet-page">
    <div class="snippet-code-holder">
      <h2>JavaScript Snippet</h2>
      <div class="snippet-area">
        <pre>
            <code>   
            if(true){
                  console.log("Hello");
                  alert("ada")
              }
              else{
                  hi
              }
      
            </code>
      </pre>
      </div>
    </div>

    <div class="snippet-description-holder">
      <h2>Snippet Description</h2>
      <p>
        This snippet is a test snippet in JavaSvript if else stuff. This snippet
        is a test snippet in JavaSvript if else stuff. This snippet is a test
        snippet in JavaSvript if else stuff. This snippet is a test snippet in
        JavaSvript if else stuff. This snippet is a test snippet in JavaSvript
        if else stuff. This snippet is a test snippet in JavaSvript if else
        stuff.
      </p>
    </div>

    <div class="snippet-author-info">
      <h2>Snippet Author</h2>
    </div>
  </div>
</template>


<script>
export default {
  name: "SnippetPage",
};
</script>


<style lang="scss" scoped>
$sucess: #198754;

.snippet-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: flex-start;
  margin: 15px 0px;

  padding: 15px;

  background-color: whitesmoke;

  .snippet-code-holder,
  .snippet-description-holder,
  .snippet-author-info {
    width: 100%;

    h2 {
      font-size: 1.4rem;
      margin-top: 40px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    p {
      width: 70%;
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
      max-width: 90%;
      overflow: auto;
      padding: 1em 1.5em;
      display: block;
      word-wrap: break-word;

      background-color: #272822;
      color: white;
    }
  }
}
</style>