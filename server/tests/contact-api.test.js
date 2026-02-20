import test from "node:test";
import assert from "node:assert/strict";
import { contactRateLimit, __resetRateLimitStoreForTests } from "../rateLimiter.js";
import { validateContactPayload } from "../validation.js";

test("validateContactPayload accepts valid payload", () => {
  const payload = {
    name: "Ludwig Dev",
    email: "ludwig@example.com",
    subject: "Project inquiry",
    message: "I would like to discuss a new project with you.",
    companyWebsite: "",
  };

  const result = validateContactPayload(payload);

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test("validateContactPayload rejects invalid payload", () => {
  const payload = {
    name: "L",
    email: "invalid",
    subject: "Hi",
    message: "short",
  };

  const result = validateContactPayload(payload);

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test("contactRateLimit blocks requests after threshold", () => {
  __resetRateLimitStoreForTests();

  const req = { headers: {}, ip: "127.0.0.1" };

  for (let i = 0; i < 5; i += 1) {
    let nextCalled = false;
    const res = {
      status() {
        return this;
      },
      json() {
        return this;
      },
    };

    contactRateLimit(req, res, () => {
      nextCalled = true;
    });

    assert.equal(nextCalled, true);
  }

  let statusCode = 0;
  const blockedRes = {
    status(code) {
      statusCode = code;
      return this;
    },
    json() {
      return this;
    },
  };

  const maybeReturn = contactRateLimit(req, blockedRes, () => {});

  assert.equal(statusCode, 429);
  assert.ok(maybeReturn);
});
