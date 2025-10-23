import ReactDom from 'react-dom/client'
import appRouter from './src/components/body'
import { RouterProvider } from 'react-router-dom';
let rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDom.createRoot(rootElem);
  root.render(<RouterProvider router={appRouter} />);
}
