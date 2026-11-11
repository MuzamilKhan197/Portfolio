import assert from "node:assert/strict";
import test from "node:test";
import { validateContact, initialFields, subjects } from "./contact-validation.ts";

const valid = { name: "Test Visitor", email: "visitor@example.org", subject: subjects[0], message: "I'd like to discuss a new portfolio project." };
test("valid contact submissions and surrounding whitespace are accepted", () => {
  assert.deepEqual(validateContact(valid), {});
  assert.deepEqual(validateContact({ ...valid, name: "  Test Visitor  ", email: " visitor@example.org " }), {});
});
test("empty forms report all four required fields", () => {
  assert.deepEqual(Object.keys(validateContact(initialFields)), ["name", "email", "subject", "message"]);
});
test("malformed addresses, unknown topics, and oversized messages are rejected", () => {
  for (const email of ["missing-at", "a@b", "a b@example.org", "a".repeat(255) + "@example.org"]) assert.ok(validateContact({ ...valid, email }).email);
  assert.ok(validateContact({ ...valid, subject: "unrecognized" }).subject);
  assert.ok(validateContact({ ...valid, message: " ".repeat(30) }).message);
  assert.ok(validateContact({ ...valid, message: "a".repeat(5001) }).message);
});
