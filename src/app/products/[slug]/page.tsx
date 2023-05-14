import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  }
}
// db(file) 에 있는 데이터 검색
export function generateMetadata({params} : Props){
  return {
    title: `제품의 이름 : ${params.slug}`
  }
}

export default function Page({params : {slug}}: Props) {
  const product = getProduct(slug);
  if(!product){
    notFound();
  }
  return <h1>{product} 입니다.</h1>
}

export function generateStaticParams(){
  // next js 가 정의한 함수  
  // 모든 페이지를 미리 rendering 하도록 변경
  const products = getProducts();
  return products.map(product => {
    return ({
      slug: product
    })
  })
}