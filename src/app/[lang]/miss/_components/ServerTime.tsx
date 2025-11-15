export async function ServerTime() {
  return <p>{new Date().toISOString()}</p>;
}
