import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Lang = styled.span`
  display: inline-block;
  margin-right: .7rem;
`;

export default function LocaleSwitcher() {
    const router = useRouter();
    const locale = router.locale;
    
  return (
    <div>
      <Lang>
        <Link href="/" locale="en">
          <a className={locale === "en" ? "disabled" : undefined}>English</a>
        </Link>
      </Lang>
      <Lang>
        <Link href="/" locale="zh">
          <a className={locale === "zh" ? "disabled" : undefined}>中文</a>
        </Link>
      </Lang>
    </div>
  );
}
