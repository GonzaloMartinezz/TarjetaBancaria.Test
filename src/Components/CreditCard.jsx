import React from 'react';
import '../Styles/CreditCard.css'; // Estilos globales o usa el módulo CSS

// Logos de ejemplo (puedes reemplazarlos con tus propios assets)
/* import visaLogo from './visa_logo.png'; // Asegúrate de tener estas imágenes o reemplaza con URLs */
/* import mastercardLogo from './mastercard_logo.png'; */
/* import galiciaLogo from './galicia_logo.png';  */// Logo de Banco Galicia

const CreditCard = ({ cardNumber, cardHolder, expiryDate, cardType, bankName }) => {
    // Función para formatear el número de tarjeta en grupos de 4
    const formatCardNumber = (number) => {
        if (!number) return 'XXXX XXXX XXXX XXXX';
        const cleanNumber = number.replace(/\s/g, ''); // Eliminar espacios
        return cleanNumber.match(/.{1,4}/g)?.join(' ') || '';
    };

    // Función para formatear la fecha de vencimiento MM/YY
    const formatExpiryDate = (date) => {
        if (!date) return 'MM/YY';
        // Asume que la fecha viene como 'MM/AA'
        return date;
    };

    // Seleccionar logo de la tarjeta
    let cardLogo = null;
    switch (cardType.toLowerCase()) {
        case 'visa':
            cardLogo = visaLogo;
            break;
        case 'mastercard':
            cardLogo = mastercardLogo;
            break;
        default:
            cardLogo = null; // O un logo por defecto
    }

    return (
        <div className="credit-card-container">
            <div className={`credit-card ${cardType.toLowerCase()}`}>
                <div className="card-top">
                    <img src={galiciaLogo} alt={`${bankName} Logo`} className="bank-logo" />
                    {cardLogo && <img src={cardLogo} alt={`${cardType} Logo`} className="card-type-logo" />}
                </div>
                <div className="card-number">
                    {formatCardNumber(cardNumber)}
                </div>
                <div className="card-bottom">
                    <div className="card-holder-info">
                        <span className="label">Card Holder</span>
                        <span className="value">{cardHolder || 'FULL NAME'}</span>
                    </div>
                    <div className="expiry-info">
                        <span className="label">Expires</span>
                        <span className="value">{formatExpiryDate(expiryDate)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;