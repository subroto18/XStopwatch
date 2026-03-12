import { useEffect, useState } from "react";
import { dictionary } from "../mockData/dictionary";
import type { DictionaryItemProps } from "../types";

const useDictionary = () => {
  const [data, setData] = useState<DictionaryItemProps>({});
  const [misspelled, setMisspelled] = useState("");

  useEffect(() => {
    const fetchDictionary = async () => {
      setData(dictionary);
    };

    fetchDictionary();
  }, []);

  const getWord = (searchTerm: string) => {
    if (!searchTerm) return data;

    let found = "";

    for (const word of searchTerm.split(" ")) {
      if (data[word.toLocaleLowerCase()]) {
        found = data[word.toLocaleLowerCase()];
        break;
      }
    }

    if (found) {
      setMisspelled(found);
    }
    return found;
  };

  return { data, getWord, misspelled };
};

export default useDictionary;
