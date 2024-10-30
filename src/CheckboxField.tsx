import React from 'react';
import { Icon } from '@precooked/react-icon';

interface IconPath {
    d: string; // El atributo 'd' de la ruta del SVG
    color?: string; // El color del trazo o relleno
}

interface CheckboxFieldProps {
    checked: boolean; // Estado del checkbox
    onChange: (checked: boolean) => void; // Función que se ejecuta al cambiar el estado
    styles?: React.CSSProperties; // Estilos aplicados al contenedor
    className?: string;
    id?: string;
    iconSize?: number; // Tamaño del icono
    iconColor?: string; // Color del icono
    checkedIconPaths?: IconPath[]; // Custom paths para el icono seleccionado
    uncheckedIconPaths?: IconPath[]; // Custom paths para el icono no seleccionado
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    checked,
    onChange,
    styles,
    className,
    id,
    iconSize = 24, // Valor por defecto del tamaño del ícono
    iconColor = 'black', // Valor por defecto del color del ícono
    checkedIconPaths, // Paths customizados para el ícono seleccionado
    uncheckedIconPaths, // Paths customizados para el ícono no seleccionado
}) => {
    const handleCheckboxChange = () => {
        onChange(!checked);
    };

    return (
        <div
            id={id}
            className={`checkbox-field-container ${className}`}
            style={styles}
            onClick={handleCheckboxChange}
            role="button"
            tabIndex={0} // Hace que el div sea navegable con el teclado
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCheckboxChange();
            }} // Maneja la interacción por teclado
        >
            <Icon
                name={checked ? 'checkboxChecked' : 'checkboxUnchecked'}
                color={iconColor}
                size={iconSize}
                paths={checked ? checkedIconPaths : uncheckedIconPaths} // Usa los paths customizados si existen
            />
        </div>
    );
};

export default CheckboxField;
