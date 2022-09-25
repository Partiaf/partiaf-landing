import React from 'react'
import styles from './Time.module.css'

const Time = () => {
  return (
    <div className={styles.container}>
      <h3>Tu tiempo es importante</h3>
      <p>Ahorra horas de trabajo automatizando tareas cotidianas</p>

      <div className={styles.container_options}>
        <div>
            <span>
            <i className='bx bx-edit'></i>
            </span>
            <h4>Inbox</h4>
            <p>Organiza y clasifica todas las facturas y gastos que recibas de una fuente externa en un solo lugar.</p>
        </div>
        <div>
            <span>
            <i className='bx bx-message-dots' ></i>
            </span>
            <h4>Conciliacion bancaria</h4>
            <p>Conecta Partiaf a tu banco de forma segura para conciliar tus facturas con tus movimientos bancarios.</p>
        </div>
        <div>
            <div>
                <span>
                <i className='bx bx-spreadsheet' ></i>
                </span>
            </div>
            <h4>Prestacion de modelos</h4>
            <p>Partiaf puede rellenar algunos modelos de IVA e IRPF de forma automatica y enviarlos telematicamente.</p>
        </div>
        <div>
            <span>
                <i className='bx bx-user-minus' ></i>
            </span>
            <h4>Plantillas de documentos y emails</h4>
            <p>Elike entre mas de 20 plantillas editables para personalizar las facturas, documentos y emails que envia tu empresa.</p>
        </div>
        <div>
            <span>
                <i className='bx bx-briefcase' ></i>
            </span>
            <h4>Remesas</h4>
            <p>Automatiza la generacion de remesas a traves de un archovo XML con tus facturas, descargalas y subelas al banco.</p>
        </div>
        <div>
            <span>
            <i className='bx bx-bar-chart-alt-2' ></i>
            </span>
            <h4>Facturas recurrentes</h4>
            <p>Programa tus facturas recurrentes cuando quieras para que no tengas que enviar la misma factura una y otra vez.</p>
        </div>
      </div>
    </div>
  )
}

export default Time
