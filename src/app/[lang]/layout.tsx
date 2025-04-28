import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RealEstate Platform",
  description: "Find your dream home",
};

interface LayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  };
}

export default function Layout({ children, params }: LayoutProps) {
  return <>{children}</>;
}