riot.tag2('app', '<div class="container"> <a href="https://github.com/k-kuwahara/riot-chat.git"><img style="top: 0; float: right; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a> <div class="page-header"> <h1>{opts.title}</h1> <form name="form_message" onsubmit="{send}"> <div class="form-group"> <p class="lead">Please enter the text box</p> <input type="text" class="form-control" name="input_message" onkeyup="{input}"> </div> <div class="form-group"> <button __disabled="{!text}" name="btn_submit" class="btn btn-info">Send Message</button> </div> </form> </div> <ul> <li each="{items}">{message}</li> </ul> </div> <footer class="footer"> <div class="container"> <p class="text-muted">Copyright © 2016 k-kuwahara All Rights Reserved.</p> </div> </footer>', 'li { font-size: 18px; }', '', function(opts) {
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
