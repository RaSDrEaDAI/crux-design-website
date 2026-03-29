import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple-dark border-t border-purple-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/branding/logo.png"
              alt="Crux Design"
              width={140}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Where design meets AI. Helping small businesses in Southwest Florida
              and beyond transform through cutting-edge technology and creative excellence.
            </p>
          </div>

          <div>
            <h3 className="text-cyan font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cyan font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              Southwest Florida
            </p>
            <Link
              href="/contact"
              className="inline-block bg-magenta hover:bg-magenta-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-light/20 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Crux Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
