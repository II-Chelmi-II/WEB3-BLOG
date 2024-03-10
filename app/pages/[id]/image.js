import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BlogImagePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const imageUrl = `https://picsum.photos/500/300?random=${id}`;

  return (
    <div>
      <Header />
      <h1>Image du blog {id}</h1>
      <img src={imageUrl} alt={`Image du blog ${id}`} />
      <Link href={`/blog/${id}`}>
        <a>Retour aux détails du blog</a>
      </Link>
      <Footer />
    </div>
  );
};

export default BlogImagePage;
