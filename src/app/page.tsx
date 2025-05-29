import NavigationBallons from '@/components/NavigationBallons';
import SectionPresentation from '@/components/SectionPresentation';
import SectionTravaux from '@/components/SectionTravaux';
import SectionPassions from '@/components/SectionPassions';

export default function Home() {
  return (
    <main className="min-h-screen bg-apple-gray">
      <NavigationBallons />
      <SectionPresentation />
      <SectionTravaux />
      <SectionPassions />
    </main>
  );
} 