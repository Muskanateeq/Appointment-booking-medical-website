import { NextPage } from 'next';
import ProgressBarContainer from '@/components/ProgressBarContainer';
import StatsContainer from '@/components/StatsContainer';
import CustomersReviews from '@/components/CustomersReviews';

const Home: NextPage = () => {
  return (
    <>
    <div>
      <StatsContainer />
    </div>
    <div>
      <CustomersReviews/>
    </div>
    <div>
      <ProgressBarContainer />
    </div>

    </>
  );
};

export default Home;
