const { ipcRenderer } = require('electron');
    ipcRenderer.on('get-user-data',(event,arg)=>{
      let email=document.getElementById('email');
      let password=document.getElementById('password');
      let name=document.getElementById('name');
      let check = false;
      if (arg.email==='admin@gmail.com' && arg.password==='admin'){
          check= true;
      } else {
          check=false;
      }
      if (check === true ){
          
          email.innerHTML=arg.email;
          password.innerHTML=arg.password;
          name.innerHTML=arg.name;
      } else {
        email.innerHTML='Please check email';
        password.innerHTML='please check password';
        name.innerHTML=' please check name';
      }
    }) 