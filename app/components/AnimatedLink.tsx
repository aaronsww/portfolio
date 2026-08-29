import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  label: React.ReactNode;
  isEmail?: boolean;
  target?: string;
  className?: string;
  textSizeClasses?: string;
  spacingClasses?: string;
}

export default function AnimatedLink({ href, label, isEmail, target, className, textSizeClasses, spacingClasses }: AnimatedLinkProps) {
  const finalTarget = target ?? (isEmail ? undefined : "_blank");
  const rel = finalTarget === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <div className={`inline-block ${className}`}>
      <Link href={href} target={finalTarget} rel={rel} className="group relative block py-2 md:py-4">
        <div className="flex items-center gap-4 overflow-hidden border-b-[3px] border-neutral-800 hover:border-[var(--accent)] transition-colors duration-300 pb-2">
          <LinkText label={label} isEmail={isEmail} textSizeClasses={textSizeClasses} spacingClasses={spacingClasses} />
          <AnimatedArrow />
        </div>
      </Link>
    </div>
  );
}

function LinkText({ label, isEmail, textSizeClasses, spacingClasses }: { label: React.ReactNode; isEmail?: boolean; textSizeClasses?: string; spacingClasses?: string }) {
  const baseClasses = "block font-semibold tracking-tighter text-white leading-[0.9] break-words";
  const paddingClass = spacingClasses || "pb-6";
  const defaultSizeClasses = isEmail
    ? "text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
    : "text-3xl sm:text-4xl md:text-[4rem] lg:text-[5rem]";

  const sizeClasses = textSizeClasses || defaultSizeClasses;

  return (
    <div className="relative overflow-hidden cursor-pointer">
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,0.5)] group-hover:-translate-y-full">
        <span className={`${baseClasses} ${sizeClasses} ${paddingClass}`}>{label}</span>
        <span className={`absolute top-full left-0 ${baseClasses} ${sizeClasses} ${paddingClass}`}>{label}</span>
      </div>
    </div>
  );
}

function AnimatedArrow() {
  return (
    <div className="relative overflow-hidden flex-shrink-0" aria-hidden="true">
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,0.5)] group-hover:-translate-y-full group-hover:translate-x-full">
        <ArrowIcon className="w-10 h-10 md:w-16 md:h-16 text-white opacity-50" />
      </div>
      <div className="absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,0.5)] -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowIcon className="w-10 h-10 md:w-16 md:h-16 text-white" />
      </div>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 16L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
