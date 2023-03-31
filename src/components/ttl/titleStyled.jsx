import styled from "styled-components";

export const CommonTtlBox = styled.div`
  margin: 0 ${(props) => (props.mgxAuto ? "auto" : "0")};
  text-align: ${(props) => (props.tac ? "center" : "left")};
  @media ${(props) => props.theme.mobile} {
  }
`;

export const MemberTtlBox = styled(CommonTtlBox)`
  margin-bottom: 60px;
  @media ${(props) => props.theme.mobile} {
  }
`;

export const MainTtl = styled.h3`
  font-size: 3.125rem;
  line-height: 1.28;
  font-weight: 900;

  @media ${(props) => props.theme.mobile} {
    font-size: 2.3076rem;
  }
`;

export const MainTtlBot = styled.p`
  font-size: 1.5rem;
  color: #757575;
  line-height: 1.5;
  margin: 30px 0 80px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.3076rem;
    margin: 1.923rem 0 2.6923rem;
  }
`;

export const ContainerTtlBox = styled(CommonTtlBox)`
  margin-bottom: 40px;
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 1.923rem;
  }
`;
export const ContainerTtl = styled.h2`
  font-family: "NanumSquare", sans-reif;
  font-size: 1.875rem;
  line-height: 1.4782;
  text-align: inherit;
  font-weight: 600;

  &.big {
    font-size: 2.375rem;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 1.76923rem;
  }
`;
export const SectTtlBox = styled(CommonTtlBox)`
  margin-bottom: ${(props) => (props.main ? "25px" : "30px")};
  @media ${(props) => props.theme.mobile} {
    margin-bottom: ${(props) => (props.main ? "1rem" : "1.5384rem")};
  }
`;
export const SectTtl = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;

  text-transform: uppercase;

  &.big {
    font-size: 1.625rem;
    margin-bottom: 40px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 1.3076rem;
  }
`;

export const ViewTtl = styled.h3`
  font-size: 1.625rem;
  &.big {
    font-size: 1.75rem;
  }
  @media ${(props) => props.theme.mobile} {
  }
`;
export const WriteTtl = styled.h3`
  font-size: 1.625rem;
  font-weight: 500;
  text-transform: uppercase;
  @media ${(props) => props.theme.mobile} {
  }
`;

export const MemberTtl = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  @media ${(props) => props.theme.mobile} {
  }
`;
export const MemberTtlBot = styled.p`
  font-size: 1.125rem;
  line-height: 1.2;
  color: #454545;
  margin-top: 30px;
  @media ${(props) => props.theme.mobile} {
  }
`;

export const FormTtl = styled.h4`
  font-size: 1.375rem;
  @media ${(props) => props.theme.mobile} {
  }
`;
