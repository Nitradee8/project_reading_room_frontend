import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../page/LoginPage';
import Layout from '../layout/Layout';
import HomePage from '../page/HomePage';
import EbookFreePage from '../page/EbookFreePage';
import BestSellingEbookPage from '../page/BestSellingEbookPage';
import RedirectIfAuthentcated from '../features/auth/RedirectIfAuthentcated';
import AdminPage from '../page/AdminPage';
import Book from '../components/Book';
import BookshelfUserPage from '../page/BookshelfUserPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: 'login', element:
                    <RedirectIfAuthentcated>
                        <LoginPage />
                    </RedirectIfAuthentcated>
            },
            { path: '', element: <HomePage /> },
            { path: 'bookshelfpage', element: <BookshelfUserPage /> },
            { path: 'bookshelfpage/:id', element: <Book /> },
            { path: 'bestSelling/bestSellingId', element: <BestSellingEbookPage /> },
            { path: 'ebookFree/:ebookFreeId', element: <EbookFreePage /> },
            { path: 'admin', element: <AdminPage /> },
            // { path: 'admin', element: <AdminPage /> },
        ]
    },

]);

export default function Route() {
    return <RouterProvider router={router} />;
}