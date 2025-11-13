# 📚 Custom Auth UI Kit (Troy Course Lab Style)

This login and registration UI template is developed based on the ShadCN UI collection (starting from the `signup-02` template) but features significant customization in terms of interface (UI/UX) and includes custom form validation rules.

---

## 🧩 Installation via NPM Package

You can quickly install and use this UI kit directly via **npm** without manual setup.

### Install Package

```bash
npm install @toilatrung/auth-ui-kit
# or
yarn add @toilatrung/auth-ui-kit
# or
pnpm add @toilatrung/auth-ui-kit
```

### Usage Example

After installation, you can import the prebuilt components directly:

```tsx
import { RegisterForm, LoginForm } from "@toilatrung/auth-ui-kit";

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#680011]">
      <div className="bg-white/75 backdrop-blur-sm shadow-lg p-6 rounded-2xl w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
```

> 💡 **Note:**
> The UI Kit is fully compatible with **React + TypeScript + Tailwind CSS**.
> If your project is already configured with Tailwind and Vite, you can use it immediately without additional setup.

---

## 🚀 Technology Stack

This project is built on a modern and high-performance stack:

| Technology          | Version                 | Purpose                                 |
| :------------------ | :---------------------- | :-------------------------------------- |
| **Framework**       | React                   | User interface construction.            |
| **Language**        | TypeScript              | Type Safety.                            |
| **Tooling**         | Vite (v7.x)             | Fast development environment and build. |
| **Styling**         | Tailwind CSS (v4.x)     | Utility-first CSS Framework.            |
| **UI Primitives**   | Shadcn/ui & Radix UI    | Headless UI components.                 |
| **Form Management** | React Hook Form, Zod    | Form management and schema validation.  |
| **Routing**         | React Router DOM (v7.x) | Application routing management.         |

---

## 🛠️ Setup and Installation (For Manual Development)

If you clone the repository and want to run it locally, follow these steps:

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Install and Initialize Shadcn CLI (If you want to add new components)

This project uses the Shadcn/ui architecture, where component source code is added directly to the project directory (`src/components/ui`).

* **Install Shadcn CLI (Global):**

  ```bash
  npm install -g shadcn-ui
  # or
  pnpm install -g shadcn-ui
  ```

* **Add a New Component (Example: `card`):**

  ```bash
  npx shadcn-ui@latest add card
  ```

### 3. Key Configuration

* **Path Alias:** The `@/` alias points to the `src` directory.
* **Custom Font:** The **Montserrat** font is imported via CDN and configured in `tailwind.config.js`.

### 4. Start the Project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🎨 UI/UX Overview and Structure

### 1. Registration Page (`src/pages/RegisterPage.tsx`)

* **URL:** `/register`
* **Design Highlights:**

  * Split-screen layout (`flex-col md:flex-row`)
  * Deep red background (`md:bg-[#680011]`)
  * Blurred translucent form panel (`md:bg-white/75 md:backdrop-blur-sm`)
  * Includes logos: `/tcl_logo.svg` and `/classic_troy_logo.svg`

### 2. Login Page (`src/pages/LoginPage.tsx`)

* **URL:** `/login`
* **Design:** Matches registration page for consistent experience.

### 3. Form Logic and Validation

| Component          | Validation Rules                        | Notes                                                                    |
| :----------------- | :-------------------------------------- | :----------------------------------------------------------------------- |
| **`RegisterForm`** | Name, Email, Password, Confirm Password | Enforces Troy or HUST student domains (`@troy.edu`, `@sis.hust.edu.vn`). |
| **`LoginForm`**    | Email, Password (min 8 chars)           | Includes domain hint and a registration link.                            |

### 4. Custom API Integration

1. Open `src/components/auth/register-form.tsx` or `src/components/auth/login-form.tsx`
2. Replace the mock `onSubmit` with your API call logic.

---

## 🖼️ Visual References

### Desktop Views

**Registration Page (Full Desktop View)** 

<img width="1920" height="911" alt="register_fullscreen" src="https://github.com/user-attachments/assets/4bd3b4ae-c7be-4bf3-841d-e3d0b3ba7fc8" />

**Login Page (Full Desktop View)** 

<img width="1920" height="911" alt="login_fullscreen" src="https://github.com/user-attachments/assets/4d7e2722-3798-4316-9887-b6c8a72d882d" />

### Mobile Views

**Registration Form (Mobile View)** 

<img width="459" height="738" alt="register_mobile" src="https://github.com/user-attachments/assets/0158c435-c7c1-4606-bff3-550b32214e78" />

**Login Form (Mobile View)** 

<img width="459" height="738" alt="login_mobile" src="https://github.com/user-attachments/assets/296f1168-b34a-4922-ad36-a9b77ddcf36a" />

---

## 📦 Package Information

**NPM Package:** [`@toilatrung/auth-ui-kit`](https://www.npmjs.com/package/@toilatrung/auth-ui-kit)

**Version:** Latest stable

**License:** MIT

**Maintainer:** [Trịnh Quang Trung](https://github.com/toilatrung)
