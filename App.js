import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {savePlan} from './src/utils';

const App = props => {
  useEffect(() => {
    // savePlan(null).then(() => {
    //   console.log('Đã xóa dữ liệu');
    // });
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
