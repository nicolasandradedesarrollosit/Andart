export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-white/80 mb-2">
              © 2025 Andart. Todos los derechos reservados.
            </p>
            <p className="text-xs sm:text-sm text-white/60">
              Powered by © <a className="text-white/90 font-semibold transition-all duration-300 ease-in-out hover:underline hover:text-white" href="https://andart-coral.vercel.app/">Andart.</a>
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mt-8"></div>
      </div>
    </footer>
  );
}