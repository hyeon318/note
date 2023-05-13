import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  }
}
export function generateMetadata({params} : Props){
  return {
    title: `제품의 이름 : ${params.slug}`
  }
}

export default function Page({params}: Props) {
  if(params.slug === "nothing"){
    notFound();
  }
  return <h1>{params.slug} 입니다.</h1>
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