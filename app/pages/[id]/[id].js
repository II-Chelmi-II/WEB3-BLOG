import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = {
    id: id,
    title: `Blog ${id}`,
    content: `Contenu du blog ${id}`
  };

  return (
    <div>
      <Header />
      <h1>Détails du blog {id}</h1>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link href="/home">
        <a>Retour à la liste des blogs</a>
      </Link>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
