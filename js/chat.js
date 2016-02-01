riot.tag2('app', '<h3>{opts.title}</h3> <form onsubmit="{send}"> <p>Please enter the text box</p> <input type="text" onkeyup="{input}"> <input __disabled="{!text}" type="submit" value="Send Message"> </form> <ul> <li each="{opts.items}"><label class="{key}">{value}</label></li> </ul>', '', '', function(opts) {
      this.text = "";

      this.input = function(e) {
         this.text = e.target.value;
      }.bind(this)

      this.send = function(e) {
         opts.data_store.child('messages').push({
            'message': e.target.value,
         });
      }.bind(this)
}, '{ }');
