import styles from '@styles/Topbar.module.css'

import { FormattedMessage } from 'react-intl'

const Topbar = () => {
    return (
    <div className={styles.containerTopBar}>
        <FormattedMessage id="getStarted"/>
        
    </div>
    )
}

export default Topbar