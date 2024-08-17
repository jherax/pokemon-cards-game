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
    size = 'small',
    bg = '#ebebeb',
  } = props;
  const shouldAddSkeleton = skeleton ? true : null;
  const classes = useStyles({bg, boxShadow, size});

  return (
    <div className={classes.container}>
      <div className={`${classes.icon} ${classes.hoverIcon}`}>
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
  name: string;
  img: string;
  bg?: string;
  size?: IconSize;
  text?: string;
  skeleton?: boolean;
  boxShadow?: boolean;
}>;
