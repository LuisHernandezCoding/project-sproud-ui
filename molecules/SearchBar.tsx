import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & { className?: string };

export default function SearchBar(props: Props): React.ReactElement {
  const { className = '', ...rest } = props;
  return (
    <div className={`relative ${className}`}>
      <input
        {...rest}
        type={rest.type || 'text'}
        placeholder={rest.placeholder || 'Search...'}
        className={`w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300`}
      />
    </div>
  );
}
