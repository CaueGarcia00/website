import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  href: string;
  subtitle: string;
  icon: ReactNode;
}

export default function Card({ title, subtitle, href, icon }: CardProps) {
  return (
    <Link href={href} legacyBehavior>
      <a className="block h-full">
        <div className="h-full bg-white rounded-xl overflow-hidden shadow-xl border border-yellow-custom transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="p-6 flex items-center gap-2 text-light-blue-custom">
            <div className="text-5xl">{icon}</div>
            <div>
              <h2 className="font-semibold text-lg text-yellow-custom">
                {title}
              </h2>
              <p className="text-black">{subtitle}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}