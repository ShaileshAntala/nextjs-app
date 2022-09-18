import type { NextPage } from 'next';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';

const Home: NextPage = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>Welcome to my First NextJS app</h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;
