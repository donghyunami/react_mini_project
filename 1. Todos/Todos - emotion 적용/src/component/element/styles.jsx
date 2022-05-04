import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  ${props => console.log(props)}
  display: inline-block;
  font-size: 1.5rem;
  margin-left: 2rem;
  border: 1px solid lightgrey;
  padding: 9px 18px;
  border-radius: 5px;
  /* background: ${({ color }) =>
    color ? color : '#000'}; */
  background: #6eb0eb;
  color: #fff;
  &:hover,
  &:active {
    background: #419cf1;
  }
`;
