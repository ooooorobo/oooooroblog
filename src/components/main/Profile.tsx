import Image from "next/image";
import styled from "styled-components";
import ContactIconList from "@src/components/common/ContactIconList";

export default function Profile() {
  return (
    <Wrapper>
      <ProfileImageWrapper>
        <Image
          src={"/profile.png"}
          width={"100px"}
          height={"100px"}
          alt={"프로필 사진"}
        />
      </ProfileImageWrapper>
      <div>
        <h3>조예진</h3>
        <p>웹 프론트엔드 개발자</p>
        <ContactIconList showResume />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  position: relative;

  h3 {
    margin: 5px 0;
  }
  p {
    margin: 0;
  }
`;

const ProfileImageWrapper = styled.div`
  margin: auto 0;
  img {
    border-radius: 30px 10px 30px 10px;
  }
`;
