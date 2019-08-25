import styled from "styled-components";

const SubHeader = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  height: 70px;
  color: #0ae5f5;
  align-items: center;
  z-index: 1;
  background-image: linear-gradient(to top, transparent 0%, black 20%);
`;

export default SubHeader;
