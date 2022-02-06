import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = router.locale;

  return (
    <div>
      <div className="inline mr-[0.7rem]">
        <Link href="/" locale="en">
          <a className={locale === "en" ? "disabled" : undefined}>English</a>
        </Link>
      </div>
      <div className="inline mr-[0.7rem]">
        <Link href="/" locale="zh">
          <a className={locale === "zh" ? "disabled" : undefined}>中文</a>
        </Link>
      </div>
    </div>
  );
}
