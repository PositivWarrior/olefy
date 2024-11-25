export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/library", "/playlist/:path*"], // Protect these routes
};
