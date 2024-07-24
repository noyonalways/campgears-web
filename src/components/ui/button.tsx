interface IProps {
  children: React.ReactNode;
}
const Button: React.FC<IProps> = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
