import { Button } from "@/src/components/ui/button";
import prisma from "@/src/lib/db";
import { getQueryClient, trpc } from "@/src/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Suspense fallback={<p>Loading....</p>}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Client />
        </HydrationBoundary>
      </Suspense>
    </div>
  );
};

export default Page;
