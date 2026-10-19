import { assetPath } from "@/lib/assets";

export const CONTACT_RECAPTCHA_ACTION = "contact";

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormError =
  | "Invalid Name"
  | "Invalid E-mail"
  | "Invalid Subject"
  | "Invalid Message";

export const isValidContactName = (name: string): boolean => {
  const trimmed = name.trim();
  return trimmed.length >= 3 && trimmed.length <= 200;
};

export const isValidContactEmail = (email: string): boolean => {
  const trimmed = email.trim();
  return trimmed.length <= 100 && Boolean(trimmed.toLowerCase().match(EMAIL_REGEX));
};

export const isValidContactSubject = (subject: string): boolean => {
  const trimmed = subject.trim();
  return trimmed.length >= 3 && trimmed.length <= 200;
};

export const isValidContactMessage = (message: string): boolean => {
  const trimmed = message.trim();
  return trimmed.length >= 5 && trimmed.length <= 500;
};

export const validateContactForm = ({
  name,
  email,
  subject,
  message,
}: ContactFormFields): ContactFormError | null => {
  if (!isValidContactName(name)) {
    return "Invalid Name";
  }

  if (!isValidContactEmail(email)) {
    return "Invalid E-mail";
  }

  if (!isValidContactSubject(subject)) {
    return "Invalid Subject";
  }

  if (!isValidContactMessage(message)) {
    return "Invalid Message";
  }

  return null;
};

/**
 * The contact form needs a server runtime (or an external endpoint). A static
 * export (GitHub Pages) has no API routes, so the UI falls back to a direct
 * e-mail link instead of pretending to send a message that would 404.
 */
export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() || assetPath("/api/contact");

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";

export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "1";

export const IS_CONTACT_FORM_ENABLED =
  Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) &&
  (!IS_STATIC_EXPORT || Boolean(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT));
