import { useEffect, useState } from "react"

const useDevice = () => {
  const [device, setDevice] = useState('desktop');

  const getDevice = () => {
    return window.innerWidth >= 1024 ? 'desktop' : 'mobile';
  }

  useEffect(() => {
    const handleDevice = () => {
      setDevice(getDevice);
    }

    window.addEventListener('resize', handleDevice);

    return () => {
      window.removeEventListener('resize', handleDevice);
    }
  }, []);

  return device;
}


export default useDevice;