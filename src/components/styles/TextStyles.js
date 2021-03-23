import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight:bold;
    font-size: 60px;
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 28px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 24px;
`

export const H4 = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 4px;
`

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
`

export const Caption = styled.p`
  font-size: 14px;
    font-weight: 500;
    margin:0;
    line-height:1.5;
    color: #545a59;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`