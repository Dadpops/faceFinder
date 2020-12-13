Facial Recognition App using React, Express, Node, PostgresSQL.


Notable Features include:

-Several reusable components built (Navigation, Logo, ImageLink, Signin, Register).

-Particles.js added to give background a more populated and vibrant look.

const particlesOptions = {

  particles: {
  
    number: {
    
      value: 150,
      
      density: {
      
        enable: true,
        
        value_area: 1000,
        
      }
      
    }
    
  }
  
}

-User Authentication to keep record of who has used the app most and ranks users based on usage.

onSubmitSignIn = () => {

    fetch('https://cryptic-cliffs-86571.herokuapp.com/signin', {
    
      method: 'post',
      
      headers: {'Content-Type': 'application/json'},
      
      body: JSON.stringify({
      
        email: this.state.signInEmail,
        
        password: this.state.signInPassword
        
      })
      
    })
    
      .then(response => response.json())
      
      .then(user => {
      
        if (user.id) {
        
          this.props.loadUser(user)
          
          this.props.onRouteChange('home');
          
        }
        
      })
      
  }

-Link any photo you want with url to have the face detected.

-Tilt React used to give logo more pop and stand out of page.

-Full user database with PostgresSQL and knex.js.

-Bcrypt hash security to safely store passwords.


