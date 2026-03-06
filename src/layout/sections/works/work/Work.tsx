import styled from "styled-components";

type WorkPropsType = {
  src: string;
  title: string;
  text: string;
  link?: string;
};

export const Work = ({ src, title, text, link }: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={src} alt="" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Link href={link}>demo</Link>
      <Link href={link}>Code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: lightgoldenrodyellow;  
  width: min(100%, 540px)
`;

const Title = styled.h3``;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;
const Text = styled.p``;
const Link = styled.a``;
