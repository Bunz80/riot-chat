riot.tag2('app', '<h3>{opts.title}</h3> <form onsubmit="{send}"> <p>Please enter the text box</p> <input type="text" onkeyup="{input}"> <input __disabled="{!text}" type="submit" value="Send Message"> </form> <ul> <li each="{items}"><label>{message}</label></li> </ul>', '', '', function(opts) {
      this.text = "";
      this.disabled = true;
      items = [];

      opts.data_store.child('messages').on('child_added', function(data_snapshot) {
         data_snapshot.forEach(function(obj) {
            items.push({'message': obj.val()});
         });
         console.dir(this);
      });

      this.input = function(e) {
         this.text = e.target.value;
      }.bind(this)

      this.send = function(e) {
         opts.data_store.child('messages').push({'messages': this.text});
         this.text = '';
      }.bind(this)
}, '{ }');
