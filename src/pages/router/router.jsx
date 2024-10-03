// src/router/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './paths'; 

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element} 
                    >
                        {route.children && route.children.map((childRoute, childIndex) => (
                            <Route
                                key={childIndex}
                                index={childRoute.index}
                                path={childRoute.path}
                                element={childRoute.element}
                            />
                        ))}
                    </Route>
                ))}
            </Routes>
        </Router>
    );
};

export default AppRouter;
