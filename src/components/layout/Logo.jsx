/**
 * Logo Component
 * Reusable logo component that can be used throughout the application
 */
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ showText = true, size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium',
    large: 'logo-large',
  };

  return (
    <Link to="/" className={`logo-component ${sizeClasses[size]} ${className}`}>
      <img src="/BecomeQA.png" alt="BecomeQA" className="logo-img" />
      {showText && <span className="logo-text">BecomeQA</span>}
    </Link>
  );
};

export default Logo;

