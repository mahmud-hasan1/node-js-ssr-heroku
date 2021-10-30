import React, {FC} from 'react';

interface AppProps{
  componentProps?: object
}

const App: FC<AppProps> = (props) => {
  return (
    <div>
      <h1>This is SSR APPLICATION Error: Cannot find module '@loadable/server'
       </h1>
    </div>
  );
};

export default App;