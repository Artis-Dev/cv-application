function Footer() {
  return (
    <footer className="flex justify-center bg-slate-700 py-4 font-lato text-slate-50 decoration-slate-500">
      <p>Built by</p>
      <a
        className="ml-1 underline"
        href="https://github.com/Artis-Dev/"
        target="_blank"
        rel="noreferrer"
      >
        ArtisDev
      </a>
      <a
        className="ml-4 border-l border-slate-500 underline decoration-slate-500 sm:pl-4"
        href="https://github.com/Artis-Dev/cv-application"
        target="_blank"
        rel="noreferrer"
      >
        Source code
      </a>
    </footer>
  );
}

export default Footer;
