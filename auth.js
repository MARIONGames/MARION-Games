document.addEventListener('DOMContentLoaded', () => {
    const API_BASE_URL = 'http://localhost:3000/api';

    const responseDiv = document.getElementById('response');

    // Function to display messages
    const showResponse = (message, type) => {
        responseDiv.textContent = message;
        responseDiv.className = type;
    };

    // --- REGISTRATION LOGIC ---
    if (document.getElementById('registerBtn')) {
        const registerBtn = document.getElementById('registerBtn');
        registerBtn.addEventListener('click', async () => {
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const date_of_birth = document.getElementById('date_of_birth').value;

            if (!username || !email || !password || !date_of_birth) {
                showResponse('All fields are required.', 'error');
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include', // Required for cross-origin cookie handling
                    body: JSON.stringify({ username, email, password, date_of_birth })
                });

                const result = await response.json();
                if (response.ok) {
                    showResponse('Registration successful! Redirecting to home...', 'success');
                    setTimeout(() => window.location.href = '/home.html', 2000);
                } else {
                    showResponse(result.error, 'error');
                }
            } catch (err) {
                showResponse('Could not connect to the server.', 'error');
            }
        });
    }

    // --- LOGIN LOGIC ---
    if (document.getElementById('loginBtn')) {
        const loginBtn = document.getElementById('loginBtn');
        loginBtn.addEventListener('click', async () => {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!username || !password) {
                showResponse('Username and password are required.', 'error');
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include', // Required for cross-origin cookie handling
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();
                if (response.ok) {
                    showResponse('Login successful! Redirecting to home...', 'success');
                    setTimeout(() => window.location.href = '/home.html', 2000);
                } else {
                    showResponse(result.error, 'error');
                }
            } catch (err) {
                showResponse('Could not connect to the server.', 'error');
            }
        });
    }
});

console.log("%cSTOP!", "color: red; font-size: 60px; font-weight: bold;");

console.log(
  "%cIf someone told you to paste something here, you're being tricked!",
  "color: black; font-size: 20px;"
);

console.log(
  "%cPasting anything in this console could let attackers steal your account, personal data, or even take control of this browser session.",
  "color: black; font-size: 16px;"
);

console.log(
  "%cClose this window immediately unless you know exactly what you’re doing.",
  "color: red; font-size: 18px; font-weight: bold;"
);
console.log("%cSTOP!", "color: red; font-size: 60px; font-weight: bold;");

console.log(
  "%cIf someone told you to paste something here, you're being tricked!",
  "color: black; font-size: 20px;"
);

console.log(
  "%cPasting anything in this console could let attackers steal your account, personal data, or even take control of this browser session.",
  "color: black; font-size: 16px;"
);

console.log(
  "%cClose this window immediately unless you know exactly what you’re doing.",
  "color: red; font-size: 18px; font-weight: bold;"
);
console.log("%cSTOP!", "color: red; font-size: 60px; font-weight: bold;");

console.log(
  "%cIf someone told you to paste something here, you're being tricked!",
  "color: black; font-size: 20px;"
);

console.log(
  "%cPasting anything in this console could let attackers steal your account, personal data, or even take control of this browser session.",
  "color: black; font-size: 16px;"
);

console.log(
  "%cClose this window immediately unless you know exactly what you’re doing.",
  "color: red; font-size: 18px; font-weight: bold;"
);
console.log("%cSTOP!", "color: red; font-size: 60px; font-weight: bold;");

console.log(
  "%cIf someone told you to paste something here, you're being tricked!",
  "color: black; font-size: 20px;"
);

console.log(
  "%cPasting anything in this console could let attackers steal your account, personal data, or even take control of this browser session.",
  "color: black; font-size: 16px;"
);

console.log(
  "%cClose this window immediately unless you know exactly what you’re doing.",
  "color: red; font-size: 18px; font-weight: bold;"
);
