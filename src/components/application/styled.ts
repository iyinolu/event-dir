import styled from "styled-components";

export const DefaultProfilePlaceholder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: yellowgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 31px;
  color: #202020;
`;
export const CloseButton = styled.div`
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  color: #f9fafb;
  &:hover {
    background: #a6a6a6;
    color: #f9fafb;
  }
`;
