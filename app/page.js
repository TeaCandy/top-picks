import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Order Here</h2>
      <Button>Take 2</Button>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
