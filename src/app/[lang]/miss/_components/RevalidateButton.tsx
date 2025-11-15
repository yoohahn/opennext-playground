import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export function RevalidateButton() {
  async function handleRevalidate() {
    "use server";
    revalidatePath("/en");
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(2000);
    redirect("/en");
  }

  return (
    <form action={handleRevalidate}>
      <button type="submit">Revalidate /en</button>
    </form>
  );
}
