riot.tag2('app', '<div class="container"> <div class="page-header"> <h1>{opts.title}</h1> <form name="form_message" onsubmit="{send}"> <div class="form-group"> <p class="lead">Please enter the text box</p> <input type="text" class="form-control" name="input_message" onkeyup="{input}"> </div> <div class="form-group"> <button __disabled="{!text}" name="btn_submit" class="btn btn-info">Send Message</button> </div> </form> </div> <ul> <li each="{items}"><label>{message}</label></li> </ul> </div> <footer class="footer"> <div class="container"> <p class="text-muted">Copyright © 2016 k-kuwahara All Rights Reserved.</p> </div> </footer>', 'li { font-size: 18px; }', '', function(opts) {
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
