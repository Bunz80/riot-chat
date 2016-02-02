riot.tag2('app', '<h3>{opts.title}</h3> <form name="form_message" onsubmit="{send}"> <p>Please enter the text box</p> <input type="text" name="input_message" onkeyup="{input}"> <input __disabled="{!text}" type="submit" value="Send Message"> </form> <ul> <li each="{items}"><label>{message}</label></li> </ul>', '', '', function(opts) {
      this.text = "";
      this.disabled = true;
      this.items = opts.items;

      this.input = function(e) {
         this.text = e.target.value;
      }.bind(this)

      this.send = function(e) {
         opts.data_store.child('messages').push({'messages': this.text});

         this.text = '';
         document.form_message.input_message.value = '';
      }.bind(this)
}, '{ }');
