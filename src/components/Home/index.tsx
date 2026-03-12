import Layout from "../common/Layout";
import Textarea from "../../ui/Textarea/";
import { useEffect, useState } from "react";
import useDictionary from "../../hooks/useDictionary";

const Index = () => {
  const { getWord, misspelled } = useDictionary();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getWord(search);
  }, [search]);

  return (
    <Layout>
      <div className="search_section">
        <Textarea value={search} onChange={handleChange} />
      </div>
      {misspelled && (
        <p className="definition">
          Did you mean:<strong>{misspelled}</strong>?
        </p>
      )}
    </Layout>
  );
};

export default Index;
