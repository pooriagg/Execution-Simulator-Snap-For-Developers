export const SnapLogo = ({ color, size }: { color: string; size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 125 125`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M88.5473 0.415527H36.5005C13.893 0.415527 0.415527 13.9484 0.415527 36.5446V88.5034C0.415527 111.1 13.893 124.57 36.5005 124.57H88.4852C111.093 124.57 124.57 111.1 124.57 88.5034V36.5446C124.632 13.9484 111.155 0.415527 88.5473 0.415527ZM59.8533 92.2281C59.8533 94.0904 58.9216 95.7665 57.3068 96.7597C56.4373 97.3184 55.5057 97.5667 54.5119 97.5667C53.7045 97.5667 52.8971 97.3805 52.0897 97.008L30.3518 86.1445C27.2464 84.5305 25.2589 81.3645 25.2589 77.8261V57.2785C25.2589 55.4161 26.1905 53.7401 27.8053 52.7468C29.4201 51.7536 31.3455 51.6915 33.0224 52.4985L54.7604 63.3621C57.9279 64.9761 59.9154 68.142 59.9154 71.6804V92.2281H59.8533ZM58.549 59.0166L35.1962 46.4149C33.5193 45.4838 32.4635 43.6835 32.4635 41.635C32.4635 39.6485 33.5193 37.7862 35.1962 36.855L58.549 24.2533C61.0333 22.9496 63.9524 22.9496 66.4368 24.2533L89.7895 36.855C91.4664 37.7862 92.5223 39.5864 92.5223 41.635C92.5223 43.6835 91.4664 45.4838 89.7895 46.4149L66.4368 59.0166C65.1946 59.6995 63.8282 60.0099 62.4618 60.0099C61.0954 60.0099 59.7912 59.6995 58.549 59.0166ZM99.789 77.8261C99.789 81.3645 97.8015 84.5925 94.634 86.1445L72.896 97.008C72.1507 97.3805 71.3433 97.5667 70.4738 97.5667C69.4801 97.5667 68.5484 97.3184 67.6789 96.7597C66.0641 95.7665 65.1325 94.0904 65.1325 92.2281V71.6804C65.1325 68.142 67.1199 64.914 70.2875 63.3621L92.0254 52.4985C93.7023 51.6915 95.6277 51.7536 97.2425 52.7468C98.8573 53.7401 99.789 55.4161 99.789 57.2785V77.8261Z"
      fill={color}
    />
  </svg>
);
