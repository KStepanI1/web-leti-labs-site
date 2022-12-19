import React from 'react'

type Props = {
    text?: string
}

const NoData = ({ text }: Props) => {
    const TEXT = 'Нет данных для отображения' || text

    return (
        <div>{TEXT}</div>
    )
}

export default NoData