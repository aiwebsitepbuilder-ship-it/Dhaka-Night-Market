# 𝐃𝐡𝐚𝐤𝐚 𝐍𝐢𝐠𝐡𝐭 𝐌𝐚𝐫𝐤𝐞𝐭 — Official Website

> **"Bangladesh’s first-ever Night Market experience!"**

The official, production-ready bilingual multi-page web platform for **Dhaka Night Market**.

---

## 1. Official Business Information

| Field | Official Verified Detail |
| :--- | :--- |
| **Official Name** | Dhaka Night Market |
| **Official Introduction** | 𝐃𝐡𝐚𝐤𝐚 𝐍𝐢𝐠𝐡𝐭 𝐌𝐚𝐫𝐤𝐞𝐭 - Bangladesh’s first-ever Night Market experience! |
| **Phone** | `01755-673845` |
| **Email** | `dhakanightmarket@gmail.com` |
| **Address** | Niketan, Gulshan 1 1212, Dhaka, Bangladesh |
| **Official Facebook** | [facebook.com/dhakanightmarket](https://www.facebook.com/dhakanightmarket/) |
| **Official Instagram** | [instagram.com/dhakanightmarket](https://www.instagram.com/dhakanightmarket/) |

---

## 2. Featured Upcoming Event

* **Event**: Wedding & Lifestyle Exhibition featuring House of Bengal
* **Dates**: October 9–10, 2026
* **Time**: 12:00 PM – 12:00 AM
* **Location**: Sheraton Banani (Grand Ballroom), Dhaka
* **Admission**: Free entry
* **Theme**: Wedding & Lifestyle Exhibition featuring House of Bengal
* **Offerings**:
  1. Gold and diamond jewelry
  2. Bridal wear
  3. Lifestyle products

---

## 3. Experience Dimensions

The website strictly structures the six official experience categories:
1. **Food & Drinks**
2. **Shopping**
3. **Music & Entertainment**
4. **Cultural Activities**
5. **Family Activities**
6. **Local & Featured Brands**

---

## 4. Multi-Page Architecture

This website is a **True Multi-Page** application with dedicated routes and static HTML entrypoints:

1. **Home (`/`)**: Hero with official introduction, live event countdown, upcoming exhibition spotlight, experience overview, photo moments, brand placeholders, and partner channels.
2. **Events (`/events` or `/events.html`)**: Upcoming events, ongoing events check, and archived editions (Sheraton, UCC, Aloki editions).
3. **Experience (`/experience` or `/experience.html`)**: Detailed spotlight on the 6 official night market categories with official status indicators.
4. **Gallery (`/gallery` or `/gallery.html`)**: Photo and video media library with category filters, year filters, and interactive lightbox modal.
5. **Vendors (`/vendors` or `/vendors.html`)**: Why exhibit, vendor opportunities, requirements & benefits placeholders, previous brand directory, and vendor application form.
6. **Partners (`/partners` or `/partners.html`)**: Strategic partnership opportunities, sponsor branding, visibility channels, and partner enquiry form.
7. **Stories (`/stories` or `/stories.html`)**: Official bulletins, announcements, vendor stories, behind-the-scenes, and press contact.
8. **About (`/about` or `/about.html`)**: What is Dhaka Night Market, story, vision, distinct features, entity records, and organization placeholders.
9. **Contact (`/contact` or `/contact.html`)**: Complete directory with multi-type enquiry form (Visitor, Vendor, Sponsor/Partner, Media).

---

## 5. Bilingual Support (English / বাংলা)

Toggle instantly between **English** and **বাংলা** via the header switcher.
- Translates UI labels and category headers while strictly preserving official phone numbers, addresses, emails, dates, and venue titles.
- High-legibility Bengali typography utilizing `Hind Siliguri` font stack.

---

## 6. How to Update Content (For the Dhaka Night Market Team)

All event data, stories, gallery items, and contact information are centralized in:
```
src/data/content.ts
```

### Adding or Updating an Event
Edit the `UPCOMING_EVENTS` array in `src/data/content.ts`:
```ts
{
  id: 'my-new-event',
  name: 'New Event Name',
  nameBn: 'নতুন ইভেন্টের নাম',
  dates: 'November 15–16, 2026',
  ...
}
```

### Replacing Placeholder Images
1. Place your official photographs in an image folder or host them on a CDN.
2. Update the image URL in `src/data/content.ts` for the corresponding gallery or event entry.

---

## 7. Deployment Instructions

### GitHub Pages
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. The output directory is `dist/`. All assets are linked with relative paths (`./`) via `vite.config.ts`.
3. Push the `dist/` contents to your `gh-pages` branch or configure GitHub Actions to deploy from the repository.

### Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages.
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Click **Deploy**.

---

## 8. Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript checks
npm run lint

# Build for production
npm run build
```
