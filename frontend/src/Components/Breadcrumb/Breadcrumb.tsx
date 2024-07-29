import {Link} from 'react-router-dom';

import {useStyles} from './Breadcrumb.styled';

function Breadcrumb({pathname, list}: BreadcrumbProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul className={classes.ul}>
        {list.map(p => {
          const current = pathname === p.url;
          const liClass = current ? classes.current : '';
          return (
            <li key={p.name} className={`${classes.li} ${liClass}`}>
              {current ? p.name : <Link to={p.url}>{p.name}</Link>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;

export type BreadcrumbProps = Readonly<{
  pathname: string;
  list: BreadcrumbLink[];
}>;

export type BreadcrumbLink = Readonly<{
  url: string;
  name: string;
}>;
