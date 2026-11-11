export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactFields, string>>;

export const initialFields: ContactFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const subjects = [
  "A project I have in mind",
  "A job opportunity",
  "A collaboration",
  "Just saying hello",
  "Other",
];

export function validateContact(fields: ContactFields): FieldErrors {
  const errors: FieldErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const subject = fields.subject.trim();
  const message = fields.message.trim();

  if (name.length < 2 || name.length > 80) {
    errors.name = "Please enter your name (2–80 characters).";
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!subject || subject.length > 120 || !subjects.includes(subject)) {
    errors.subject = "Please choose what you’d like to discuss.";
  }
  if (message.length < 20 || message.length > 5000) {
    errors.message = "Please write a message between 20 and 5,000 characters.";
  }

  return errors;
}

