export default function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5"
      aria-label="StudyHive home"
    >
      <svg viewBox="0 0 32 32" className="size-8 md:size-9" aria-hidden="true">
        <path
          d="M16 2.5 27.7 9.25v13.5L16 29.5 4.3 22.75V9.25L16 2.5Z"
          className="fill-brand"
        />
        <path
          d="M16 9l5.9 3.4v7.2L16 23l-5.9-3.4v-7.2L16 9Z"
          className="fill-night"
        />
        <circle cx="16" cy="16" r="2.2" className="fill-brand-light" />
      </svg>
      <span className="text-2xl font-semibold tracking-tight md:text-[32px]">
        studyhive<span className="text-brand-light">.</span>
      </span>
    </a>
  );
}
