import Link from "next/link";

export default function Page() {
  return <Link href="/about">Go to /about</Link>;
}

export const metadata = {
  title: "home",
};
