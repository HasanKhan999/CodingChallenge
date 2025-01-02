import React, { FC } from 'react';
import { DimensionValue, View } from 'react-native';

interface SpacerProps {
  mt?: DimensionValue;
  mb?: DimensionValue;
  mr?: DimensionValue;
  ml?: DimensionValue;
  mh?: DimensionValue;
  mv?: DimensionValue;
};

const Spacer: FC<SpacerProps> = ({ mt, mb, mr, ml, mh, mv }) => {
  return (
    <View 
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginRight: mr,
        marginLeft: ml,
        marginHorizontal: mh,
        marginVertical: mv
      }}
    />
  );
};

export default Spacer;