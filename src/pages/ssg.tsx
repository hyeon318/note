import MeowArticle from '@/components/MeowArticle';
import { getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
  return (
    // 이 부분은 client rendering 으로 구현될 거임
    // client 실행!!
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

export async function getStaticProps() {
  const products = await getProducts();
  // 이 함수를 통해서 data 를 가져오고 이 데이터를 props 형태로 return 하면 서버에서 실행할때 
  // 이 페이지의 props 로 리턴해준다.
  // server 실행
  return {
    props: { products },
    revalidate: 10,
  };
}
