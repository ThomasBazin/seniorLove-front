import { useEffect } from 'react';
import MainHomePage from '../components/pageComponents/HomePage/MainHomePage';

export default function HomePage() {
  // Move window position on top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return <MainHomePage />;
}
