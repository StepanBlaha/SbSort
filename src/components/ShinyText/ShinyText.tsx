import './ShinyText.css';

interface ShinyTextProps {
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<React.PropsWithChildren<ShinyTextProps>> = ({ children, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}
        >
            {children}
        </div>
    );
};

export default ShinyText;