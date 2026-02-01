
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'pink' | 'gold';
  showBadge?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "w-24 h-24",
  variant = 'pink',
  showBadge = true
}) => {
  // Colores oficiales de marca
  const colors = {
    pink: '#9B3A5A',   // Rosa oficial del brand
    gold: '#8B7355',   // Dorado para texto
    light: '#FFFFFF',
    dark: '#1A1A1A'
  };

  const color = colors[variant] || colors.pink;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Badge Circular "CAFÉ Y NATURALEZA" - B2C */}
      {showBadge && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="transparent"
            />
          </defs>
          <text
            className="uppercase"
            style={{
              fontSize: '8.5px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              fontFamily: 'Inter, sans-serif'
            }}
            fill={color}
          >
            <textPath xlinkHref="#circlePath">
              CAFÉ Y NATURALEZA • CAFÉ Y NATURALEZA •
            </textPath>
          </text>
        </svg>
      )}

      {/* Ampersand Central - Símbolo Oficial de la Marca */}
      <svg
        viewBox="0 0 100 100"
        className={showBadge ? "w-1/2 h-1/2" : "w-full h-full"}
        fill={color}
      >
        {/* Ampersand decorativo estilizado */}
        <text
          x="50"
          y="68"
          textAnchor="middle"
          style={{
            fontSize: '72px',
            fontFamily: 'Playfair Display, serif',
            fontStyle: 'italic',
            fontWeight: 400
          }}
          fill={color}
        >
          &amp;
        </text>
      </svg>
    </div>
  );
};

export default Logo;
