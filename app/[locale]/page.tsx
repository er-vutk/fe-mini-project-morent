import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");
  return <main>{t("title")}</main>;
}
