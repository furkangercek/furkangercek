interface Props {
  children: React.ReactNode;
  expand?: boolean;
}

export const Frame = ({ children, expand = false }: Props): JSX.Element => {
  return (
    <div
      className={`flex gap-1 rounded border border-light-12/160 px-2 py-1 text-white ${
        expand ? "flex-1" : ""
      }`}
    >
      {children}
    </div>
  );
};
