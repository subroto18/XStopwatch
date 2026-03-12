import Styles from "./Style.module.css";
type Props = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};
const index = ({ value, onChange }: Props) => {
  return (
    <textarea value={value} onChange={onChange} className={Styles.textarea} />
  );
};

export default index;
