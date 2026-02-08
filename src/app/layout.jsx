import { Sora } from "next/font/google";
import "./globals.css";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Ashkar S Portfolio",
  description: "Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}

        {/* Toasts live here */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
