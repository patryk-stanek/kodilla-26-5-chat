import React from 'react';

import styles from './_styles.scss';

const Message = props => (
    <div className={styles.Message}>
        <strong className={styles.Message__Author}>{props.from}: </strong>
        <span className={styles.Message__Text}>{props.text}</span>
    </div>
);

const MessageList = props => (
    <div className={styles.MessageList}>
        {
            props.messages.map((message, i) => {
                return (
                    <Message
                    key={i}
                    from={message.from}
                    text={message.text}
                    />
                );
            })
        }
    </div>
);

export default MessageList;