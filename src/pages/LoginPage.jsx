import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard.jsx';
import AuthFormArea from '../components/AuthFormArea.jsx';
import PromoPanel from '../components/PromoPanel.jsx';
import InputField from '../components/InputField.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import { validateEmail } from '../utils/validators.js';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
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
      email: validateEmail(form.email),
      password: form.password ? '' : 'Password is required',
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
      // Replace with your real Express endpoint. Always call over HTTPS.
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // send httpOnly auth cookie, not localStorage
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        // Generic message — don't reveal whether it was the email or password (OWASP: user enumeration)
        throw new Error('Invalid email or password');
      }

      navigate('/dashboard');
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
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        </div>
        <p className="mb-6 text-sm text-gray-500">How do i get started lorem ipsum dolor at?</p>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="username"
          />

          <InputField
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="current-password"
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

          <div className="mb-6 text-right">
            <Link to="/forgot-password" className="text-sm font-medium text-brand-600 hover:underline">
              Forgot password
            </Link>
          </div>

          {serverError && <p className="mb-4 text-sm text-red-500">{serverError}</p>}

          <PrimaryButton loading={loading}>Sign in</PrimaryButton>
        </form>

        <div className="mt-4 space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg viewBox="0 0 533.5 544.3" className="h-5 w-5" aria-hidden="true">
              <path fill="#4285F4" d="M533.5 278.4c0-18.2-1.6-36-4.7-53.2H272.1v100.8h147.3c-6.4 34.6-25.3 63.9-54.1 83.5v69.2h87.4c51.2-47.2 80.8-116.5 80.8-200.3z" />
              <path fill="#34A853" d="M272.1 544.3c73.5 0 135.2-24.4 180.3-66.1l-87.4-69.2c-24.3 16.3-55.2 26-92.9 26-71.4 0-132-48.1-153.5-112.7H31.9v70.7c45.3 89.5 137.8 150.3 240.2 150.3z" />
              <path fill="#FBBC05" d="M118.6 324.9c-10.8-32.6-10.8-67.8 0-100.4V153.8H31.9c-39.5 78.9-39.5 171.3 0 250.2l86.7-69.1z" />
              <path fill="#EA4335" d="M272.1 107.6c39.7-.6 77.9 14.7 106.9 42.1l80.1-80.1C403.5 24.5 345.5-1 272.1 0 169.7 0 77.2 60.8 31.9 150.3l86.7 70.7C140.1 155.7 200.7 107.6 272.1 107.6z" />
            </svg>
            Sign in with Google
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path fill="#1877F2" d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82V14.706h-3.28v-3.62h3.28V8.413c0-3.252 1.986-5.02 4.887-5.02 1.389 0 2.58.103 2.926.149v3.394l-2.01.001c-1.577 0-1.882.75-1.882 1.848v2.424h3.761l-.49 3.62h-3.271V24h6.416C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
            Sign in with Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-600 hover:underline">
            Sign up
          </Link>
        </p>
      </AuthFormArea>

      <PromoPanel />
    </AuthCard>
  );
}
