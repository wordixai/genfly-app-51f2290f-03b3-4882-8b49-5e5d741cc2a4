'use client';

import { createContext, useContext, ReactNode } from 'react';

interface I18nContextProps {
  locale: string;
}

const I18nContext = createContext<I18nContextProps>({ locale: 'en' });

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <I18nContext.Provider value={{ locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}