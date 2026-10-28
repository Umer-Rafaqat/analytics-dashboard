// Client-side validation only. NEVER trust this on the server —
// always re-validate on your Express/Mongoose backend too.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email.trim()) return 'Email is required';
  if (!EMAIL_REGEX.test(email)) return 'Enter a valid email address';
  return '';
}

export function validatePassword(password) {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(password)) return 'Include at least one uppercase letter';
  if (!/[0-9]/.test(password)) return 'Include at least one number';
  return '';
}

export function validateFullName(name) {
  if (!name.trim()) return 'Full name is required';
  if (name.trim().length < 2) return 'Name is too short';
  return '';
}
