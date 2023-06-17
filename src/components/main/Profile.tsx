import Image from "next/image";
import styled from "styled-components";
import ContactIconList from "@src/components/common/ContactIconList";
import Link from "next/link";

export default function Profile() {
  return (
    <Wrapper>
      <Link href={"/about"} passHref>
        <ProfileImageWrapper>
          <Image
            src={"/profile.png"}
            width={"100px"}
            height={"100px"}
            alt={"프로필 사진"}
          />
        </ProfileImageWrapper>
      </Link>
      <div>
        <h3>조예진</h3>
        <ContactIconList />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  position: relative;

  h3 {
    height: 100%;
    margin: 5px 0;
  }
  p {
    margin: 0;
  }
`;

const ProfileImageWrapper = styled.a`
  margin: auto 0;
  cursor: pointer;
  img {
    border-radius: 30px 10px 30px 10px;
  }
`;
