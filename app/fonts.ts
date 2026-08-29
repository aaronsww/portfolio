import localFont from "next/font/local";

export const nohemi = localFont({
  src: [
    { path: "./fonts/Nohemi-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Nohemi-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Nohemi-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});
