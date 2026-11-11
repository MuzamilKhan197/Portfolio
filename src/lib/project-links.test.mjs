import assert from "node:assert/strict";
import test from "node:test";
import { getProjectLink } from "./project-links.ts";

test("only explicit safe project destinations activate", () => {
  assert.equal(getProjectLink("/"), "/");
  assert.equal(getProjectLink("https://github.com/example/project"), "https://github.com/example/project");
  for (const url of [null, "", "javascript:alert(1)", "data:text/html,hi", "//external.org", "https://user:password@example.org", "https://project.example", "https://example.com/demo", "bad-url"]) assert.equal(getProjectLink(url), null);
});
