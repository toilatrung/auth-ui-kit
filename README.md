<img width="1920" height="911" alt="register_fullscreen" src="https://github.com/user-attachments/assets/8bd67746-fcc2-4737-8b13-5a65dfab2087" />

# 📚 Custom Auth UI Kit (Troy Course Lab Style)

This login and registration UI template is developed based on the ShadCN UI collection (starting from the `signup-02` template) but features significant customization in terms of interface (UI/UX) and includes custom form validation rules.

## 🚀 Technology Stack

This project is built on a modern and high-performance stack:

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Framework** | React | User interface construction. |
| **Language** | TypeScript | Type Safety. |
| **Tooling** | Vite (v7.x) | Fast development environment and build. |
| **Styling** | Tailwind CSS (v4.x) | Utility-first CSS Framework. |
| **UI Primitives** | Shadcn/ui & Radix UI | Headless UI components. |
| **Form Management** | React Hook Form, Zod | Form management and schema validation. |
| **Routing** | React Router DOM (v7.x) | Application routing management. |

## 🛠️ Setup and Installation

Follow the steps below to set up and run the project on your local machine.

### 1\. Install Dependencies

Open your terminal in the project's root directory and run the following command to install all necessary packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2\. Install and Initialize Shadcn CLI (If you want to add new components)

This project uses the Shadcn/ui architecture, where component source code is added directly to the project directory (`src/components/ui`).

  * **Note:** You do not install Shadcn/ui as a regular npm dependency, but you **must install the Shadcn CLI** if you want to easily add new components in the future.

<!-- end list -->

1.  **Install Shadcn CLI (Global):**

    ```bash
    npm install -g shadcn-ui
    # or
    pnpm install -g shadcn-ui
    ```

2.  **Add a New Component (Example: `card`):**
    Use the following command for the Shadcn CLI to automatically copy the new component's source code into the configured directory (`@/components/ui`):

    ```bash
    npx shadcn-ui@latest add card
    ```

### 3\. Key Configuration

The template has the following configurations already set up:

  * **Path Alias:** The `@/` alias is configured in `tsconfig.json` and `vite.config.ts` to point to the `src` directory.
  * **Custom Font:** The **Montserrat** font is imported via CDN and configured as the main font in `tailwind.config.js`.

### 4\. Start the Project

Run the project in development mode:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173/`.

-----

## 🎨 UI/UX Overview and Structure

### 1\. Registration Page (`src/pages/RegisterPage.tsx`)

  * **URL:** `/register`
  * **Layout:** Features a modern authentication screen design:
      * Uses a split-screen layout (`flex-col md:flex-row`) with a characteristic deep red background (`md:bg-[#680011]`) on desktop.
      * The form area is a semi-transparent, blurred layer (`md:bg-white/75 md:backdrop-blur-sm`) with a subtle shadow (`md:shadow-lg`).
      * Includes the main logo (`/tcl_logo.svg`) and a secondary classic logo (`/classic_troy_logo.svg`) in the bottom left corner (desktop only) to enhance brand identity.

### 2\. Login Page (`src/pages/LoginPage.tsx`)

  * **URL:** `/login`
  * **Layout:** Adopts the same consistent design as the Registration Page.

### 3\. Form Logic and Validation

| Component | Validation Rules | Notes |
| :--- | :--- | :--- |
| **`RegisterForm`** | Name, Email, Password, Confirm Password | Includes a custom hint to use specific email domains (`@troy.edu` or `@sis.hust.edu.vn`) for benefits. |
| **`LoginForm`** | Email, Password (min 8 chars) | Includes a hint to use specific email domains and a link to the registration page ("Create one"). |

### 4\. Custom API Integration

To integrate with your backend:

1.  Open `src/components/auth/register-form.tsx` and `src/components/auth/login-form.tsx`.
2.  Replace the mock `onSubmit` function with your actual API calling logic.

---
## 🖼️ Visual References

Below are visual representations (screenshots) showcasing the custom UI/UX design across different device views for both the login and registration flows.

### Desktop Views (Split-Panel Design)

**Image: Registration Page (Full Desktop View)**
*Displays the clean two-column layout with the branded red background and the blurred, translucent white form panel.*

<img width="1920" height="911" alt="register_fullscreen" src="https://github.com/user-attachments/assets/4bd3b4ae-c7be-4bf3-841d-e3d0b3ba7fc8" />

**Image: Login Page (Full Desktop View)**
*Highlights the consistent branding on the deep red background and the semi-transparent login form, maintaining UI/UX consistency.*

<img width="1920" height="911" alt="login_fullscreen" src="https://github.com/user-attachments/assets/4d7e2722-3798-4316-9887-b6c8a72d882d" />


### Mobile Views (Single Column Design)

**Image: Registration Form (Mobile View)**
*Shows the registration form optimized for mobile, featuring a single-column layout that prioritizes content and readability.*

<img width="459" height="738" alt="register_mobile" src="https://github.com/user-attachments/assets/0158c435-c7c1-4606-bff3-550b32214e78" />

**Image: Login Form (Mobile View)**
*Displays the mobile-optimized login form, demonstrating responsiveness and accessibility across smaller screens.*

<img width="459" height="738" alt="login_mobile" src="https://github.com/user-attachments/assets/296f1168-b34a-4922-ad36-a9b77ddcf36a" />
