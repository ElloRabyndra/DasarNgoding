"use client";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 xl:px-12 bg-brand-darker border-t border-border">
      <div className="container mx-auto xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-muted-foreground" />
            <span className="font-bold text-foreground">DasarNgoding</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 DasarNgoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;