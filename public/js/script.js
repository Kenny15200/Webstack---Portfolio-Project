// public/js/script.js

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('usernameRegister').value;
    const password = document.getElementById('passwordRegister').value;
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      alert('Registration successful');
      location.reload();  // Reload the page after successful registration
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed');
    }
  });
  
  document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token);
      alert('Login successful');
      // Redirect or perform additional actions after successful login
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed');
    }
  });
  