# Dashboard
```html
<div class="d-flex flex-column vh-100">
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">
        Nombre
      </span>
    </div>
  </nav>
  <div class="flex-row flex-grow-1 overflow-auto d-flex">
    <div class="p-4 flex-column d-flex bg-body-tertiary">
      <canvas class="d-none d-md-block" width="200" height="0"></canvas>
      <div class="flex-grow-1 overflow-y-scroll">
        <!-- Modulos -->
        <div class="rounded-pill text-bg-primary px-4 py-2">
          <a href="#" class="nav-link active" aria-current="page">
            <span class="pe-none">🏠</span>
            <span class="d-none d-md-inline ms-2">Home </span>
          </a>
        </div>
        <div class="rounded-pill px-4 py-2">
          <a href="#" class="nav-link active" aria-current="page">
            <span class="pe-none">🏠</span>
            <span class="d-none d-md-inline ms-2">Home </span>
          </a>
        </div>
        <hr />
        
      </div>
      <div>
        <!-- Perfil -->
        <div class="d-flex text-body-secondary py-3 align-items-center justify-content-center">
          <img class="bd-placeholder-img flex-shrink-0 rounded" width="32" height="32" />
          <p class="ms-2 mb-0 small lh-sm d-none d-md-block">
            <strong class="d-block text-gray-dark">Username</strong>
            Name
          </p>
        </div>
        <!-- LogOut -->
        <div class="align-items-center justify-content-center d-flex">
          <button type="button" class="btn btn-light ">🚪<span class="d-none d-md-inline ms-2">LogOut</span></button>
        </div>
      </div>
    </div>
    <div class="flex-grow-1">

      
    </div>
  </div>
</div>
```