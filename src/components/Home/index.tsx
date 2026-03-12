import { useState } from "react";
import useDictionary from "../../hooks/useDictionary";
import Layout from "../common/Layout";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Index = () => {
  const { getWord } = useDictionary();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    const res = getWord(search);
    if (res.length > 0) {
      setResult(res[0].meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };
  return (
    <Layout>
      <div className="search_section">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a word..."
        />
        <Button onClick={handleClick} label="Search" />
      </div>
      <h3 className="word_text">Definition:</h3>
      <p className="definition">{result}</p>
    </Layout>
  );
};

export default Index;
