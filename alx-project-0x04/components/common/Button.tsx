// components/common/Button.tsx

import { ButtonProps } from '@/interface';

const Button = ({ buttonLabel, buttonSize = 'px-4 py-2', buttonBackgroundColor, action }: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        orange: 'bg-orange-500',
        green: 'bg-green-500',
      }[buttonBackgroundColor]
    : 'bg-slate-500';

  const hoverClass = buttonBackgroundColor
    ? {
        red: 'hover:bg-red-500/50',
        blue: 'hover:bg-blue-500/50',
        orange: 'hover:bg-orange-500/50',
        green: 'hover:bg-green-500/50',
      }[buttonBackgroundColor]
    : 'hover:bg-slate-500/50';

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${buttonSize} text-sm font-semibold rounded-lg ${hoverClass} transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
