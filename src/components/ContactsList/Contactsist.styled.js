import styled from "styled-components";
import img from "./delete.png";

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  padding-top: 10px;
  border: 2px solid #32cd32;
  background-color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 4px;
  min-height: 100px;
`;

export const ListItem = styled.li`
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const Name = styled.span`
  font-weight: bold;
  width: 400px;
  display: inline-block;
`;

export const Number = styled.span`
  font-style: italic;
  width: 230px;
  display: inline-block;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const Notification = styled.p`
  font-style: italic;
  text-align: center;
`;
