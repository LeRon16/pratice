new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    title: 'Hello'
  },
  methods: {
    changeValue: function(event){
      this.message = event.target.value;
    },
    showMessage: function(event){
      alert(event.target.innerText);
    }
  }
})