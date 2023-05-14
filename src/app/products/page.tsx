import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';

// export const revalidate = 3;

export default async function ProductPage() {
  const products = await getProducts();
  // db (file) 에 있는 data 로 rendering

  return(
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {
          products.map((product, index)=> {
            return (
              <li key={index}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </li>
            )
          })
        }
      </ul>
      <MeowArticle />
    </>
  )
}