<script setup>
import { ref } from 'vue';

const newNote = ref('');
const notes = ref([]);
const errorMessage = ref('');

const randomColor = () => {
  return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return errorMessage.value = 'You need to fill 10 characters or more.'
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: randomColor()
  });
  newNote.value = '';
  errorMessage.value = '';
}

</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <!-- Create Modal -->
          <div class="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addNote">
                    <textarea v-model.trim="newNote" :class="[errorMessage ? 'is-invalid' : '', 'form-control']"></textarea>
                    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
                    <button type="submit" class="btn btn-primary col-12 mt-2">Add Note</button>
                    <button type="button" class="btn btn-danger col-12 mt-2" data-bs-dismiss="modal">Close</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Create Modal end -->

          <h1>Notes
            <button type="button" class="btn btn-dark rounded-circle float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">+</button>
          </h1>
          <div class="card-container mt-3">
            <div class="row">
              <div v-for="note in notes" :key="note.id" class="col-md-4 col-sm-12 mt-2">
                <div class="card" :style="{ backgroundColor: note.backgroundColor, height:'225px' }">
                  <div class="card-body p-1 text-black">
                    {{ note.text }}
                  </div>
                  <div class="card-footer p-1 mt-1 text-black">
                    <p>{{ note.date.toLocaleDateString() }}</p>
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