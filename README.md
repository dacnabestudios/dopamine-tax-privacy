# Dopamine Tax Privacy Policy

This public repository hosts the canonical privacy policy for the Dopamine Tax mobile app.

- Public URL: <https://dacnabestudios.github.io/dopamine-tax-privacy/>
- Developer: Dacnabe Studios / DAC NA BE Studios
- Privacy contact: <dacnabestudios@gmail.com>
- App package: `com.dacnabestudios.dopaminetax`
- Languages: `en-US`, `pt-BR`, `es`, and `fr-FR`

## Scope

The page is static and dependency-free. It has no Dacnabe Studios analytics, advertising, cookies, forms, account, or backend. A small inline script selects one of the four equivalent language sections from the browser locale; all policy text remains in `index.html`.

The policy reflects the current local-first Free MVP: no app-originated user-data transmission, no Dopamine Tax account or backend, and no external analytics or remote crash reporting. Any future transmitting SDK or service requires the policy, in-app disclosure, and store declarations to be reviewed before release.

## Verification

Run:

```sh
node --test privacy-policy.test.mjs
```

The test checks the canonical URL, developer identity and contact, four policy languages, required disclosure topics, HTTPS-only links, and the absence of forms, external scripts, common analytics markers, and cookie APIs.

## Publishing

GitHub Pages publishes the repository root from the `main` branch. Changes use a branch and pull request when the repository already has a published `main`.

## Store references

- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311)
- [Google Play Data safety guidance](https://support.google.com/googleplay/android-developer/answer/10787469)

The Play Console privacy-policy field and the app's product configuration must use the exact public URL above.
