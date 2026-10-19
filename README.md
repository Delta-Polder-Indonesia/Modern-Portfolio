<a name="readme-top"></a>

# Modern Portfolio using Next.js and Framer Motion

![Modern Portfolio using Next.js and Framer Motion](/.github/images/img_main.png "Modern Portfolio using Next.js and Framer Motion")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/Delta-Polder-Indonesia/Modern-Portfolio?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia/Modern-Portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia/Modern-Portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/Delta-Polder-Indonesia/Modern-Portfolio?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia/Modern-Portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/Delta-Polder-Indonesia/Modern-Portfolio?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia/Modern-Portfolio/commits "Github commits")
[![Netlify Status](https://api.netlify.com/api/v1/badges/721491f5-0b0d-4120-96bd-6bd0480ef1e5/deploy-status)](https://awersome-portfolio.netlify.app/ "Netlify Status")
[![GitHub issues](https://flat.badgen.net/github/issues/Delta-Polder-Indonesia/Modern-Portfolio?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia/Modern-Portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/Delta-Polder-Indonesia/Modern-Portfolio?icon=github&color=black&scale=1.01)](https://github.com/Delta-Polder-Indonesia/Modern-Portfolio/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# Table of Contents

</summary>

- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Stats](#stats)
- [Contribute](#contribute)
- [Acknowledgements](#acknowledgements)
- [Follow Me](#follow-me)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Give A Star](#give-a-star)
- [Star History](#star-history)
- [Give A Star](#give-a-star)

</details>

## Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
modern-portfolio/
  |- app/
    |-- about/
    |-- api/
    |-- contact/
    |-- services/
    |-- testimonials/
    |-- work/
    |-- error.tsx
    |-- globals.css
    |-- layout.tsx
    |-- manifest.ts
    |-- not-found.tsx
    |-- page.tsx
    |-- robots.ts
    |-- sitemap.ts
    |-- template.tsx
  |- components/
    |-- Avatar.tsx
    |-- Bulb.tsx
    |-- Circles.tsx
    |-- Header.tsx
    |-- Nav.tsx
    |-- ParticlesContainer.tsx
    |-- ProjectsBtn.tsx
    |-- ServiceSlider.tsx
    |-- Socials.tsx
    |-- TestimonialSlider.tsx
    |-- TopLeftImg.tsx
    |-- Transition.tsx
    |-- WorkSlider.tsx
  |- lib/
    |-- assets.ts
    |-- contact.ts
  |- public/
  |- .env.example
  |- .env/.env.local
  |- .gitignore
  |- environment.d.ts
  |- eslint.config.mjs
  |- netlify.toml
  |- next.config.ts
  |- package.json
  |- pnpm-lock.yaml
  |- pnpm-workspace.yaml
  |- postcss.config.mjs
  |- tsconfig.json
  |- variants.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## Getting Started

1. Make sure **Git** and **NodeJS** is installed.

2. Clone this repository to your local computer.

3. Create `.env.local` file in root folder.

4. Contents of `.env.local`:

```env
# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED="1"

# resend
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="Your Name <me@example.com>"
CONTACT_TO_EMAIL="contact@example.com"
CONTACT_SITE_URL="https://awersome-portfolio.netlify.app"
RESEND_TEMPLATE_CONTACT_USER="contact-thank-you"
RESEND_TEMPLATE_CONTACT_ADMIN="contact-admin"

# google recaptcha v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_MIN_SCORE="0.5"
```

5. Create an account at [Resend](https://resend.com "Resend") and [add + verify a sending domain](https://resend.com/domains "Resend domains").

6. Create an API key at [Resend API Keys](https://resend.com/api-keys "Resend API keys") with **Sending access**. Copy it to `RESEND_API_KEY`.

7. Set `RESEND_FROM_EMAIL` to an address on that verified domain. Set `CONTACT_TO_EMAIL` to the inbox that should receive new contact notifications (required). Set `CONTACT_SITE_URL` to your site's public URL (no trailing slash).

8. In [Resend Templates](https://resend.com/templates "Resend templates"), create **two** templates and **Publish** each.

   **Template 1 - thank you to the user**
   - Name: `contact-thank-you`
   - Variables: `USER_NAME`, `USER_MESSAGE`, `SITE_URL`

   **Template 2 - new message to admin**
   - Name: `contact-admin`
   - Variables: `USER_NAME`, `USER_EMAIL`, `USER_MESSAGE`, `SITE_URL`

   Copy each template's alias into `RESEND_TEMPLATE_CONTACT_USER` and `RESEND_TEMPLATE_CONTACT_ADMIN`.

9. Create a [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create "Google reCAPTCHA") project. Choose **Score based (v3)**, add your production domain(s) **and** `localhost`, then copy the **Site key** to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and the **Secret key** to `RECAPTCHA_SECRET_KEY`.

10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `pnpm install --legacy-peer-deps`.

11. Now the app is fully configured and you can start it with `npm run dev` or `pnpm dev`.

**NOTE:** Ensure you don't share these keys publicly.

### Need Help?

If you run into issues during installation or setup:

- **Email** - [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** - `@sanidhyy`

## Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Services](/.github/images/img2.png "Services")

![Showcase Projects](/.github/images/img3.png "Showcase Projects")

![Contact Form](/.github/images/img4.png "Contact Form")

## Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![JavaScript](https://skillicons.dev/icons?i=js "JavaScript")](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")

## Stats

[![Stats for Modern Portfolio](/.github/images/stats.svg "Stats for Modern Portfolio")](https://pagespeed.web.dev/analysis?url=https://awersome-portfolio.netlify.app/ "Stats for Modern Portfolio")

## Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Acknowledgements

Useful resources and dependencies that are used in Modern Portfolio.

<!--- DEPENDENCIES_START --->
- [@fontsource-variable/sora](https://www.npmjs.com/package/@fontsource-variable/sora): 5.3.0
- [@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss): ^4.3.3
- [@tsparticles/engine](https://www.npmjs.com/package/@tsparticles/engine): ^4.4.0
- [@tsparticles/react](https://www.npmjs.com/package/@tsparticles/react): ^4.4.0
- [@types/node](https://www.npmjs.com/package/@types/node): ^26.6.4
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.3.0
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.3.0
- [eslint](https://www.npmjs.com/package/eslint): ^9.39.5
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 16.4.0
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^14.0.0
- [next](https://www.npmjs.com/package/next): 16.4.0
- [postcss](https://www.npmjs.com/package/postcss): ^8.5.28
- [react](https://www.npmjs.com/package/react): 19.3.0
- [react-countup](https://www.npmjs.com/package/react-countup): ^6.4.2
- [react-dom](https://www.npmjs.com/package/react-dom): 19.3.0
- [react-google-recaptcha-v3](https://www.npmjs.com/package/react-google-recaptcha-v3): ^1.11.0
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast): ^2.6.1
- [react-icons](https://www.npmjs.com/package/react-icons): ^5.7.0
- [resend](https://www.npmjs.com/package/resend): ^6.28.1
- [swiper](https://www.npmjs.com/package/swiper): ^14.3.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^4.3.3
- [tsparticles](https://www.npmjs.com/package/tsparticles): ^4.4.0
- [typescript](https://www.npmjs.com/package/typescript): ^6.0.3

<!--- DEPENDENCIES_END --->

## Follow Me

[![GitHub followers](https://img.shields.io/github/followers/Delta-Polder-Indonesia?style=social&label=Follow&maxAge=2592000)](https://github.com/Delta-Polder-Indonesia "Follow Me")

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Give A Star

You can also give this repository a star to show more people and they can use this repository.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
