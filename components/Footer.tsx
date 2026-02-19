"use client";
import { Code2, Heart } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-6 md:pb-0 px-6 xl:px-12 bg-brand-darker border-t border-border">
      <div className="container mx-auto xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-no-bg.png"
              alt="CodeLearn Logo"
              width={100}
              height={12}
              className="group-hover:animate-pulse transition-transform"
            />
          </div>

          <p className="text-sm text-muted-foreground -mt-8 md:mt-0">
            © 2026 DasarNgoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
