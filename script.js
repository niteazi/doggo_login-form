
$(document).ready(function() {
  const passwordToggle = $(".password-toggle");
  const passwordInput = $("#password");

  passwordToggle.hide();

  passwordInput.on("input focus", function() {
    const passwordValue = $(this).val();
    passwordToggle.toggle(passwordValue !== "");

    const usernameValue = $("#username").val();
    if (usernameValue !== "" && passwordValue !== "") {
      $("#loginButton").prop("disabled", false);
    } else {
      $("#loginButton").prop("disabled", true);
    }
  });

  $(document).on("click", function(event) {
    const isPasswordToggleClicked = $(event.target).closest(".password-toggle").length > 0;
    const isPasswordInputClicked = $(event.target).is("#password");
    if (!isPasswordToggleClicked && !isPasswordInputClicked) {
      passwordToggle.hide();
    }
  });

  $("#togglePassword").click(function() {
    const passwordFieldType = passwordInput.attr("type");
    passwordInput.attr("type", passwordFieldType === "password" ? "text" : "password");
    $("#togglePassword").toggleClass("bi-eye-slash bi-eye");
  });
});
