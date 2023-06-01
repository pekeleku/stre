import "../src/styles/utilities.css";
import "../src/styles/homepage.css";
import "../src/styles/detail.css";
import "../src/styles/checkout.css";
import "../src/styles/complete-checkout.css";
import "../src/styles/sign-in.css";
import "../src/styles/sign-up.css";
import "../src/styles/sign-up-photo.css";
import "../src/styles/sign-up-success.css";
import "../src/styles/404-not-found.css";
import "../src/styles/sidebar.css";
import "../src/styles/overview.css";
import "../src/styles/transactions.css";
import "../src/styles/transactions-detail.css";
import "../src/styles/edit-profile.css";
import "../src/styles/navbar-log-in.css";
import * as nextImage from "next/image";
import type { Preview } from "@storybook/react";

// Object.defineProperty(nextImage, "default", {
//   configurable: true,
//   value: (props) => <img {...props} />,
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
