import productsImageLoader from '@/service/productsImageLoader';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  }
}

// db(file) 에 있는 데이터 검색
export async function generateMetadata({params} : Props){
  const product = await getProduct(params.slug);
  return {
    title: `제품의 이름 : ${product ? product.name : "없음"}`
  }
}

export default async function ProductPage({params : {slug}}: Props) {
  const product = await getProduct(slug);
  if(!product){
    notFound();
  }

  return  <>
  {/* <Image loader={productsImageLoader} src={product.image} width={500} alt={product.name}/> */}
  <Image src={`/images/${product.image}`} alt={product.name} width={500} height={500}/>
  <h1>{product.name} 입니다.</h1>
</>
}

export async function generateStaticParams(){
  // next js 가 정의한 함수  
  // 모든 페이지를 미리 rendering 하도록 변경
  const products = await getProducts();
  return products.map(product => {
    return ({
      slug: product.id
    })
  })
}