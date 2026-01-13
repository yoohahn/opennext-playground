export async function ServerTime({
  slugParams,
}: {
  slugParams: { slug: string[] };
}) {
  const s = slugParams.slug;
  if (s[0] === "bomb") {
    throw new Error("Bomb exploded!");
  }
  return (
    <div>
      <p>{new Date().toISOString()}</p>
      <pre>{JSON.stringify(s.join("/"))}</pre>
    </div>
  );
}
