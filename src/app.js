import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      thingsToDo: [
        {name: "Clean Bathroom", isHighPriority: false},
        {name: "Buy Groceries", isHighPriority: false},
        {name: "Conquer World", isHighPriority: true}
      ],
      newThingToDo: {name: "", isHighPriority: false}
    },

    methods: {
      addNewThingToDo: function() {
        this.thingsToDo.push(this.newThingToDo);
        this.newThingToDo = {name: "", isHighPriority: false};
        }
      }
  });
});
