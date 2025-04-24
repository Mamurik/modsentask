// HomeIcon.tsx
type IconProps = {
  color?: string;
  size?: number;
  fill?: string;
};

export const HomeIcon = ({ color = '#999999', size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      d="M16.6999 5.68324L11.8999 2.32491C10.5915 1.40824 8.5832 1.45824 7.32487 2.43324L3.14987 5.69157C2.31654 6.34157 1.6582 7.67491 1.6582 8.72491V14.4749C1.6582 16.5999 3.3832 18.3332 5.5082 18.3332H14.4915C16.6165 18.3332 18.3415 16.6082 18.3415 14.4832V8.83324C18.3415 7.70824 17.6165 6.32491 16.6999 5.68324ZM10.6249 14.9999C10.6249 15.3416 10.3415 15.6249 9.99987 15.6249C9.6582 15.6249 9.37487 15.3416 9.37487 14.9999V12.4999C9.37487 12.1582 9.6582 11.8749 9.99987 11.8749C10.3415 11.8749 10.6249 12.1582 10.6249 12.4999V14.9999Z"
      fill={color}
    />
  </svg>
);

// FavoriteIcon.tsx
export const FavoriteIcon = ({ color = '#999999', size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      d="M10 15.8334C12.7583 15.8334 15 13.5917 15 10.8334V6.66675C15 3.90841 12.7583 1.66675 10 1.66675C7.24167 1.66675 5 3.90841 5 6.66675V10.8334C5 13.5917 7.24167 15.8334 10 15.8334Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 9.16675V10.8334C2.5 14.9751 5.85833 18.3334 10 18.3334C14.1417 18.3334 17.5 14.9751 17.5 10.8334V9.16675"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5918 6.2334C9.07513 5.69173 10.6918 5.69173 12.1751 6.2334"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.3584 8.73335C9.3584 8.45835 10.4167 8.45835 11.4167 8.73335"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LikeIcon = ({ color = '#999999', fill = 'none' }: IconProps) => (
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.7002 0.5C10.2729 0.500101 11.4999 1.72185 11.5 3.29688C11.5 4.26232 11.0689 5.18086 10.207 6.23438C9.55654 7.02946 8.6907 7.86689 7.64258 8.83008L6.53418 9.83789L6.5332 9.83887L6 10.3232L5.4668 9.83887L5.46582 9.83789L4.35742 8.83008C3.3093 7.86689 2.44346 7.02946 1.79297 6.23438C0.931071 5.18086 0.5 4.26232 0.5 3.29688C0.500066 1.72185 1.72706 0.500101 3.2998 0.5C4.1928 0.5 5.05863 0.917548 5.62109 1.57227L6 2.01465L6.37891 1.57227C6.94137 0.917548 7.8072 0.5 8.7002 0.5Z"
      stroke={color}
    />
  </svg>
);
