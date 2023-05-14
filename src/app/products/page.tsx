import { getProducts } from '@/service/products';
import Link from 'next/link';

const products = getProducts();
// db (file) 에 있는 data 로 rendering
export default function ProductPage() {
  return(
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {
          products.map((product, index)=> {
            return (
              <li key={index}>
                <Link href={`/products/${product}`}>{product}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}