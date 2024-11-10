import React, { PropsWithChildren } from 'react';

export function Button(
  props: PropsWithChildren<{
    onClick: React.DOMAttributes<HTMLButtonElement>['onClick'];
  }>,
) {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 bg-sky-400 transition-colors active:transition-none rounded shadow hover:bg-sky-300 active:bg-sky-200"
    >
      {props.children}
    </button>
  );
}
