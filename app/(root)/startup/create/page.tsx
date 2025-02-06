import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

export default async function CreatePage() {

  const session = await auth();

  if(!session) redirect('/')


  return (
    <>
      <section className="pink-heading !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>
      <StartupForm />
    </>
  );
}
