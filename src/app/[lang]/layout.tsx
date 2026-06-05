import { LanguageProvider } from "@/context/LanguageContext";
import GlobalModals from "@/components/GlobalModals";

export async function generateStaticParams() {
  return [{ lang: 'br' }, { lang: 'us' }];
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  await params;

  return (
    <LanguageProvider>
      {children}
      <GlobalModals />
    </LanguageProvider>
  );
}
