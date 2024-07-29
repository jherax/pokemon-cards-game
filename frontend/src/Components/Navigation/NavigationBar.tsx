import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import Breadcrumb, {type BreadcrumbLink} from '../Breadcrumb/Breadcrumb';
import {useStyles} from './NavigationBar.styled';

function NavigationBar() {
  const classes = useStyles();
  const {pathname} = useLocation();
  const [paths, setPaths] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    const fullPath = pathname;
    const segments = fullPath.split('/');
    let linkPaths: BreadcrumbLink[] = [{name: 'Types', url: '/'}];

    for (let i = 1; i < segments.length; i++) {
      const i1 = fullPath.indexOf(`/${segments[i]}`);
      const i2 = segments[i].length + 1;
      linkPaths.push({
        name: segments[i],
        url: fullPath.substring(0, i1 + i2),
      });
    }

    setPaths(linkPaths);
  }, [pathname]);

  return (
    <div className={classes.container}>
      <Breadcrumb list={paths} pathname={pathname} />
    </div>
  );
}

export default NavigationBar;
