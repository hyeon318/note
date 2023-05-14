"use client";

import { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css'

function MeowArticle() {
  const [text, setText] = useState("Loading . . .");

  useEffect(() => {
    fetch("http://meowfacts.herokuapp.com").then(res => res.json()).then(data => setText(data.data[0]));
  }, [])

  return <article className={styles.article}>{text}</article>
}
export default MeowArticle;