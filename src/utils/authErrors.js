export default function getAuthErrorMessage(error) {
  const code = error?.code;

  const errorMap = {
    "auth/email-already-in-use":
      "That email is already registered. Try logging in instead.",

    "auth/invalid-email": "Please enter a valid email address.",

    "auth/weak-password":
      "Password is too weak. It should be at least 6 characters.",

    "auth/user-not-found": "No account found with this email.",

    "auth/wrong-password": "Incorrect password. Please try again.",

    "auth/invalid-credential": "Invalid login credentials.",

    "auth/too-many-requests":
      "Too many failed attempts. Please try again later.",

    "auth/network-request-failed":
      "Network error. Check your internet connection.",

    "auth/user-disabled": "This account has been disabled. Contact support.",

    "auth/operation-not-allowed": "This authentication method is not enabled.",
  };

  return errorMap[code] || "Something went wrong. Please try again.";
}
