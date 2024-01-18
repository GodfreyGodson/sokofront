


const RegisterScreen = {
    after_render: () => {
        document.getElementById('signin-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const repassword = document.getElementById('repassword').value;

            if (password !== repassword) {
                alert('Passwords do not match. Please re-enter your password.');
                return;
            }

            try {
                // Show loading overlay before making the API request
               

                // Make a POST request to the API endpoint
                const response = await fetch('http://localhost:5000/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Registration failed');
                }

                // Assuming the server response includes user information
                const userInfo = await response.json();

                // Save user information to local storage
                localStorage.setItem('userInfo', JSON.stringify(userInfo));

                // Hide loading overlay after successful registration
          
                // Redirect the user to '/' upon successful registration
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
            } catch (error) {
                console.error(error);

                // Hide loading overlay in case of an error
           

                alert('Registration failed. Please check your information and try again.');
            }
        });
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
                        <h1>Create Account</h1>
                    </li>
                    <li>
                        <label for="name">Name</label>
                        <input type="name" name="name" id="name" placeholder="Enter your Name" />
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
                        <label for="repassword">Re-Enter Password</label>
                        <input type="password" name="repassword" id="repassword" placeholder="Re-Enter your password" />
                        <input type="checkbox" id="show-password">
                    </li>
                    <li>
                        <button type="submit" class="primary">Register</button>
                    </li>
                    <li>
                        <div>
                            Already have an Account?
                            <a href="/#/signin">Sign-In</a>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
        `;
    },
};

export default RegisterScreen;
