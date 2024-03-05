document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password') {
      // Redirect to dashboard or any other page
      alert('Login successful!');
    } else {
      document.getElementById('error').innerText = 'Invalid username or password';
    }
  });
  