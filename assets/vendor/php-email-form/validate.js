const form = document.getElementById("contactForm");
const iframe = document.getElementById("hidden_iframe");
const loading = document.getElementById("loading");
const confirmationMessage = document.getElementById("confirmationMessage");
const errorMessage = document.getElementById("errorMessage");

function handleSubmit() {
  // Show loading
  loading.style.display = "block";
  confirmationMessage.style.display = "none";
  errorMessage.style.display = "none";

  // Fallback: in case iframe doesn't trigger reliably, show confirmation after 1 second
  setTimeout(() => {
    loading.style.display = "none";
    form.reset();
    confirmationMessage.style.display = "block";
  }, 1000);
}

// Optional: You can still try iframe onload detection
iframe.onload = function() {
  // Hide loading if it's still visible
  if (loading.style.display === "block") {
    loading.style.display = "none";
    form.reset();
    confirmationMessage.style.display = "block";
  }
};
