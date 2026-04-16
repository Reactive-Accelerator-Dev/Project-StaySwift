"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function FilterByStarCategory() {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label for="fiveStar">
          <input type="checkbox" name="5" id="fiveStar" />5 Star
        </label>

        <label for="fourStar">
          <input type="checkbox" name="4" id="fourStar" />4 Star
        </label>

        <label for="threeStar">
          <input type="checkbox" name="3" id="threeStar" />3 Star
        </label>

        <label for="twoStar">
          <input type="checkbox" name="2" id="twoStar" />2 Star
        </label>

        <label for="oneStar">
          <input type="checkbox" name="1" id="oneStar" />1 Star
        </label>
      </form>
    </div>
  );
}
