/* @flow */
import React from 'react'
import styles from './styles.css'

type Props = {
  title: string,
  body: string,
  image: string,
  link: string
};
function renderImage (image, link) {
  if (!image) {
    return null
  }
  const imageHeaderStyle = {
    backgroundImage: `url(${image})`
  }
  const imageMarkup = <div id="backgroundImage" className={styles.image} style={imageHeaderStyle} />
  if (link) {
    return (
      <a href={link}>
        {imageMarkup}
      </a>
    )
  }
  return (imageMarkup)
}

function renderTitle (title, link) {
  if (!title) {
    return null
  }
  const titleMarkup = <h2 className={styles.title}>{title}</h2>
  if (link) {
    return (
      <a href={link}>
        {titleMarkup}
      </a>
    )
  }
  return (titleMarkup)
}

const ContentCard = ({
  title = 'Content Card',
  body = 'testing some body text',
  image,
  link
}: Props) => {
  return (
    <div className={styles.container}>
      {renderImage(image, link)}
      <div className={styles.textWrapper}>
        {renderTitle(title, link)}
        <div className={styles.body}>{body}</div>
      </div>
    </div>
  )
}

export default ContentCard
