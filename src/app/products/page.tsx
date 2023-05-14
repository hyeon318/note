import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css'

// export const revalidate = 3;

export default async function ProductPage() {
  const products = await getProducts();
  // db (file) 에 있는 data 로 rendering
  const res = await fetch("https://meowfacts.herokuapp.com"
  , {next:{revalidate: 0}}
  // , {cache: "reload"}
  );
  // revalidate -> serverside rendering (요청이 올때마다 변경됨)
  const data = await res.json();
  const factText = data.data[0];
  console.log(factText) 

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
      <article className={styles.article}>{factText}</article>
    </>
  )
}