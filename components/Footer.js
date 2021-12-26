import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 0.5px solid var(--low-contrast-color);
`;

const Content = styled.div`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  font-family: var(--font-family-sans-serif);
  font-size: 14px;
  color: var(--hint-color);
`;

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <p>&mdash; December 2021, Rockville, Maryland</p>
      </Content>
    </Wrapper>
  );
}
