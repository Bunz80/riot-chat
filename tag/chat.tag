<app>
   <h3>{ opts.title }</h3>
   <form name="form_message" onSubmit={ send } >
      <p>Please enter the text box</p>
      <input type="text" name="input_message" onkeyup={ input }>
      <input disabled={ !text } type="submit" value="Send Message">
   </form>
   <ul>
      <li each="{ items }"><label>{ message }</label></li>
   </ul>


   <script>
      this.text = "";
      this.disabled = true;
      this.items = opts.items;

      // input text-box check
      input(e) {
         this.text = e.target.value;
      }

      // add message
      send(e) {
         opts.data_store.child('messages').push({'messages': this.text});

         this.text = '';
         document.form_message.input_message.value = '';
      }
   </script>
</app>
