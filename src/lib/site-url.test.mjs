import assert from "node:assert/strict";
import test from "node:test";
import { getSiteUrl } from "./site-url.ts";

test("site origin configuration is validated and has safe production fallbacks", () => {
  const keys = ["NEXT_PUBLIC_SITE_URL", "VERCEL_PROJECT_PRODUCTION_URL", "VERCEL_URL", "NODE_ENV"];
  const saved = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  try {
    for (const key of keys) delete process.env[key];
    process.env.NODE_ENV = "production";
    assert.equal(getSiteUrl(), undefined);
    process.env.VERCEL_URL = "deployment.vercel.app";
    assert.equal(getSiteUrl().href, "https://deployment.vercel.app/");
    process.env.NEXT_PUBLIC_SITE_URL = "https://portfolio.example.org/path?q=1#test";
    assert.equal(getSiteUrl().href, "https://portfolio.example.org/");
    for (const invalid of ["not-a-url", "javascript:alert(1)", "https://user:password@example.org"]) {
      process.env.NEXT_PUBLIC_SITE_URL = invalid;
      assert.throws(() => getSiteUrl());
    }
  } finally {
    for (const key of keys) {
      if (saved[key] === undefined) delete process.env[key];
      else process.env[key] = saved[key];
    }
  }
});
