import React from 'react';
import styles from './styles.module.scss'

type Props = {
    padding : string;
}

export class Card extends React.Component<Props>  {
    render() {
        return (
            <section className={styles.card }>
                <div data-cy="card" className={` ${styles.container}
                    ${this.props.padding === 'large'? styles.large : styles.medium}
                `}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}
