import Image from "next/image";
import styled from "styled-components";

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
        <IconWrapper>
          <a href="https://github.com/ooooorobo">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/%EC%98%88%EC%A7%84-%EC%A1%B0-b741a3222/">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:orobos654@gmail.com" title="orobos654@gmail.com">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </IconWrapper>
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

const IconWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  position: absolute;
  bottom: 5px;
`;
