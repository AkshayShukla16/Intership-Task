// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
}

// Usage: Set a cookie named "username" with the value "john_doe" that expires in 30 days
setCookie('username', 'john_doe', 30);
