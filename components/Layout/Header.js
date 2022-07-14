import { Button } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-primaryColor h-24'>
      <div className='container mx-auto flex h-full items-center justify-center md:justify-between'>
        <div>
          <svg
            width='194'
            height='56'
            viewBox='0 0 194 56'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M53.8984 19.668C53.8984 19.3768 53.8984 19.1827 53.9955 19.0857C54.0926 18.8915 54.1896 18.7945 54.3837 18.6974C54.5779 18.6004 54.869 18.6004 55.1602 18.5033C55.5485 18.5033 55.9367 18.4062 56.5191 18.4062C57.1014 18.4062 57.5867 18.4062 57.8779 18.5033C58.2661 18.5033 58.4602 18.6004 58.6544 18.6974C58.8485 18.7945 58.9455 18.8915 59.0426 19.0857C59.1397 19.2798 59.1397 19.4739 59.1397 19.668L58.5573 40.2447H62.3426C62.6338 40.2447 62.8279 40.2447 62.925 40.3418C63.0221 40.3418 63.2162 40.4388 63.2162 40.5359C63.3132 40.6329 63.3132 40.73 63.3132 40.9241C63.3132 41.1182 63.3132 41.3124 63.3132 41.6035C63.3132 41.8947 63.3132 42.0888 63.3132 42.283C63.3132 42.4771 63.3132 42.5741 63.2162 42.6712C63.1191 42.7683 63.0221 42.8653 62.925 42.8653C62.8279 42.8653 62.6338 42.9624 62.3426 42.9624H56.5191C56.0338 42.9624 55.7426 42.9624 55.4514 42.9624C55.1602 42.9624 54.9661 42.8653 54.869 42.8653C54.772 42.7683 54.6749 42.6712 54.5779 42.5741C54.5779 42.4771 54.4808 42.283 54.4808 41.9918L53.8984 19.668ZM69.6221 35.2947L64.3809 20.5416C64.2838 20.2504 64.1868 20.0563 64.1868 19.8621C64.0897 19.668 64.0897 19.4739 64.0897 19.2798C64.0897 19.0857 64.0897 18.9886 64.1868 18.8915C64.2838 18.7945 64.3809 18.6974 64.575 18.6004C64.7691 18.5033 65.0603 18.5033 65.4486 18.5033C65.8368 18.5033 66.225 18.5033 66.8074 18.5033C67.2927 18.5033 67.778 18.5033 68.0692 18.5033C68.3603 18.5033 68.6515 18.6004 68.8456 18.6974C69.0398 18.7945 69.1368 18.8915 69.2339 19.0857C69.3309 19.2798 69.428 19.4739 69.428 19.7651L71.6604 31.1211H71.9516L74.0869 19.7651C74.1839 19.4739 74.1839 19.1827 74.281 19.0857C74.3781 18.8915 74.4751 18.7945 74.6692 18.6974C74.8634 18.6004 75.0575 18.6004 75.4457 18.6004C75.7369 18.6004 76.2222 18.6004 76.7075 18.6004C77.1928 18.6004 77.6781 18.6004 78.0663 18.6004C78.4546 18.6004 78.6487 18.6974 78.9399 18.6974C79.134 18.7945 79.3281 18.7945 79.3281 18.9886C79.4252 19.0857 79.4252 19.2798 79.4252 19.3768C79.4252 19.571 79.4252 19.7651 79.3281 19.9592C79.231 20.1533 79.231 20.4445 79.134 20.6386L73.9898 35.4888L73.7957 42.0888C73.7957 42.283 73.7957 42.4771 73.6986 42.6712C73.6986 42.7683 73.6016 42.8653 73.4075 42.9624C73.3104 43.0594 73.1163 43.0594 72.8251 43.0594C72.5339 43.0594 72.2427 43.0594 71.7574 43.0594C71.2721 43.0594 70.981 43.0594 70.6898 43.0594C70.3986 43.0594 70.2045 42.9624 70.1074 42.9624C70.0104 42.8653 69.9133 42.7683 69.8162 42.6712C69.8162 42.5741 69.7192 42.38 69.7192 42.0888L69.6221 35.2947ZM81.4634 19.668C81.4634 19.3768 81.4634 19.1827 81.5605 19.0857C81.5605 18.8915 81.7546 18.7945 81.8517 18.6974C82.0458 18.6004 82.2399 18.6004 82.5311 18.5033C82.8223 18.5033 83.2105 18.4062 83.7929 18.4062C84.1811 18.4062 84.4723 18.4062 84.7635 18.4062C85.0546 18.4062 85.2488 18.5033 85.4429 18.5033C85.637 18.5033 85.7341 18.6004 85.8311 18.6974C85.9282 18.7945 86.0252 18.8915 86.0252 19.0857L91.4606 33.8388H91.5576L90.7812 19.668C90.7812 19.3768 90.7812 19.1827 90.8782 19.0857C90.9753 18.8915 91.0723 18.7945 91.1694 18.6974C91.3635 18.6004 91.5576 18.6004 91.8488 18.5033C92.14 18.5033 92.6253 18.4062 93.1106 18.4062C93.693 18.4062 94.1783 18.4062 94.4694 18.5033C94.8577 18.5033 95.0518 18.6004 95.2459 18.6974C95.44 18.7945 95.5371 18.8915 95.6342 19.0857C95.7312 19.2798 95.7312 19.4739 95.7312 19.668L95.0518 41.5065C95.0518 41.7006 95.0518 41.8947 94.9547 42.0888C94.9547 42.283 94.8577 42.38 94.7606 42.5741C94.6636 42.6712 94.4694 42.7683 94.2753 42.8653C94.0812 42.9624 93.79 42.9624 93.4018 42.9624C93.0135 42.9624 92.7224 42.9624 92.5282 42.8653C92.3341 42.8653 92.14 42.6712 92.0429 42.4771L86.1223 27.4328H85.9282L85.8311 41.8947C85.8311 42.0888 85.8311 42.283 85.7341 42.4771C85.7341 42.5741 85.637 42.6712 85.5399 42.7683C85.4429 42.8653 85.2488 42.8653 85.0546 42.8653C84.8605 42.8653 84.5693 42.8653 84.1811 42.8653C83.7929 42.8653 83.4046 42.8653 83.1134 42.8653C82.8223 42.8653 82.6281 42.7683 82.5311 42.7683C82.434 42.6712 82.337 42.5741 82.2399 42.4771C82.2399 42.38 82.1428 42.1859 82.1428 41.8947L81.4634 19.668ZM104.952 32.577L107.573 19.7651C107.67 19.4739 107.67 19.2798 107.767 19.0857C107.864 18.8915 107.961 18.7945 108.155 18.6974C108.349 18.6004 108.64 18.5033 108.931 18.5033C109.223 18.5033 109.708 18.5033 110.193 18.5033C111.067 18.5033 111.649 18.6004 112.037 18.6974C112.426 18.7945 112.62 18.9886 112.62 19.3768C112.62 19.4739 112.62 19.571 112.62 19.668C112.62 19.7651 112.62 19.8621 112.523 19.9592C112.523 20.0563 112.523 20.1533 112.426 20.2504C112.426 20.3474 112.328 20.4445 112.328 20.5416L108.737 32.4799L112.037 40.8271C112.134 41.2153 112.231 41.5065 112.328 41.7006C112.425 41.8947 112.426 42.0888 112.426 42.283C112.426 42.38 112.425 42.4771 112.328 42.5741C112.328 42.6712 112.231 42.6712 112.037 42.7683C111.94 42.7683 111.746 42.8653 111.455 42.8653C111.261 42.8653 110.873 42.8653 110.484 42.8653C110.193 42.8653 109.902 42.8653 109.611 42.8653C109.417 42.8653 109.223 42.7683 109.125 42.6712C109.028 42.5741 108.931 42.4771 108.834 42.283C108.737 42.0888 108.64 41.8947 108.543 41.7006L104.952 32.577ZM99.1283 19.668C99.1283 19.3768 99.1283 19.1827 99.2254 19.0857C99.3224 18.8915 99.4195 18.7945 99.6136 18.6974C99.8077 18.6004 100.099 18.6004 100.39 18.5033C100.778 18.5033 101.167 18.4062 101.749 18.4062C102.331 18.4062 102.817 18.4062 103.108 18.5033C103.496 18.5033 103.69 18.6004 103.884 18.6974C104.078 18.7945 104.175 18.8915 104.272 19.0857C104.37 19.2798 104.37 19.4739 104.37 19.668L103.69 41.9918C103.69 42.1859 103.69 42.38 103.593 42.5741C103.593 42.6712 103.496 42.7683 103.302 42.8653C103.205 42.9624 103.011 42.9624 102.72 42.9624C102.428 42.9624 102.137 42.9624 101.652 42.9624C101.167 42.9624 100.875 42.9624 100.584 42.9624C100.293 42.9624 100.099 42.8653 100.002 42.8653C99.9048 42.8653 99.8077 42.6712 99.7107 42.5741C99.7107 42.4771 99.6136 42.283 99.6136 41.9918L99.1283 19.668Z'
              fill='white'
            />
            <path
              d='M122.908 21.5108H120.287C119.996 21.5108 119.802 21.5108 119.705 21.4137C119.608 21.4137 119.511 21.3167 119.413 21.2196C119.316 21.1226 119.316 20.9284 119.316 20.8314C119.316 20.6373 119.316 20.4431 119.316 20.152C119.316 19.8608 119.316 19.6667 119.316 19.4726C119.316 19.2784 119.413 19.1814 119.413 19.0843C119.511 18.9873 119.608 18.8902 119.705 18.8902C119.802 18.8902 119.996 18.7931 120.287 18.7931H125.14H125.431H130.672C130.964 18.7931 131.158 18.7931 131.255 18.8902C131.352 18.8902 131.546 18.9873 131.546 19.0843C131.643 19.1814 131.643 19.3755 131.643 19.4726C131.643 19.6667 131.643 19.8608 131.643 20.152C131.643 20.4431 131.643 20.6373 131.643 20.8314C131.643 21.0255 131.643 21.1226 131.546 21.2196C131.449 21.3167 131.352 21.4137 131.255 21.4137C131.158 21.4137 130.964 21.5108 130.672 21.5108H128.052L127.469 41.8934C127.469 42.0875 127.469 42.2816 127.372 42.3787C127.372 42.4757 127.275 42.5728 127.081 42.6698C126.984 42.7669 126.79 42.7669 126.499 42.7669C126.208 42.7669 125.916 42.7669 125.431 42.7669C124.946 42.7669 124.655 42.7669 124.364 42.7669C124.072 42.7669 123.878 42.6698 123.781 42.6698C123.684 42.5728 123.587 42.4757 123.49 42.3787C123.49 42.2816 123.393 42.0875 123.393 41.8934L122.908 21.5108ZM134.846 23.3549C134.846 22.6755 134.943 21.9961 135.234 21.4137C135.525 20.8314 135.914 20.3461 136.399 19.8608C136.981 19.4726 137.661 19.0843 138.534 18.8902C139.408 18.6961 140.475 18.502 141.737 18.502C142.999 18.502 143.97 18.599 144.843 18.8902C145.717 19.0843 146.493 19.4726 146.978 19.8608C147.561 20.249 147.949 20.7343 148.24 21.4137C148.531 21.9961 148.628 22.6755 148.628 23.3549L148.24 38.4963C148.24 39.0786 148.046 39.661 147.852 40.2433C147.561 40.8257 147.173 41.311 146.687 41.6992C146.202 42.0875 145.523 42.4757 144.649 42.6698C143.873 42.864 142.902 43.0581 141.737 43.0581C140.573 43.0581 139.602 42.961 138.825 42.6698C138.049 42.4757 137.37 42.0875 136.787 41.6992C136.302 41.311 135.914 40.8257 135.622 40.2433C135.331 39.661 135.234 39.0786 135.234 38.4963L134.846 23.3549ZM139.408 38.5933C139.408 38.9816 139.408 39.3698 139.505 39.5639C139.602 39.8551 139.699 40.0492 139.893 40.2433C140.087 40.4375 140.281 40.5345 140.573 40.5345C140.864 40.6316 141.252 40.6316 141.64 40.6316C142.028 40.6316 142.417 40.6316 142.708 40.5345C142.999 40.4375 143.193 40.3404 143.387 40.2433C143.581 40.0492 143.678 39.8551 143.775 39.5639C143.873 39.2728 143.873 38.9816 143.873 38.5933L143.484 22.8696C143.484 22.4814 143.387 22.0932 143.387 21.899C143.29 21.6079 143.193 21.4137 142.999 21.3167C142.805 21.2196 142.611 21.1226 142.417 21.0255C142.223 21.0255 141.931 20.9284 141.64 20.9284C141.349 20.9284 141.058 20.9284 140.864 21.0255C140.67 21.0255 140.475 21.1226 140.281 21.3167C140.087 21.4137 139.99 21.6079 139.893 21.899C139.796 22.1902 139.796 22.4814 139.796 22.8696L139.408 38.5933ZM152.026 19.8608C151.929 19.6667 151.929 19.4726 152.026 19.2784C152.123 19.0843 152.22 18.9873 152.414 18.8902C152.608 18.7931 152.899 18.6961 153.287 18.6961C153.676 18.6961 154.161 18.599 154.743 18.599C155.326 18.599 155.811 18.599 156.199 18.6961C156.587 18.6961 156.781 18.7931 156.976 18.8902C157.17 18.9873 157.267 19.0843 157.364 19.2784C157.461 19.4726 157.461 19.6667 157.461 19.8608L158.334 38.6904H158.723L161.537 19.8608C161.537 19.6667 161.634 19.4726 161.634 19.2784C161.732 19.0843 161.829 18.9873 161.926 18.8902C162.12 18.7931 162.314 18.7931 162.605 18.6961C162.896 18.6961 163.285 18.599 163.77 18.599C164.255 18.599 164.74 18.599 165.032 18.6961C165.323 18.6961 165.614 18.7931 165.711 18.8902C165.905 18.9873 166.002 19.0843 166.002 19.2784C166.099 19.4726 166.099 19.6667 166.196 19.8608L169.011 38.6904H169.399L170.273 19.8608C170.273 19.6667 170.273 19.4726 170.37 19.2784C170.467 19.0843 170.564 18.9873 170.758 18.8902C170.952 18.7931 171.243 18.7931 171.535 18.6961C171.923 18.6961 172.311 18.599 172.893 18.599C173.476 18.599 173.864 18.599 174.252 18.6961C174.64 18.6961 174.932 18.7931 175.126 18.8902C175.32 18.9873 175.417 19.0843 175.514 19.2784C175.611 19.4726 175.611 19.6667 175.514 19.8608L171.729 41.7963C171.729 41.9904 171.632 42.1845 171.535 42.2816C171.438 42.3787 171.34 42.4757 171.146 42.5728C170.952 42.6698 170.758 42.6698 170.467 42.6698C170.176 42.6698 169.885 42.6698 169.399 42.6698C168.817 42.6698 168.429 42.6698 168.04 42.6698C167.652 42.6698 167.361 42.5728 167.167 42.5728C166.973 42.4757 166.779 42.3787 166.682 42.2816C166.585 42.1845 166.487 41.9904 166.487 41.7963L163.77 25.7814H163.479L160.761 41.7963C160.761 41.9904 160.664 42.1845 160.567 42.2816C160.47 42.3787 160.276 42.4757 160.082 42.5728C159.887 42.6698 159.596 42.6698 159.305 42.6698C159.014 42.6698 158.529 42.6698 158.043 42.6698C157.558 42.6698 157.17 42.6698 156.879 42.6698C156.587 42.6698 156.393 42.5728 156.199 42.5728C156.005 42.4757 155.908 42.3787 155.811 42.2816C155.714 42.1845 155.617 41.9904 155.617 41.7963L152.026 19.8608ZM179.008 19.8608C179.008 19.5696 179.008 19.3755 179.105 19.2784C179.105 19.0843 179.299 18.9873 179.396 18.8902C179.591 18.7931 179.785 18.7931 180.076 18.6961C180.367 18.6961 180.755 18.599 181.241 18.599C181.629 18.599 181.92 18.599 182.211 18.599C182.502 18.599 182.696 18.6961 182.891 18.6961C183.085 18.6961 183.182 18.7931 183.279 18.8902C183.376 18.9873 183.473 19.0843 183.473 19.2784L188.811 33.7403H188.908L188.229 19.7637C188.229 19.4726 188.229 19.2784 188.326 19.1814C188.423 18.9873 188.52 18.8902 188.617 18.7931C188.811 18.6961 189.005 18.6961 189.297 18.599C189.588 18.599 189.976 18.502 190.558 18.502C191.141 18.502 191.529 18.502 191.917 18.599C192.305 18.599 192.5 18.6961 192.694 18.7931C192.888 18.8902 192.985 18.9873 193.082 19.1814C193.179 19.3755 193.179 19.5696 193.179 19.7637L192.402 41.4081C192.402 41.6022 192.402 41.7963 192.305 41.9904C192.305 42.1845 192.208 42.2816 192.111 42.4757C192.014 42.5728 191.82 42.6698 191.626 42.7669C191.432 42.864 191.141 42.864 190.752 42.864C190.364 42.864 190.073 42.864 189.879 42.7669C189.685 42.7669 189.491 42.5728 189.394 42.3787L183.667 27.6256H183.473L183.376 41.7963C183.376 41.9904 183.376 42.1845 183.279 42.2816C183.279 42.3787 183.182 42.4757 183.085 42.5728C182.988 42.6698 182.794 42.6698 182.599 42.6698C182.405 42.6698 182.114 42.6698 181.726 42.6698C181.338 42.6698 180.949 42.6698 180.658 42.6698C180.367 42.6698 180.173 42.5728 180.076 42.5728C179.979 42.4757 179.882 42.3787 179.785 42.2816C179.785 42.1845 179.688 41.9904 179.688 41.7963L179.008 19.8608Z'
              fill='white'
            />
            <path
              d='M55.65 54.3172C55.2618 54.3172 54.9706 54.2202 54.7765 54.1231C54.4853 54.0261 54.2912 53.8319 54.1941 53.6378C54 53.4437 54 53.1525 54 52.8613H54.8735C54.8735 53.0555 54.9706 53.2496 55.0677 53.4437C55.2618 53.6378 55.4559 53.6378 55.65 53.6378C55.8441 53.6378 56.0383 53.5408 56.2324 53.4437C56.3294 53.3466 56.4265 53.1525 56.4265 52.9584C56.4265 52.7643 56.3294 52.5702 56.2324 52.4731C56.1353 52.376 55.9412 52.279 55.7471 52.1819C55.553 52.0849 55.3588 52.0849 55.1647 51.9878C54.7765 51.8907 54.4853 51.6966 54.2912 51.5025C54.0971 51.3084 54 51.0172 54 50.726C54 50.4348 54.0971 50.2407 54.1941 50.0466C54.2912 49.8525 54.4853 49.6584 54.7765 49.5613C54.9706 49.4642 55.2618 49.3672 55.553 49.3672C55.8441 49.3672 56.1353 49.4642 56.3294 49.5613C56.5236 49.6584 56.7177 49.8525 56.9118 50.0466C57.0089 50.2407 57.1059 50.5319 57.1059 50.726H56.2324C56.2324 50.5319 56.1353 50.4348 56.0383 50.3378C55.9412 50.2407 55.7471 50.1437 55.553 50.1437C55.3588 50.1437 55.1647 50.1437 55.0677 50.2407C54.9706 50.3378 54.8735 50.4348 54.8735 50.629C54.8735 50.8231 54.9706 50.9201 55.0677 51.0172C55.1647 51.1143 55.2618 51.2113 55.4559 51.2113C55.65 51.3084 55.8441 51.3084 56.0383 51.4054C56.2324 51.5025 56.5236 51.5996 56.7177 51.6966C56.9118 51.7937 57.1059 51.9878 57.203 52.0849C57.3 52.279 57.3971 52.4731 57.3971 52.7643C57.3971 53.0555 57.3 53.2496 57.203 53.4437C57.1059 53.6378 56.9118 53.8319 56.6206 53.929C56.3294 54.3172 56.0383 54.3172 55.65 54.3172ZM62.6383 54.3172C62.153 54.3172 61.7648 54.2202 61.3765 54.0261C60.9883 53.8319 60.7942 53.5408 60.6001 53.1525C60.406 52.7643 60.3089 52.376 60.3089 51.8907C60.3089 51.4054 60.406 51.0172 60.6001 50.629C60.7942 50.2407 61.0854 49.9495 61.3765 49.7554C61.7648 49.5613 62.153 49.4642 62.6383 49.4642C63.1236 49.4642 63.5119 49.5613 63.9001 49.7554C64.2883 49.9495 64.4825 50.2407 64.6766 50.629C64.8707 51.0172 64.9678 51.4054 64.9678 51.8907C64.9678 52.376 64.8707 52.7643 64.6766 53.1525C64.4825 53.5408 64.1913 53.8319 63.9001 54.0261C63.6089 54.2202 63.1236 54.3172 62.6383 54.3172ZM62.6383 53.5408C63.1236 53.5408 63.4148 53.3466 63.706 53.0555C63.9972 52.7643 64.0942 52.376 64.0942 51.8907C64.0942 51.4054 63.9972 51.0172 63.706 50.726C63.4148 50.4348 63.1236 50.2407 62.6383 50.2407C62.153 50.2407 61.8618 50.4348 61.5707 50.726C61.2795 51.0172 61.1824 51.4054 61.1824 51.8907C61.1824 52.376 61.2795 52.7643 61.5707 53.0555C61.8618 53.4437 62.2501 53.5408 62.6383 53.5408ZM70.306 54.3172C69.8208 54.3172 69.4325 54.2202 69.0443 54.0261C68.7531 53.8319 68.4619 53.5408 68.2678 53.1525C68.0737 52.7643 67.9766 52.376 67.9766 51.8907C67.9766 51.4054 68.0737 51.0172 68.2678 50.629C68.4619 50.2407 68.7531 49.9495 69.0443 49.7554C69.3354 49.5613 69.8208 49.4642 70.306 49.4642C70.8884 49.4642 71.3737 49.5613 71.6649 49.8525C72.0531 50.1437 72.2472 50.5319 72.3443 51.0172H71.3737C71.2766 50.726 71.1796 50.5319 70.9855 50.4348C70.7913 50.2407 70.5002 50.2407 70.209 50.2407C69.8208 50.2407 69.4325 50.4348 69.2384 50.726C68.9472 51.0172 68.8502 51.4054 68.8502 51.8907C68.8502 52.376 68.9472 52.7643 69.2384 53.0555C69.5296 53.3466 69.8208 53.4437 70.209 53.4437C70.5002 53.4437 70.7913 53.3466 70.9855 53.2496C71.1796 53.1525 71.2766 52.9584 71.3737 52.6672H72.3443C72.2472 53.1525 72.0531 53.5408 71.6649 53.8319C71.3737 54.2202 70.8884 54.3172 70.306 54.3172ZM75.5473 54.3172V49.6584H76.4208V54.3172H75.5473ZM79.4297 54.3172L81.1767 49.6584H82.1473L83.8944 54.3172H83.0209L82.6326 53.2496H80.7885L80.4003 54.3172H79.4297ZM80.8856 52.4731H82.2444L81.565 50.5319L80.8856 52.4731ZM86.8062 54.3172V49.6584H87.6798V53.6378H89.8151V54.3172H86.8062ZM96.9004 54.3172V49.6584H98.7446C99.2299 49.6584 99.6181 49.7554 99.8122 50.0466C100.103 50.2407 100.2 50.5319 100.2 50.9201C100.2 51.2113 100.103 51.4054 100.006 51.5996C99.8122 51.7937 99.6181 51.8907 99.424 51.9878C99.7152 52.0849 99.9093 52.1819 100.103 52.376C100.298 52.5702 100.395 52.8613 100.395 53.1525C100.395 53.5408 100.298 53.8319 100.006 54.0261C99.7152 54.2202 99.3269 54.4143 98.8416 54.4143H96.9004V54.3172ZM97.774 51.5996H98.6475C98.8416 51.5996 99.0357 51.5025 99.2299 51.4054C99.424 51.3084 99.424 51.1143 99.424 50.9201C99.424 50.726 99.3269 50.5319 99.2299 50.4348C99.1328 50.3378 98.9387 50.2407 98.6475 50.2407H97.774V51.5996ZM97.774 53.5408H98.7446C99.0357 53.5408 99.2299 53.4437 99.3269 53.3466C99.424 53.2496 99.521 53.0555 99.521 52.8613C99.521 52.6672 99.424 52.4731 99.3269 52.376C99.2299 52.279 98.9387 52.1819 98.7446 52.1819H97.774V53.5408ZM105.442 54.3172C105.053 54.3172 104.762 54.2202 104.471 54.1231C104.18 54.0261 103.986 53.7349 103.792 53.5408C103.598 53.2496 103.598 52.9584 103.598 52.4731V49.5613H104.471V52.4731C104.471 52.8613 104.568 53.1525 104.762 53.2496C104.956 53.4437 105.151 53.5408 105.539 53.5408C105.83 53.5408 106.121 53.4437 106.315 53.2496C106.509 53.0555 106.606 52.7643 106.606 52.4731V49.5613H107.48V52.4731C107.48 52.8613 107.383 53.2496 107.189 53.5408C106.995 53.8319 106.801 54.0261 106.509 54.1231C106.024 54.3172 105.733 54.3172 105.442 54.3172ZM111.751 54.3172V52.6672L110.198 49.6584H111.168L112.236 51.7937L113.304 49.6584H114.274L112.721 52.6672V54.3172H111.751ZM117.186 54.3172V49.6584H118.059V54.3172H117.186ZM121.36 54.3172V49.6584H122.233L124.465 52.9584V49.6584H125.339V54.3172H124.465L122.233 51.0172V54.3172H121.36ZM130.677 54.3172C130.192 54.3172 129.804 54.2202 129.513 54.0261C129.221 53.8319 128.93 53.5408 128.736 53.1525C128.542 52.7643 128.445 52.376 128.445 51.8907C128.445 51.4054 128.542 51.0172 128.736 50.629C128.93 50.2407 129.221 49.9495 129.513 49.7554C129.901 49.5613 130.289 49.4642 130.774 49.4642C131.357 49.4642 131.745 49.5613 132.133 49.8525C132.521 50.1437 132.716 50.4348 132.813 50.9201H131.842C131.745 50.726 131.648 50.5319 131.454 50.4348C131.26 50.3378 131.065 50.2407 130.774 50.2407C130.289 50.2407 129.901 50.4348 129.707 50.726C129.415 51.0172 129.318 51.4054 129.318 51.9878C129.318 52.4731 129.415 52.8613 129.707 53.1525C129.998 53.4437 130.289 53.5408 130.774 53.5408C131.163 53.5408 131.551 53.4437 131.745 53.1525C131.939 52.9584 132.133 52.5702 132.133 52.279H130.968V51.5996H133.007V54.2202H132.23L132.133 53.6378C131.939 53.8319 131.745 54.0261 131.551 54.1231C131.26 54.3172 130.968 54.3172 130.677 54.3172ZM141.645 54.3172C141.257 54.3172 140.966 54.2202 140.771 54.1231C140.48 54.0261 140.286 53.8319 140.189 53.6378C140.092 53.4437 139.995 53.1525 139.995 52.8613C139.995 52.5702 140.092 52.279 140.286 52.0849C140.48 51.7937 140.674 51.5996 141.063 51.5025C140.966 51.3084 140.869 51.2113 140.771 51.0172C140.674 50.9201 140.674 50.726 140.674 50.5319C140.674 50.3378 140.771 50.1437 140.869 49.9495C140.966 49.7554 141.16 49.6584 141.354 49.5613C141.548 49.4642 141.839 49.3672 142.033 49.3672C142.324 49.3672 142.519 49.4642 142.713 49.5613C142.907 49.6584 143.101 49.7554 143.198 49.9495C143.295 50.1437 143.392 50.3378 143.295 50.5319H142.519C142.519 50.3378 142.421 50.2407 142.324 50.1437C142.227 50.0466 142.13 50.0466 141.936 50.0466C141.742 50.0466 141.645 50.0466 141.548 50.1437C141.451 50.2407 141.451 50.3378 141.451 50.4348C141.451 50.5319 141.451 50.629 141.548 50.8231C141.645 50.9201 141.742 51.1143 141.839 51.2113L143.198 52.4731C143.295 52.279 143.392 52.1819 143.489 51.9878L143.683 51.6966H144.557L144.363 52.1819C144.169 52.5702 143.974 52.8613 143.78 53.0555L144.848 54.1231H143.78L143.295 53.6378C143.101 53.8319 142.81 54.0261 142.519 54.1231C142.324 54.3172 142.033 54.3172 141.645 54.3172ZM140.869 52.8613C140.869 53.0555 140.966 53.2496 141.063 53.4437C141.257 53.6378 141.451 53.6378 141.742 53.6378C142.13 53.6378 142.421 53.5408 142.713 53.2496L141.451 51.9878C141.257 52.0849 141.063 52.1819 140.966 52.376C140.869 52.4731 140.869 52.6672 140.869 52.8613ZM153.389 54.3172C153.001 54.3172 152.71 54.2202 152.516 54.1231C152.225 54.0261 152.03 53.8319 151.933 53.6378C151.739 53.4437 151.739 53.1525 151.739 52.8613H152.613C152.613 53.0555 152.71 53.2496 152.807 53.4437C153.001 53.6378 153.195 53.6378 153.389 53.6378C153.583 53.6378 153.777 53.5408 153.972 53.4437C154.069 53.3466 154.166 53.1525 154.166 52.9584C154.166 52.7643 154.069 52.5702 153.972 52.4731C153.875 52.376 153.68 52.279 153.486 52.1819C153.292 52.0849 153.098 52.0849 152.904 51.9878C152.516 51.8907 152.225 51.6966 152.03 51.5025C151.836 51.3084 151.739 51.0172 151.739 50.726C151.739 50.4348 151.836 50.2407 151.933 50.0466C152.03 49.8525 152.225 49.6584 152.516 49.5613C152.71 49.4642 153.001 49.3672 153.292 49.3672C153.583 49.3672 153.875 49.4642 154.069 49.5613C154.263 49.6584 154.457 49.8525 154.651 50.0466C154.748 50.2407 154.845 50.5319 154.845 50.726H153.972C153.972 50.5319 153.875 50.4348 153.777 50.3378C153.68 50.2407 153.486 50.1437 153.292 50.1437C153.098 50.1437 152.904 50.1437 152.807 50.2407C152.71 50.3378 152.613 50.4348 152.613 50.629C152.613 50.8231 152.71 50.9201 152.807 51.0172C152.904 51.1143 153.001 51.2113 153.195 51.2113C153.389 51.3084 153.583 51.3084 153.777 51.4054C153.972 51.5025 154.263 51.5996 154.457 51.6966C154.651 51.7937 154.845 51.9878 154.942 52.0849C155.039 52.279 155.136 52.4731 155.136 52.7643C155.136 53.0555 155.039 53.2496 154.942 53.4437C154.845 53.6378 154.651 53.8319 154.36 53.929C154.069 54.3172 153.777 54.3172 153.389 54.3172ZM158.242 54.3172V49.6584H161.348V50.3378H159.116V51.5996H161.154V52.279H159.116V53.6378H161.348V54.3172H158.242ZM164.454 54.3172V49.6584H165.328V53.6378H167.366V54.3172H164.454ZM170.569 54.3172V49.6584H171.442V53.6378H173.481V54.3172H170.569ZM176.684 54.3172V49.6584H177.557V54.3172H176.684ZM180.857 54.3172V49.6584H181.731L183.963 52.9584V49.6584H184.837V54.3172H183.963L181.731 51.0172V54.3172H180.857ZM190.175 54.3172C189.69 54.3172 189.301 54.2202 189.01 54.0261C188.719 53.8319 188.428 53.5408 188.234 53.1525C188.04 52.7643 187.943 52.376 187.943 51.8907C187.943 51.4054 188.04 51.0172 188.234 50.629C188.428 50.2407 188.719 49.9495 189.01 49.7554C189.398 49.5613 189.787 49.4642 190.272 49.4642C190.854 49.4642 191.243 49.5613 191.631 49.8525C192.019 50.1437 192.213 50.4348 192.31 50.9201H191.34C191.243 50.726 191.146 50.5319 190.951 50.4348C190.757 50.3378 190.563 50.2407 190.272 50.2407C189.787 50.2407 189.398 50.4348 189.204 50.726C188.913 51.0172 188.816 51.4054 188.816 51.9878C188.816 52.4731 188.913 52.8613 189.204 53.1525C189.495 53.4437 189.787 53.5408 190.272 53.5408C190.66 53.5408 191.048 53.4437 191.243 53.1525C191.437 52.9584 191.631 52.5702 191.631 52.279H190.466V51.5996H192.504V54.2202H191.728L191.631 53.6378C191.437 53.8319 191.243 54.0261 191.048 54.1231C190.854 54.3172 190.563 54.3172 190.175 54.3172Z'
              fill='white'
            />
            <path
              d='M22.2812 48.1797H42.6013'
              stroke='white'
              strokeWidth='1.4'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
            <path
              d='M2.14766 53.4118C2.98849 54.3927 4.20303 55 5.51099 55H39.3778C40.639 55 41.9003 54.4394 42.7411 53.4118C43.5819 52.4308 44.0023 51.0761 43.8622 49.7682L40.2186 16.0882C40.1719 15.5277 39.7048 15.1073 39.1442 15.1073H31.7636V10.763C31.7636 5.391 27.6061 1 22.4677 1C17.3293 1 13.1252 5.34429 13.1252 10.7163V15.0606H5.74455C5.184 15.0606 4.71687 15.481 4.67016 16.0415L1.02656 49.7215C0.886418 51.0761 1.30683 52.4308 2.14766 53.4118ZM15.274 10.7163C15.274 6.60554 18.4971 3.24221 22.421 3.24221C26.3916 3.24221 29.5681 6.60554 29.5681 10.7163V15.0606H15.274V10.7163ZM42.0404 49.3945L42.1338 50.3754C42.2273 51.0761 41.9937 51.7768 41.5266 52.3374C41.0594 52.8979 40.4522 53.1782 39.7515 53.1782H5.09057C4.38988 53.1782 3.78261 52.8979 3.31548 52.3374C2.84836 51.7768 2.6615 51.1228 2.70822 50.3754L6.3051 16.9291H12.8916V24.6834C12.8916 25.3374 13.4054 25.8512 14.0127 25.8512C14.62 25.8512 15.1338 25.3374 15.1338 24.6834V16.9291H29.8016V24.6834C29.8016 25.3374 30.3155 25.8512 30.9228 25.8512C31.53 25.8512 32.0439 25.3374 32.0439 24.6834V16.9291H38.6304L41.9003 47.1055L42.0404 49.3945Z'
              fill='white'
              stroke='white'
              strokeWidth='0.5'
              strokeMiterlimit='10'
            />
            <path
              d='M31.0578 42.8068C30.2169 43.6477 29.0958 44.0681 27.928 44.0681C26.7602 44.0214 25.6391 43.5543 24.845 42.6667L23.3501 41.0318C22.229 39.8172 21.902 38.1823 22.3225 36.6408L24.9384 39.4435L25.7325 40.2376L26.4799 41.0318C27.3207 41.9193 28.7221 41.966 29.6097 41.1252C29.7965 40.8916 29.9834 40.7048 30.1235 40.4245C30.2169 40.1442 30.3104 39.8639 30.3104 39.5837C30.3104 39.3034 30.2636 38.9764 30.1702 38.6961C30.0768 38.4158 29.8899 38.1823 29.7031 37.9487L28.9557 37.1079L25.5924 33.4643C27.0872 33.1373 28.6754 33.511 29.7965 34.7255L31.338 36.3605C32.1321 37.248 32.5993 38.4158 32.5526 39.5837C32.4124 40.8449 31.8986 41.966 31.0578 42.8068ZM20.3605 32.9504L25.6858 38.6961C26.1062 39.1632 26.8069 39.1632 27.2273 38.7428C27.6477 38.2757 27.6477 37.575 27.274 37.1546L21.9488 31.4089C21.5283 30.9418 20.8277 30.9418 20.4072 31.3622C19.9868 31.7826 19.9868 32.53 20.3605 32.9504ZM18.0716 32.1096L22.229 36.5473C20.7342 36.921 19.146 36.5006 18.0249 35.2861L16.4834 33.6511C15.6892 32.7636 15.2221 31.5958 15.2688 30.428C15.3155 29.2134 15.7827 28.0923 16.6235 27.2515C17.4643 26.4107 18.5854 25.9902 19.7533 25.9902C20.9211 26.0369 22.0422 26.5041 22.8363 27.3916L24.3311 29.0266C25.4522 30.2411 25.7792 31.876 25.3588 33.4176L21.2014 28.9799C20.3605 28.0456 18.9591 28.0456 18.0716 28.8864C17.2775 29.774 17.2308 31.1754 18.0716 32.1096Z'
              fill='white'
            />
            <path
              d='M14.7814 49.3028H17.4441C18.0513 49.3028 18.5185 48.7889 18.5185 48.1817C18.5185 47.5744 18.0513 47.0605 17.4441 47.0605H14.7814C14.1742 47.0605 13.707 47.5744 13.707 48.1817C13.707 48.8356 14.2209 49.3028 14.7814 49.3028Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='hidden md:block'>
          <Button
            className='bg-white text-primaryColor p-2 w-[173px] hover:bg-white rounded-xl'
            startIcon={
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='15' cy='15' r='15' fill='#6A5B40' />
                <path
                  d='M20.4238 14.134C21.0905 14.5189 21.0905 15.4811 20.4238 15.866L13.0392 20.1295C12.3725 20.5144 11.5392 20.0333 11.5392 19.2635L11.5392 10.7365C11.5392 9.96667 12.3725 9.48555 13.0392 9.87045L20.4238 14.134Z'
                  fill='white'
                />
              </svg>
            }
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
