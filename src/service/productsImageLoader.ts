import { ImageLoaderProps } from 'next/image';

function productsImageLoader( {src, width} :ImageLoaderProps){
  console.log( `https://github.com/hyeon318/note/blob/7a5b304356281b82eff24abc8c24c46af8561ddc/public/images/${src}?w=${width}`)
  return `https://github.com/hyeon318/note/blob/7a5b304356281b82eff24abc8c24c46af8561ddc/public/images/${src}?w=${width}`;
}
export default productsImageLoader;