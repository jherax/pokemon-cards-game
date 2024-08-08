import {Img} from 'react-image';
import {SkeletonTheme} from 'react-loading-skeleton';

import FlexSkeleton from '../Skeleton/FlexSkeleton';
import {SIZES, useStyles} from './Icon.styled';

const Icon = (props: IconProps) => {
  const {
    img,
    name,
    text,
    skeleton,
    boxShadow,
    bg = '#ebebeb',
    size = 'small',
    hover = '',
  } = props;
  const shouldAddSkeleton = skeleton ? true : null;
  const classes = useStyles({bg, boxShadow, size});

  return (
    <div className={classes.container}>
      <div className={`${classes.icon} ${hover && classes.hoverIcon}`}>
        <Img
          src={img}
          alt={name}
          title={name}
          className={classes.img}
          loader={
            shouldAddSkeleton && (
              <SkeletonTheme baseColor={bg}>
                <FlexSkeleton
                  circle={true}
                  width={SIZES[size]}
                  height={SIZES[size]}
                />
              </SkeletonTheme>
            )
          }
        />
      </div>
      {text && <div className={classes.text}>{text}</div>}
    </div>
  );
};

export default Icon;

export type IconProps = Readonly<{
  img: string;
  name: string;
  text?: string;
  bg?: string;
  hover?: boolean;
  skeleton?: boolean;
  size?: IconSize;
  boxShadow?: boolean;
}>;
