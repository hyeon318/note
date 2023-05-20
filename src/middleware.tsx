import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  console.log('미들웨어 실행중 ! ');
  if(request.nextUrl.pathname.startsWith('/products/1234')){
    console.log('middleware - path 를 redirect함')
    return NextResponse.redirect(new URL('/products', request.url))
  }
}

export const config = {
  matcher: ['/products/:path+']
}
// mouse over 할 경우 react 에서 해당 내용을 fetching 해준다.
// /products/:path* path가 있거나(많거나) 없거나 둘 다 가능
// /products/:path+ path가 하나 또는 많거나
// 고로, /produts/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행을 원할경우 아래와 같이 작성해 주셔야 해요