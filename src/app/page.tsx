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
        <Counter/>
    </>;
}
