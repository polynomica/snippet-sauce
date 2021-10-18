<template>
  <div>
    <nav
      style="width: 95%; margin: auto"
      class="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Snippet Sauce</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Languages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Python</a></li>
                <li><a class="dropdown-item" href="#">JavaScript</a></li>
                <li><a class="dropdown-item" href="#">Laravel</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    >Browse All</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                rel="noopener noreferrer"
                target="blank"
                href="https://github.com/polynomica/snippet-sauce"
                >Contribute</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter Sauce"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog custom">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Browse Language</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="base-flex modal-body" id="modal-body">
            <button data-bs-dismiss="modal" class="languages-button">
              Language 1
            </button>
            <button data-bs-dismiss="modal" class="languages-button">
              Language 2
            </button>
            <button data-bs-dismiss="modal" class="languages-button">
              Language 3
            </button>
            <button data-bs-dismiss="modal" class="languages-button">
              Language 4
            </button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Navbar",
};
</script>


<style scoped>
.languages-button {
  background-color: white;
  border: none;
  color: black;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: ease 0.2s;
}

.languages-button:hover {
  background-color: #0d6efd;
  color: white;
  transition: ease 0.2s;
}

.modal-dialog.custom {
  max-width: 60%;
}
</style>