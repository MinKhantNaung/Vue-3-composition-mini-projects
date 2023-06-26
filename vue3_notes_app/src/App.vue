<script setup>
import { ref } from 'vue';

let showModal = ref(false);

</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">

          <!-- Create Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <textarea class="form-control border border-3"></textarea>
                  <button type="button" class="btn btn-primary col-12 mt-2">Add Note</button>
                  <button type="button" class="btn btn-danger col-12 mt-2" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Create Modal end -->

          <h1>Notes {{ showModal }}
            <button type="button" class="btn btn-dark rounded-circle float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">+</button>
          </h1>
          <div class="card-container mt-3">
            <div class="row">
              <div class="col-md-4 col-sm-12 mt-2">
                <div class="card bg-warning">
                  <div class="card-body p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione quod dolorum error molestias
                    nesciunt ipsa quisquam. Exercitationem doloremque quia soluta vel ipsa ab pariatur omnis quaerat,
                    aliquid, laudantium veritatis!
                  </div>
                  <div class="card-footer p-1 mt-1">
                    <p>30/6/2023</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 mt-2">
                <div class="card bg-warning">
                  <div class="card-body p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione quod dolorum error molestias
                    nesciunt ipsa quisquam. Exercitationem doloremque quia soluta vel ipsa ab pariatur omnis quaerat,
                    aliquid, laudantium veritatis!
                  </div>
                  <div class="card-footer p-1 mt-1">
                    <p>30/6/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>