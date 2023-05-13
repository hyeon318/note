import Image from 'next/image'

import {notFound} from 'next/navigation';

export default function Home() {
    // notFound(); // 내가 custom 한 page 가 발생
    return <h1>홈페이지다!</h1>
}
