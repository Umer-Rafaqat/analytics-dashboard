import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { validateEmail } from '../utils/validators.js';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    setError(emailError);
    if (emailError) return;

    setLoading(true);
    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } finally {
      // Show the same success state whether or not the email exists,
      // to avoid leaking which addresses are registered (OWASP: user enumeration).
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-auto bg-surface p-6">
      {/* Standalone card — NOT AuthCard. Exact Figma spec: width 730 height 515 radius 30 */}
      <div
        className="relative shrink-0 rounded-[30px] bg-white"
        style={{ width: 730, height: 515, boxShadow: '0px 0px 4px 0px #00000026' }}
      >
        {/* Inner content area — exact Figma spec: width 330 height 266 top 124 left 200 */}
        <div className="absolute" style={{ width: 330, height: 266, top: 124, left: 200 }}>
          <h1 className="text-xl text-center font-bold text-gray-900">Forgot password?</h1>
          <p className="mt-2 text-center text-sm text-gray-500 ">No worries, we&apos;ll send you reset instructions.</p>

          {submitted ? (
            <p className="mt-8 text-sm text-gray-600">
              If an account exists for <span className="font-medium">{email}</span>, a reset link is on its way.
            </p>
          ) : (
            <form className="mt-8" onSubmit={handleSubmit} noValidate>
              <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                autoComplete="email"
              />
              <PrimaryButton loading={loading}>Reset Password</PrimaryButton>
            </form>
          )}

          <Link to="/login" className="mt-6 block text-center text-sm font-medium text-brand-600 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
