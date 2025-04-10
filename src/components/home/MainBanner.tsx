import React from 'react';
import useDevice from '../../hooks/useDevice';
import styled from 'styled-components';
import { SwiperSlide, Swiper } from 'swiper/react';
import './css/swiper.css';
import LazyLoad from 'react-lazy-load';

interface bannerDataProp {
  name: string,
  banners: [bannersType]
}

interface bannersType {
  title: string;
  link?: string;
  img: {
    desktop: {
      src: string
    };
    mobile: {
      src: string
    };
  }
  alt?: string;
}

interface PlaceholderProp {
  desktop: string;
  mobile: string;
}

interface MainBannerProps {
  bannerData: bannerDataProp | null;
  placeholder: PlaceholderProp;
}

export const MainBanner : React.FC<MainBannerProps> = ({bannerData, placeholder}) => {
  const device = useDevice() as 'desktop' | 'mobile';

  if (bannerData?.banners) {
    return (
      <BannerWrapper id="main-banner">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
        >
            {
              bannerData.banners.map((banner, i) => {
                const imgSrc = banner.img[device].src || placeholder[device];
                const altText = banner.alt || 'Imagem Banner';
                
                return banner.link ? (
                  <SwiperSlide>
                    <a href={banner.link} className="main-banner__wrapper" key={i}>
                      <LazyLoad>
                        <img src={imgSrc} alt={altText} title={altText} className="main-banner__img" loading="lazy" />
                      </LazyLoad>
                    </a>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide>
                    <div className="main-banner__wrapper" key={i}>
                      <LazyLoad>
                        <img src={imgSrc} alt={altText} title={altText} className="main-banner__img" loading="lazy" />
                      </LazyLoad>
                    </div>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
      </BannerWrapper>
    )
  }
}

const BannerWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
