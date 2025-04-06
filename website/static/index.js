// // Automatically dismiss flash messages after 3 seconds
setTimeout(function () {
  const alerts = document.querySelectorAll('.auto-dismiss');
  alerts.forEach(alert => {
    alert.classList.add('fade-out');
    setTimeout(() => {
      alert.remove();
    }, 1000);
  });
}, 1000);








function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }