<script setup>
import { ref } from 'vue';

const newNote = ref('');
const notes = ref([]);
const errorMessage = ref('');
const showModal = ref(false);

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
  showModal.value = false;
}

</script>

<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <!-- Custom Modal -->
          <div v-if="showModal" class="formModal" id="myModal">
            <div class="modal-content">
              <span @click="showModal = false" class="close">&times;</span>
              <form @submit.prevent="addNote">
                <textarea v-model.trim="newNote" :class="[errorMessage ? 'is-invalid' : '', 'form-control']"></textarea>
                <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
                <button type="submit" class="btn btn-primary col-12 mt-2">Add Note</button>
                <button type="button" @click="showModal = false" class="btn btn-danger col-12 mt-2">Close</button>
              </form>
            </div>
          </div>
          <!-- Custom Modal -->

          <h1>Notes
            <button type="button" @click="showModal = true" class="btn btn-dark rounded-circle float-end">+</button>
          </h1>
          <div class="card-container mt-3">
            <div class="row">
              <div v-for="note in notes" :key="note.id" class="col-md-4 col-sm-12 mt-2">
                <div class="card" :style="{ backgroundColor: note.backgroundColor, height: '225px', overflow: 'auto' }">
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

<style scoped>
.formModal {
  /* display: none; */
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.close {
  color: #aaa;
  text-align: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>