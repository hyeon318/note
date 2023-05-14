import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

export async function getServerSideProps() {
  // SSG 와 SSR 의 차이는 호출하는 FUNCTION 의 이름이 다르다.
  const products = await getProducts();
  return {
    props: { products },
  };
}
