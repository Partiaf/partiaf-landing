import React from 'react'
import styles from './Time.module.css'

import { FormattedMessage } from 'react-intl'

const Time = () => {
  return (
    <div className={styles.container}>
      <h3><FormattedMessage id="timeImportant"/></h3>
      <p><FormattedMessage id="saveHours"/></p>

      <div className={styles.container_options}>
        <div>
            <span>
            <i className='bx bx-edit'></i>
            </span>
            <h4>Inbox</h4>
            <p><FormattedMessage id="onganize"/></p>
        </div>
        <div>
            <span>
            <i className='bx bx-message-dots' ></i>
            </span>
            <h4><FormattedMessage id="bank"/></h4>
            <p><FormattedMessage id="connect"/></p>
        </div>
        <div>
            <div>
                <span>
                <i className='bx bx-spreadsheet' ></i>
                </span>
            </div>
            <h4><FormattedMessage id="previsionModel"/></h4>
            <p><FormattedMessage id="telematically"/></p>
        </div>
        <div>
            <span>
                <i className='bx bx-user-minus' ></i>
            </span>
            <h4><FormattedMessage id="templates"/></h4>
            <p><FormattedMessage id="editableTemplates"/></p>
        </div>
        <div>
            <span>
                <i className='bx bx-briefcase' ></i>
            </span>
            <h4><FormattedMessage id="remittances"/></h4>
            <p><FormattedMessage id="automateRemittances"/></p>
        </div>
        <div>
            <span>
            <i className='bx bx-bar-chart-alt-2' ></i>
            </span>
            <h4><FormattedMessage id="invoices"/></h4>
            <p><FormattedMessage id="schedule"/></p>
        </div>
      </div>
    </div>
  )
}

export default Time
