type LayoutProps = {
  search?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  grid?: boolean;
  children: React.ReactNode;
};

const TITLE = "Spell Check and Auto-Correction";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="parent_section">
        <div className="parent">
          <h1 className="heading">{TITLE}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
