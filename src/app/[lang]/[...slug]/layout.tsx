import { type Metadata } from "next";

export const revalidate = 15;
export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const pathName = "/" + ((await props.params).slug || []).join("/");
  return {
    title: "Foo " + pathName,
  } as Metadata;
}

export default function Layout(props: React.PropsWithChildren) {
  return props.children;
}
