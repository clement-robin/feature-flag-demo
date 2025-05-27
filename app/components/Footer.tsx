export default function Footer() {
  return (
    <footer className="drop-shadow-sm bg-white p-4 w-full text-center mt-auto">
      <h3>© Kameleoon Feature Flag {new Date().getFullYear()}</h3>
    </footer>
  );
}
