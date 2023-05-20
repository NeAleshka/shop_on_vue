interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;

  readonly VITE_DEFAULT_LOCALE: string;
  readonly VITE_FALLBACK_LOCALE: string;
  readonly VITE_SUPPORTED_LOCALES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
