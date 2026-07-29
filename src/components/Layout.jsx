import Navbar from './Navbar';

export default function Layout({ children, isDark, onToggleTheme }) {
  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />
      <main className="flex-1">
        {children}
      </main>
    </>
  );
}
