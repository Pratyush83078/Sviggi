import ReactDom from 'react-dom/client'
import appRouter from './src/components/body'
import { RouterProvider } from 'react-router-dom';

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
