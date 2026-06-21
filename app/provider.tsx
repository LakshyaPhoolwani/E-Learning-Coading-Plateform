import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default provider;
