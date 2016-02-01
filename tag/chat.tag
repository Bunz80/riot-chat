<app>
   <h3>{ opts.title }</h3>
   <form onSubmit={ send } >
      <p>Please enter the text box</p>
      <input type="text" onkeyup={ input }>
      <input disabled={ !text } type="submit" value="Send Message">
   </form>
   <ul>
      <li each="{ opts.items }"><label class="{ key }">{ value }</label></li>
   </ul>


   <script>
      this.text = "";

      input(e) {
         this.text = e.target.value;
      }

      send(e) {
         opts.data_store.child('messages').push({
            'message': e.target.value,
         });
      }
   </script>
</app>
