const users = [
    { email: 'gianicpos@gmail.com', password: '12345' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
  ];
  
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert('Iniciaste sesion.');
      location.href="estudiante.html";
    } else {
      alert('Email invalido.');
    }
  });