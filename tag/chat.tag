<app>
   <style>
      .container {
         width: auto;
         max-width: 680px;
         padding: 0 15px;
      }
      li {
         font-size: 18px;
      }
      .footer {
         bottom: 0;
         width: 100%;
         height: 60px;
         background-color: #f5f5f5;
         display: block;
      }
      .text-muted {
         margin: 20px 0;
         color: #777;
      }

   </style>
   <div class="container">
      <div class="page-header">
         <h1>{ opts.title }</h1>
         <form name="form_message" onSubmit={ send } >
            <div class="form-group">
               <p class="lead">Please enter the text box</p>
               <input type="text" class="form-control" name="input_message" onkeyup={ input }>
            </div>
            <div class="form-group">
               <button disabled={ !text } name="btn_submit" class="btn btn-info">Send Message</button>
            </div>
         </form>
      </div>
      <ul>
         <li each="{ items }"><label>{ message }</label></li>
      </ul>
   </div>
   <footer class="footer">
      <div class="container">
         <p class="text-muted">Copyright © 2016 k-kuwahara All Rights Reserved.</p>
      </div>
   </footer>

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
