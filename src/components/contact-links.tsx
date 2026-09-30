import { profile } from "@/content/site";
import type { Dictionary } from "@/locales";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7.5 12 13l8-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.7 3H4.3A1.3 1.3 0 0 0 3 4.3v15.4A1.3 1.3 0 0 0 4.3 21h15.4a1.3 1.3 0 0 0 1.3-1.3V4.3A1.3 1.3 0 0 0 19.7 3zM8.7 18.3H6.3V9.7h2.4v8.6zM7.5 8.6a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zM18.3 18.3h-2.4v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H10.5V9.7h2.3v1.2h.1c.3-.6 1.1-1.3 2.3-1.3 2.5 0 3.1 1.6 3.1 3.7v5z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g className="dl-arrow">
        <path d="M12 4.5v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8.2 10.2 12 14l3.8-3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M5 18.5h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MailLink() {
  return (
    <a href={profile.emailHref}>
      <MailIcon />
      {profile.email}
    </a>
  );
}

function LinkedInLink({ label }: { label: string }) {
  return (
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
      <LinkedInIcon />
      {label}
    </a>
  );
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h8M8 11.2h5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.4 16.5 12 20l2.6-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function CvLink({ label }: { label: string }) {
  return (
    <a className="primary" href={profile.cv} download>
      <DownloadIcon />
      {label}
    </a>
  );
}

export function ContactLinks({
  t,
  split = false,
  onCertificate,
}: {
  t: Dictionary;
  split?: boolean;
  onCertificate?: () => void;
}) {
  if (split) {
    return (
      <div className="contacts-split">
        <div className="contacts contact-pair">
          <MailLink />
          <LinkedInLink label={t.contact.linkedin} />
        </div>
        <div className="contact-dock">
          <div className="contacts">
            {onCertificate ? (
              <button type="button" className="certificate-open" aria-haspopup="dialog" onClick={onCertificate}>
                <CertificateIcon />
                {t.contact.certificate}
              </button>
            ) : null}
            <CvLink label={t.contact.cv} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-dock">
      <div className="contacts">
        <MailLink />
        <LinkedInLink label={t.contact.linkedin} />
        <CvLink label={t.contact.cv} />
      </div>
    </div>
  );
}
