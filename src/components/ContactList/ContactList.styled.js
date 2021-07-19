import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
width: 800px;

`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
font-size: 24px;

`;

export const Button = styled.button`
  min-width: 100px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  background-color: #ff0d82;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  border: none;
 
`;