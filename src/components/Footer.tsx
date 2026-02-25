export default function Footer() {
  return (
    <footer className="py-6 px-6 text-center" style={{ borderTop: "1px solid #141E35" }}>
      <p className="text-slate-600 font-mono text-xs">
        © {new Date().getFullYear()} Wojtek Rosłonek
      </p>
    </footer>
  );
}
