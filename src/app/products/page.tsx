import Link from 'next/link';

const products = ['shirts', 'pants', 'skirts', 'shoes'];

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