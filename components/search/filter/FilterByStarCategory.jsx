"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function FilterByStarCategory() {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }

    console.log(query);
  };

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label for="fiveStar">
          <input
            onChange={handleChange}
            type="checkbox"
            name="5"
            id="fiveStar"
          />
          5 Star
        </label>

        <label for="fourStar">
          <input
            onChange={handleChange}
            type="checkbox"
            name="4"
            id="fourStar"
          />
          4 Star
        </label>

        <label for="threeStar">
          <input
            onChange={handleChange}
            type="checkbox"
            name="3"
            id="threeStar"
          />
          3 Star
        </label>

        <label for="twoStar">
          <input
            onChange={handleChange}
            type="checkbox"
            name="2"
            id="twoStar"
          />
          2 Star
        </label>

        <label for="oneStar">
          <input
            onChange={handleChange}
            type="checkbox"
            name="1"
            id="oneStar"
          />
          1 Star
        </label>
      </form>
    </div>
  );
}
