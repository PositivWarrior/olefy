export default function Footer() {
    return (
      <footer className="bg-black text-brass text-center py-4 border-t-2 border-brass shadow-retro">
        <p className="text-sm font-retro">
          © {new Date().getFullYear()} by Kacper Margol. All rights reserved. Inspired by Marshall Amps.
        </p>
      </footer>
    );
  }
  