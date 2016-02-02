<app>
   <h3>{ opts.title }</h3>
   <form onSubmit={ send } >
      <p>Please enter the text box</p>
      <input type="text" onkeyup={ input }>
      <input disabled={ !text } type="submit" value="Send Message">
   </form>
   <ul>
      <li each="{ items }"><label>{ message }</label></li>
   </ul>


   <script>
      this.text = "";
      this.disabled = true;
      items = [];

      // get messages
      opts.data_store.child('messages').on('child_added', function(data_snapshot) {
         data_snapshot.forEach(function(obj) {
            items.push({'message': obj.val()});
         });
         console.dir(this);
      });

      // input text-box check
      input(e) {
         this.text = e.target.value;
      }

      // add message
      send(e) {
         opts.data_store.child('messages').push({'messages': this.text});
         this.text = '';
      }
   </script>
</app>
