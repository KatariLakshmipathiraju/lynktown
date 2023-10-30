import { Breadcrumbs, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const BreadCrumbs = ({ paths, currentPath }) => {
  const mobile = useMediaQuery('(max-width:500px)');
  return (
    <>
      {!mobile && (
        <div className={styles.breadCrumbs}>
          <Breadcrumbs aria-label='breadcrumb'>
            {paths.map((path, i) => {
              return (
                <Link href={path.to} key={i}>
                  {path.name}
                </Link>
              );
            })}

            <Typography color='text.primary'>{currentPath}</Typography>
          </Breadcrumbs>
        </div>
      )}
    </>
  );
};

export default BreadCrumbs;
