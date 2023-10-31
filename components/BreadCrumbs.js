import { Breadcrumbs, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const BreadCrumbs = ({ paths, currentPath }) => {
  const mobile = useMediaQuery('(max-width:500px)');
  return (
    <>
      {!mobile && (
        <div className='my-4'>
          <Breadcrumbs aria-label='breadcrumb'>
            {paths.map((path, i) => {
              return (
                <Link
                  className='hover:underline font-poppins !font-medium '
                  href={path.to}
                  key={i}
                >
                  {path.name}
                </Link>
              );
            })}

            <Typography className=' !font-semibold poppins !text-primaryColor'>
              {currentPath}
            </Typography>
          </Breadcrumbs>
        </div>
      )}
    </>
  );
};

export default BreadCrumbs;
