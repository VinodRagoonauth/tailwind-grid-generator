export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center max-w-4xl mx-auto p-5">
        <p className="text-black text-lg font-bold">Tailwind Grid Generator</p>
        <p className="text-black">
          <a
            href="https://github.com/VinodRagoonauth/tailwind-grid-generator"
            target="_blank"
            className="hover:underline"
          >
            View on Github
          </a>
        </p>
      </div>
    </nav>
  );
}
