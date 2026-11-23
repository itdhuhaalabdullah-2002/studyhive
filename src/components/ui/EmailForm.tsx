import { useState, type FormEvent } from "react";
import Button from "./Button";

type Status = "idle" | "error" | "submitting" | "success";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const isError = status === "error";
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();

    if (!value) {
      setError("Please enter your email address.");
      setStatus("error");
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError("Please enter a valid email, for example name@university.edu.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("submitting");
    // Simulated request: this project has no backend.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
        <div className="relative sm:w-[298px]">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            disabled={isSubmitting}
            aria-invalid={isError}
            aria-describedby="email-feedback"
            className={`h-[46px] w-full rounded-control bg-field pl-4 pr-11 text-sm text-night placeholder:text-[#4a4fb8] ${
              isError ? "ring-2 ring-[#ff8a8a]" : ""
            }`}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute right-[18px] top-1/2 size-5 -translate-y-1/2 text-brand"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-[46px] w-full text-lg! font-normal! sm:w-[233px]"
        >
          {isSubmitting ? "Sending…" : "Get Early Access"}
        </Button>
      </div>

      <div
        id="email-feedback"
        aria-live="polite"
        className="absolute inset-x-0 top-full mt-3 text-sm"
      >
        {isError && <p className="text-[#ffb3b3]">{error}</p>}
        {status === "success" && (
          <p className="text-[#b9f5cf]">
            You’re on the list! We’ll email you when StudyHive opens.
          </p>
        )}
      </div>
    </form>
  );
}
