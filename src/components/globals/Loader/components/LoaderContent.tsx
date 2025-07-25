/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// uses in RouteChangeLoader for pages load
// and in _document.ts on the first page load for speed loading without waiting for other files
export function LoaderContent({
  nonce,
}: {
  nonce: string;
}) {
  const styles = Array.from({
    length: 8,
  })
    .map(
      (_, i) => `
        .loader:nth-of-type(${i + 1}) {
          animation-delay: ${i * 0.25}s;
          transform: rotate(${i * 45}deg) translateY(-50px) rotate(${i + 140}deg);
        }
      `,
    )
    .join(`\n`);

  return (
    <div className="loader-container">
      {/*
        Insert dynamic inline styles into the page.
        We add the CSP nonce to allow this inline <style> block to be executed
        without violating Content Security Policy.
      */}
      <style
        nonce={nonce}
      >
        {styles}
      </style>
      {Array.from({
        length: 8,
      })
        .map((_, i) => (
          <div
            className="loader"
            key={i}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 31"
            >
              <path
                d="m27.28 19.24-.47 3.65-1.91 3.25-5.15.97-15.66-3.7 2.4-7.63L8.83 9.6l7.46-5.3 3.59 3.02 7.39 11.91Z"
                fill="#F2E3EB"
              />
              <path
                d="m17.7 1.67-1.2-.18a1.04 1.04 0 0 0-1.18 1.25l.12.52c.1.44.29.84.57 1.19l5.18 6.37c.52.64 1 1.31 1.42 2.02l3.98 6.62a1.24 1.24 0 0 1-1.84 1.61l-2.96-2.34-7.19-5.3-3.59-2.67-2.55-2.01a4.56 4.56 0 0 0-.68-.45l-.87-.46c-.6-.32-1.3-.37-1.94-.13l-.26.1a1.64 1.64 0 0 0-.77 2.48l.27.39c.13.19.3.35.47.5l16.82 13.3a.92.92 0 0 1-.73 1.62l-2.82-.5-2.9-.81-10.3-3.38a2.9 2.9 0 0 0-1.24-.13l-1.12.14a1.22 1.22 0 0 0-.74 2.05l.85.9c.3.31.66.57 1.05.75l1.94.89 4.72 1.58 3.63 1.2 3.64.82c2.19.3 4.4.42 6.6.36l3.29-.1 1.19-.14a4.2 4.2 0 0 0 3.2-2.18c.3-.56.46-1.19.48-1.82v-.38a5.69 5.69 0 0 0-.2-1.67l-1.11-3.98-.9-2.08a41.88 41.88 0 0 0-2.73-5.27l-1.17-1.91a20.76 20.76 0 0 0-2.66-3.47l-4.3-4.54c-.4-.4-.9-.68-1.46-.76Z"
                fill="#D993BA"
                stroke="#D993BA"
              />
              <path
                d="m12.95 8.23-2.79 1.3-.45.18-.37.1a2.81 2.81 0 0 0-1.94 3.22l.27 1.42c.39 2.09.13 4.24-.73 6.18l-.38.84a.88.88 0 0 1-1.62-.68l.25-.63a13.6 13.6 0 0 0 .78-6.77l-.44-3.12-.01-.03a.86.86 0 0 1 .6-1.3l2.48-.39c.18-.03.35-.07.52-.14l1.32-.5a9.03 9.03 0 0 0 4.47-3.75l.74-1.23c.22-.37.8-.23.82.2a4.44 4.44 0 0 1-1.59 3.75l-.64.53c-.4.32-.83.6-1.3.82Z"
                fill="#D993BA"
                stroke="#D993BA"
              />
            </svg>
          </div>
        ))}
    </div>
  );
}

// it must be here for speed loading styles on the first page load
export const loaderStyles = `
  .loader-container {
    position: fixed;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f6f5f5;
    opacity: 1;
  }

  .loader {
    position: absolute;
    width: 30px;
    height: 30px;
    animation: pawStep 2s ease-in-out infinite;
  }

  @keyframes pawStep {
    0%   { opacity: 0; }
    30%  { opacity: 1; }
    60%  { opacity: 1; }
    100% { opacity: 0; }
  }
`;
