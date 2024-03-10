import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Bienvenue sur la page d'accueil</h1>
      <Link href="/home">
        <a>Accéder à la page d'accueil</a>
      </Link>
      <Footer />
    </div>
  );
};

export default IndexPage;
