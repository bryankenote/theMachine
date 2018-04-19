<template>
  <div class="input-list">
    <label class="form-label">
      <slot></slot>
    </label>
    <div v-for="(el, index) in list" :key="index" class="el flex-container">
      <button @click="removeEl(el)">X</button>
      <p>{{ el }}</p>
    </div>
    <div class="flex-container">
      <input type="text" v-model="newEl" @blur="addEl">
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      newEl: ''
    };
  },
  methods: {
    addEl () {
      if (this.newEl !== '') {
        this.list.push(this.newEl);
        this.newEl = '';
      }
    },
    removeEl (el) {
      const index = this.list.indexOf(el);
      if (index > -1) {
        this.list.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
.input-list {
  padding: 0 0 10px 0;
}
.el {
  padding-bottom: 10px;
}
button {
  margin-right: 10px;
}
input {
  width: 100%;
}
</style>
