import Cta from '@/components/Cta';
import Download from '@/components/Download';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Signup from '@/components/Signup';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Investagram Landing page"
          description="Cloned Landing page"
        />
      }
    >
      <>
        <Hero />
        <Features />
        <Signup />
        <Process />
        <Cta />
        <Download />
      </>
    </Main>
  );
};

export default Index;
