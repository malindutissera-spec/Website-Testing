const form = document.getElementById("contactForm");
const iframe = document.getElementById("hidden_iframe");
const loading = document.getElementById("loading");
const confirmationMessage = document.getElementById("confirmationMessage");
const errorMessage = document.getElementById("errorMessage");

function handleSubmit() {
  // Show loading
  loading.style.display = "block";
  confirmationMessage.style.display = "none";
  confirmationMessage.classList.remove("show"); // reset animation
  errorMessage.style.display = "none";

  // Fallback: show confirmation after 1 second
  setTimeout(() => {
    loading.style.display = "none";
    form.reset();
    confirmationMessage.style.display = "block";
    // Trigger fade-in animation
    setTimeout(() => {
      confirmationMessage.classList.add("show");
    }, 50);
  }, 1000);
}

function cleanInput(input) {
  // Prevent spaces while typing
  input.addEventListener("keydown", function(e) {
    if (e.key === " ") e.preventDefault();
  });

  // Force lowercase without affecting cursor position
  input.addEventListener("input", function() {
    const start = this.selectionStart;
    const end = this.selectionEnd;
    this.value = this.value.toLowerCase();
    this.setSelectionRange(start, end);
  });
}

// Apply to your fields
cleanInput(document.getElementById("emailInput"));
cleanInput(document.getElementById("nameInput"));
