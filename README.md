# Launch MVP - Simple Landing Page

A simplified MVP version of [launch-mvp-stripe-nextjs-supabase](https://github.com/shenseanchen/launch-mvp-stripe-nextjs-supabase) focusing on the core landing page feature with dark mode and smooth animations.

## ✨ Features

- 🌓 **Dark mode support** - Automatic system preference detection
- 🎨 **Tailwind CSS styling** - Modern utility-first CSS framework
- 🔄 **Framer Motion animations** - Smooth scroll animations and interactions
- 📱 **Responsive design** - Mobile-first approach
- 🛡️ **TypeScript support** - Type-safe development
- ⚡ **Next.js 15** - Latest React framework features

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gitmvp-com/launch-mvp-simple-landing.git
cd launch-mvp-simple-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 What's Different from the Parent?

This MVP removes the following to focus on the core landing page:

- ❌ Authentication (Supabase)
- ❌ Payment integration (Stripe)
- ❌ Database functionality
- ❌ User management
- ❌ Analytics integrations
- ❌ Environment variables

## 🛠️ Built With

- [Next.js 15.1.3](https://nextjs.org/) - React framework
- [TypeScript 5](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 3.4.1](https://tailwindcss.com/) - Styling
- [Framer Motion 12.4.3](https://www.framer.com/motion/) - Animations
- [React 19](https://react.dev/) - UI library

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home/Landing page
│   └── globals.css      # Global styles
├── components/
│   └── TypewriterEffect.tsx  # Typewriter animation component
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#A78BFA',
    light: '#C4B5FD',
    dark: '#8B5CF6',
  },
  // ... more colors
}
```

### Content

Edit `app/page.tsx` to customize the landing page content, sections, and features.

## 📝 License

This project is licensed under the MIT License.

## 🙏 Credits

Based on the excellent work by [ShenSeanChen](https://github.com/ShenSeanChen) in the [launch-mvp-stripe-nextjs-supabase](https://github.com/shenseanchen/launch-mvp-stripe-nextjs-supabase) repository.

## 🔗 Links

- Parent Repository: [launch-mvp-stripe-nextjs-supabase](https://github.com/shenseanchen/launch-mvp-stripe-nextjs-supabase)
- Created by: [GitMVP](https://github.com/gitmvp-com)

---

Made with ❤️ by GitMVP
