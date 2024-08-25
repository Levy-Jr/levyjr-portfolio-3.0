import { Navbar } from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const NavbarProvider = async () => {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
    </NextIntlClientProvider>
  )
}