import { MainBanner } from "../components/home/MainBanner";
import placeholderDesk from '../assets/banner-desk-placeholder.jpg';
import placeholderMob from '../assets/banner-mob-placeholder.jpg';
import { useEffect, useState } from "react";
import { $resource } from "../plugins/axios";
import axios from "axios";

export const Home = () => {
  const [bannerData, setBannerData] = useState(null);
  const placeholder = {
    desktop: placeholderDesk,
    mobile: placeholderMob
  }

  const fetchBanners = async () => {
    try {
      const res = await $resource.get('/banners/home-banner-full');
      const data = await res.data;
      setBannerData(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response!.data.message);
      }
    }
  }

  useEffect(() => {
    fetchBanners();
  }, []);

  return(
    <>
      {
        bannerData ? (
          <MainBanner bannerData={bannerData} placeholder={placeholder}/>
        ) : false
      }
      <div className="home container">
      </div>
    </>
  )
}
