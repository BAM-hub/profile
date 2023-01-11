import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Nav,
  Search,
  GroupLarge,
  GroupSmall,
  BlueButton,
  Ham,
  FullWidth,
} from "../styled/Header";
import { Container, Text } from "../styled/Home";
import { useRouter } from "next/router";

function Header() {
  const { locale, asPath } = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <FullWidth>
      <Container>
        <Nav>
          <GroupLarge>
            <svg
              width='38'
              height='28'
              viewBox='0 0 38 28'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Artboard-2' fill='none' fillRule='evenodd'>
                <g id='Group' transform='translate(.75 .5)'>
                  <polygon
                    id='Fill-6'
                    fill='#D0DADF'
                    points='21.5992059 3.7304095 23.9710142 12.8795549 18.4156968 7.32421542'
                  ></polygon>
                  <path
                    d='M21.5539581,3.76610238 C20.5850482,4.85212773 20.1627547,6.26078101 20.2870988,7.62803419 C20.3673816,8.51080195 20.6755383,9.37631147 21.2115746,10.126585 L23.9053203,12.8795549 C27.0249359,16.0331634 27.0249359,21.1462923 23.9053203,24.2999007 L34.1943673,13.8553298 C37.3083412,10.6966143 37.3083412,5.57541918 34.1943673,2.41675144 C31.0804882,-0.741916302 26.0318245,-0.741916302 22.9179454,2.41675144 L21.5539581,3.76610238 Z'
                    id='Fill-8'
                    fill='#6CD4FF'
                  ></path>
                  <path
                    d='M2.33971875,13.8551771 C-0.77989677,10.7015686 -0.77989677,5.58848742 2.33971875,2.43483124 C5.45938169,-0.718824937 10.5172426,-0.718824937 13.6369055,2.43483124 L23.9710379,12.8795931 C27.0906534,16.0331538 27.0906534,21.1462828 23.9710379,24.2998912 C20.851375,27.4535474 15.7934666,27.4535474 12.6738985,24.2998912 L2.33971875,13.8551771 Z'
                    id='Mask'
                    fill='#F05F5F'
                  ></path>
                  <path
                    d='M12.6704804,12.8802136 L15.0659325,10.5306505 C16.6560579,8.74763246 16.7253544,6.09234292 15.3562469,4.17845154 L23.9710331,12.8795931 C27.0633888,16.0056141 27.0904116,21.0570292 24.0521489,24.216747 L23.886741,24.3838945 C20.7609624,27.4533087 15.7655383,27.4252917 12.6738938,24.2998912 C9.55655386,21.1600765 9.55655386,16.0388813 12.6704804,12.8802136 Z'
                    id='Fill-3'
                    fill='#C53F3F'
                  ></path>
                </g>
              </g>
            </svg>
            <Search
              type='text'
              placeholder={locale === "en" ? "Search" : "بحث"}
            />
          </GroupLarge>
          <Button>{locale === "en" ? "Login" : "تسجيل الدخول"}</Button>
          <BlueButton>{locale === "en" ? "Register" : "انشاء حساب"}</BlueButton>
          <GroupSmall>
            <Link href={asPath} locale={locale === "en" ? "ar" : "en"}>
              <svg
                width='19'
                height='19'
                viewBox='0 0 19 19'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='none' fillRule='evenodd'>
                  <path d='M-3-3h25v25H-3z'></path>
                  <g fill='#000' fillRule='nonzero'>
                    <path d='M9.5 18.402A8.902 8.902 0 1 1 9.5.598a8.902 8.902 0 0 1 0 17.804zm0-1.137a7.765 7.765 0 1 0 0-15.53 7.765 7.765 0 0 0 0 15.53z'></path>
                    <path d='M9.5 18.402c-2.137 0-3.585-4-3.585-8.902C5.915 4.598 7.363.598 9.5.598s3.585 4 3.585 8.902c0 4.902-1.448 8.902-3.585 8.902zm0-1.137c1.195 0 2.448-3.463 2.448-7.765S10.695 1.735 9.5 1.735 7.052 5.198 7.052 9.5s1.253 7.765 2.448 7.765z'></path>
                    <path d='M1.7 7.402a.568.568 0 0 1 0-1.137h15.567a.568.568 0 0 1 0 1.137H1.7zM1.7 12.735a.568.568 0 1 1 0-1.137h15.567a.568.568 0 0 1 0 1.137H1.7z'></path>
                  </g>
                </g>
              </svg>
              {locale === "en" ? "عربي" : "English"}
            </Link>
          </GroupSmall>

          <Ham
            className='button-three'
            aria-controls='primary-navigation'
            aria-expanded={open ? "true" : "false"}
            data-state={open ? "open" : "closed"}
            onClick={() => setOpen(!open)}
          >
            <svg
              stroke='var(--button-color)'
              fill='none'
              className='hamburger'
              viewBox='-10 -10 120 120'
              width='40'
            >
              <path
                className='line'
                strokeWidth='10'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70'
              ></path>
            </svg>
          </Ham>
        </Nav>
      </Container>
    </FullWidth>
  );
}

export default Header;
