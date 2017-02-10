/* @flow */
import React from 'react'
import styles from './styles.css'

type ColumnCardProps = {
  title: string
}

function ColumnCard ({
  title = 'ColumnCard'
}: ColumnCardProps) {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default ColumnCard
