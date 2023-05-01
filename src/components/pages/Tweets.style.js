import styled from "styled-components";
import logo from "../picture/logo.png";
import picture from "../picture/picture.png";
import ellipse from "../picture/ellipse.png";
import rectangle from "../picture/rectangle.png";

export const CardBox = styled.div`
  width: 380px;
  height: 460px;
  margin-top: 20px;
  margin-bottom: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const FollowingBtn = styled.button`
  width: 196px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const TextBtn = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const FollowBtn = styled.button`
  width: 196px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const Logo = styled.div`
  position: absolute;
  width: 76px;
  height: 22px;

  margin-left: 20px;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.3);

  background-image: url(${logo});

  z-index: 5;
`;

export const Picture = styled.div`
  margin-left: 36px;
  margin-right: 36px;
  width: 308px;
  height: 168px;
  background-image: url(${picture});
  background-size: cover;
  z-index: 1;
`;

export const Elipse = styled.div`
  position: absolute;
  width: 89px;
  height: 89px;
  background-image: url(${ellipse});
  z-index: 5;
`;

export const UserFoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: 3;
`;

export const Rectangle = styled.img`
  position: absolute;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  background-image: url(${rectangle});
  z-index: 2;
`;

export const PhotoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90px;
`;

export const Tweet = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Follower = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
