import { after } from "next/server";

import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";


const View = async ({ id }: { id: string }) => {
  // const { views: totalViews } = await client
  //   .withConfig({ useCdn: false})
  //   .fetch(STARTUP_VIEWS_QUERY, { id });

  // after(async () => {
  //   await writeClient
  //     .patch(id)
  //     .set({ views: totalViews + 1 })
  //     .commit();
  // });
  return (
    <div className="view-container">
      <p className="view-text">
        <span className="font-black">Views: </span>
      </p>
    </div>
  );
};

export default View;
