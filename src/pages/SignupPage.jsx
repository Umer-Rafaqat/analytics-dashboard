import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard.jsx';
import AuthFormArea from '../components/AuthFormArea.jsx';
import PromoPanel from '../components/PromoPanel.jsx';
import InputField from '../components/InputField.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { validateEmail, validatePassword, validateFullName } from '../utils/validators.js';

const initialForm = { fullName: '', email: '', password: '' };

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {
      fullName: validateFullName(form.fullName),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };
    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    try {
      // Hash the password server-side (e.g. bcrypt) — never store or log it in plain text.
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      navigate('/login');
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <AuthFormArea>
        <div style={{ width: 150, height: 55 }} className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900">Sign up</h1>
        </div>
        <p className="mb-6 text-sm text-gray-500">Start your 30-day free trial.</p>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            id="fullName"
            label="Full Name"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
            autoComplete="name"
          />

          <InputField
            id="email"
            label="Email Address"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />

          <InputField
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
            trailingAction={
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M17.94 17.94c-1.73 1.26-3.92 1.84-6.03 1.5-3.38-.56-6.19-3.38-6.75-6.75-.33-2.11.24-4.3 1.5-6.03M9.88 9.88a3 3 0 0 0 4.24 4.24" />
                    <path d="M11.7 7.7a3 3 0 0 1 4.24 4.24" />
                    <path d="M1 1l22 22" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M1.42 12C2.69 7.91 6.41 5 11.99 5c5.58 0 9.3 2.91 10.57 7-1.27 4.09-5 7-10.57 7-5.58 0-9.3-2.91-10.57-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
                <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
              </button>
            }
          />

          <p className="mb-6 text-xs text-gray-500">
            You are agreeing to the{' '}
            <a href="/terms" className="font-medium text-brand-600 hover:underline">
              Terms of Services
            </a>{' '}
            and{' '}
            <a href="/privacy" className="font-medium text-brand-600 hover:underline">
              Privacy Policy
            </a>
          </p>

          {serverError && <p className="mb-4 text-sm text-red-500">{serverError}</p>}

          {/* Exact Figma value: background: #6E39CB (== brand-600) */}
          <PrimaryButton loading={loading}>Get started</PrimaryButton>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-medium text-brand-600 hover:underline">
            Sign in
          </Link>
        </p>
      </AuthFormArea>

      <PromoPanel />
    </AuthCard>
  );
}
