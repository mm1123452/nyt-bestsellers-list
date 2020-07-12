import { useState, useEffect } from "react";
import { URL, DATE, QUERY } from "./constants";

export const useGetListBySubject = (ListType) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await fetch(`${URL}/${DATE}/${ListType}.json?${QUERY}`, {
        credentials: "same-origin",
      });

      if (!res.ok) throw new Error("fetching error");

      const data = await res.json();

      setData({
        books: data.results.books,
        display_name: data.results.display_name,
      });
    } catch (e) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(ListType);
  }, [ListType]);

  return { ...data, isLoading, isError };
};
