const login = (req, res)=> {
 

res.render('login');
 
}



  
const loginAction = (req,res) => {

  
  
      // Authentication successful. Redirect home.
    res.redirect('/dashboard');
  }

  module.exports ={login,loginAction}