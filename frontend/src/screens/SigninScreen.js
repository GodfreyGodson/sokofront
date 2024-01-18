

const SigninScreen = {
  after_render: () => {
    document.getElementById('signin-form').addEventListener('submit', async (e) => {
      e.preventDefault();
    

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;



      try {
        // Make a POST request to the API endpoint
        const response = await fetch('http://localhost:5000/api/users/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error('Invalid credentials');
        }

        // Assuming the server response includes user information
        const userInfo = await response.json();

        // Save user information to local storage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        const cartItems = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
: [];

            // Check if cartItems.length is not equal to 0
if (cartItems.length !== 0) {
  // Redirect to '/shipping'
  document.location.hash = '/shipping';
  } else {
  // Redirect to '/'
  document.location.hash = '/';
  }
  

        // Redirect the user to '/' upon successful sign-in
        // window.location.href = '/';
        // redirectUser()
      } catch (error) {
        console.error(error);
        alert('Sign-in failed. Please check your credentials and try again.');
      }
    });

    // Check if user information is available in local storage
    const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfoFromStorage) {
      // Redirect the user to '/' if user information is available
      // window.location.href = '/';


      const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')).filter((item) => item !== null && item !== undefined)
      : [];

      
      
                  // Check if cartItems.length is not equal to 0
      if (cartItems.length !== 0) {
        // Redirect to '/shipping'
        document.location.hash = '/shipping';
        } else {
        // Redirect to '/'
        document.location.hash = '/';
        }
    }
  },
  render: () => {
    return `
     
<div class="form-container">

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#signin-form {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px; /* Adjusted width */
  max-width: 80%; /* Set maximum width */
}

.form-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1 {
  text-align: center;
  color: #9ACD32;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #19875;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button {
  background-color: #9ACD32;
  color: white;
  width: 100%; /* Set the width to 100% */
  padding: 12px; /* Adjust padding as needed */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

a {
  color: #28a745;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

#password {
  position: relative;
}

#show-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>

<form action="" id="signin-form">
<ul class="form-items">
    <li>
        <h1>Sign In</h1>
    </li>
    <li>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" />
    </li>
    <li>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your password" />
        <input type="checkbox" id="show-password">
    </li>
    <li>
        <button type="submit" class="primary">Sign In</button>
    </li>
    <li>
        <div>
            New User?
            <a href="/#/register">Create Your Account</a>
        </div>
    </li>
</ul>
</form>
</div>
    `;
  },
};

export default SigninScreen;

