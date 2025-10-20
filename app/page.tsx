import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = async () => {
  const data = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
