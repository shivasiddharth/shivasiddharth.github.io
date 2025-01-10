// Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registered.'))
    .catch(err => console.error('Service Worker registration failed:', err));
}

// Handle form submission
document.getElementById('navigateForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const ipAddress = document.getElementById('ipAddress').value;
  const port = document.getElementById('port').value;

  if (ipAddress && port) {
    const url = `https://${ipAddress}:${port}`;
    window.location.href = url;
  } else {
    alert('Please enter both IP address and port.');
  }
});
