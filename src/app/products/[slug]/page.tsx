import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  }
}

export default function Page({params}: Props) {
  if(params.slug === "nothing"){
    notFound();
  }
  return <h1>{params.slug} 바지입니다.</h1>
}

export function generateStaticParams(){
  // next js 가 정의한 함수 
  const products = ['pants', 'skirt'];
  return products.map(product => {
    return ({
      slug: product
    })
  })
}