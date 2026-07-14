import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const canonicalUrl = "https://dacnabestudios.github.io/dopamine-tax-privacy/";

test("publishes one complete multilingual Dopamine Tax privacy policy", () => {
  assert.match(
    html,
    new RegExp(
      `rel="canonical"[\\s\\S]{0,100}href="${escapeRegExp(canonicalUrl)}"`,
    ),
  );
  assert.match(html, /Dacnabe Studios/);
  assert.match(html, /dacnabestudios@gmail\.com/);
  assert.match(html, /com\.dacnabestudios\.dopaminetax/);

  for (const locale of ["en-US", "pt-BR", "es", "fr-FR"]) {
    assert.match(html, new RegExp(`data-policy="${locale}"`));
    assert.match(html, new RegExp(`data-language="${locale}"`));
  }

  for (const topic of [
    "Android",
    "iOS",
    "Google Play",
    "Retention",
    "deletion",
    "Children",
    "GitHub",
  ]) {
    assert.match(html, new RegExp(topic, "i"));
  }
});

test("keeps the policy static, HTTPS-only, and free from product tracking", () => {
  assert.doesNotMatch(html, /<form\b/i);
  assert.doesNotMatch(html, /<script\b[^>]*\bsrc=/i);
  assert.doesNotMatch(html, /http:\/\//i);
  assert.doesNotMatch(
    html,
    /google-analytics|googletagmanager|gtag\s*\(|segment|mixpanel|amplitude|posthog|sentry/i,
  );
  assert.doesNotMatch(html, /document\.cookie|localStorage|sessionStorage/);
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
