import { ButtonStyle } from './styles';

function Button({ children, onClick, color }) {
  return (
    <ButtonStyle
      color={color}
      className={'Button'}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
