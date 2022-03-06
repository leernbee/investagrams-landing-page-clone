import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="overflow-hidden antialiased">
    {props.meta}

    <div>
      <Navigation />

      <div>{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Main };
