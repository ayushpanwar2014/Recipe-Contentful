# 🍽️ Recipe-Contentful

A recipe website built with **Next.js (App Router)** and **Contentful CMS**, featuring dynamic routing and image optimization.

## 🔧 Setup

```bash
git clone https://github.com/ayushpanwar2014/Recipe-Contentful.git
cd Recipe-Contentful
npm install

Create .env.local:
CONTENTFUL_SPACEID=your_space_id
CONTENTFUL_ACCESSTOKEN=your_access_token


🏗️ Contentful Content Model
Content Type: recipe

| Field       | Type       | Description          |
| ----------- | ---------- | -------------------- |
| title       | Short text | Recipe name          |
| slug        | Short text | URL slug (unique)    |
| thumbnail   | Asset      | Image (JPEG/PNG)     |
| cookingTime | Number     | Time in minutes      |
| ingredients | Array      | List of ingredients  |
| method      | Rich Text  | Cooking instructions |

Image Config
// next.config.js
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
};
export default nextConfig;

Scripts
npm run dev       # Start dev server
npm run build     # Build for production
npm run start     # Run production build
