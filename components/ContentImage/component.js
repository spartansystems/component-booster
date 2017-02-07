/* @flow */
import React from 'react'
import styles from './styles.css'

type ContentImageProps = {
  altText: string,
  image: string,
  title: string
}

const ContentImage = ({
  altText,
  image,
  title
}: ContentImageProps) => {
  return (
    <img alt={altText} className={styles.img} src={image} title={title} />
  )
}

export default ContentImage
