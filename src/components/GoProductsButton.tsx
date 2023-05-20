'use client'
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

function GoProductsButton () {
  const router = useRouter();
  return (
    <button onClick={() => {
      router.push('/products');
    }}>제품 페이지로 이동</button>
  );
};
export default GoProductsButton;