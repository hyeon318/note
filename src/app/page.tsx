import Counter from '@/components/counter';
import Image from 'next/image'
import {notFound} from 'next/navigation';
import os from 'os'; // node api

export default function Home() {
    // notFound(); // 내가 custom 한 page 가 발생
    console.log("안녕! - server")
    console.log("node api : " , os.hostname());

    return <>
        <h1>홈페이지다!</h1>
        <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="이미지" width={400} height={400}/>
        <Counter/>
    </>;
}
