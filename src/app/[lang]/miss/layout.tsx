import { type Metadata } from "next";

export const revalidate = 30;
export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const pathName = "/" + ((await props.params).slug || []).join("/");
  return {
    title: "Foo Miss " + pathName,
  } as Metadata;
}

export default function Layout(props: React.PropsWithChildren) {
  return props.children;
}
