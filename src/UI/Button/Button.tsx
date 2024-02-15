interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
