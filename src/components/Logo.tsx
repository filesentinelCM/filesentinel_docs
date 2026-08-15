import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  theme?: 'light' | 'dark' | 'auto';
  variant?: 'full' | 'icon' | 'badge';
  showSubtitle?: boolean;
}

export const FileSentinelLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light',
  variant = 'full',
  showSubtitle = false,
}) => {
  const sizeConfig = {
    sm: {
      text: 'text-lg',
      dot: 'w-1.5 h-1.5',
      iconSize: 'w-7 h-7 text-xs',
      spacing: 'tracking-tight',
    },
    md: {
      text: 'text-2xl',
      dot: 'w-2 h-2',
      iconSize: 'w-9 h-9 text-sm',
      spacing: 'tracking-tight',
    },
    lg: {
      text: 'text-3xl sm:text-4xl',
      dot: 'w-2.5 h-2.5 sm:w-3 sm:h-3',
      iconSize: 'w-11 h-11 text-base',
      spacing: 'tracking-tight',
    },
    xl: {
      text: 'text-4xl sm:text-5xl',
      dot: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
      iconSize: 'w-14 h-14 text-xl',
      spacing: 'tracking-tight',
    },
    '2xl': {
      text: 'text-5xl sm:text-6xl md:text-7xl',
      dot: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6',
      iconSize: 'w-16 h-16 text-2xl',
      spacing: 'tracking-tight',
    },
  };

  const currentSize = sizeConfig[size];

  // Font styling that replicates the sharp transitional serif wordmark
  const serifStyle = {
    fontFamily: '"Source Serif 4", "Playfair Display", "Lora", "Georgia", serif',
  };

  if (variant === 'icon' || variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl font-serif font-bold transition-all select-none ${
          theme === 'dark'
            ? 'bg-slate-900 text-white border border-slate-800 shadow-md'
            : 'bg-slate-950 text-white shadow-md'
        } ${currentSize.iconSize} ${className}`}
        style={serifStyle}
        title="FileSentinel"
      >
        <span className="relative flex items-center">
          f
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1C75BC] ml-0.5" />
        </span>
      </div>
    );
  }

  const textColorClass =
    theme === 'dark'
      ? 'text-white'
      : theme === 'auto'
      ? 'text-slate-900 dark:text-white'
      : 'text-slate-950';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div
        className={`inline-flex items-baseline font-serif font-semibold lowercase ${currentSize.text} ${textColorClass} ${currentSize.spacing}`}
        style={serifStyle}
      >
        <span>filesentinel</span>
        {/* Official signature blue dot #1C75BC */}
        <span
          className={`inline-block rounded-full ml-0.5 mb-0.5 shadow-sm ${currentSize.dot}`}
          style={{ backgroundColor: '#1C75BC' }}
          aria-hidden="true"
        />
      </div>
      {showSubtitle && (
        <span className="text-[10px] text-slate-500 font-sans font-medium tracking-normal -mt-0.5">
          Real-Time Local Sync
        </span>
      )}
    </div>
  );
};

export default FileSentinelLogo;
